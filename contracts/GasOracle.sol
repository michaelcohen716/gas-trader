pragma solidity ^0.4.24;

import "chainlink/contracts/ChainlinkClient.sol";
import "./ERC20.sol";

contract GasOracle is ChainlinkClient {
  uint256 ORACLE_PAYMENT = 1 * LINK;
  bytes32 jobId;

  uint currentGasPrice;

  event OracleUpdated(uint newPrice);

  address LINK_ADDRESS_ROPSTEN = 0x20fE562d797A42Dcb3399062AE9546cd06f63280;
  address ORACLE_ADDRESS_ROPSTEN = 0xc99B3D447826532722E41bc36e644ba3479E4365; // AMBERDATA

  constructor (bytes32 _jobId) public {
    setPublicChainlinkToken();
    jobId = _jobId;
  }

  // only works if contract is funded with > 1 LINK
  function createRequest() public returns (bytes32 requestId) {
      Chainlink.Request memory req = buildChainlinkRequest(
          jobId,
          this,
          this.fulfill.selector
      );

      req.add("extPath", "transactions/gas/predictions");
      req.add("path", "payload.average.gasPrice");

      requestId = sendChainlinkRequestTo(ORACLE_ADDRESS_ROPSTEN, req, ORACLE_PAYMENT);
  }

  function fulfill(bytes32 _requestId, uint256 _gasPrice)
    public
    recordChainlinkFulfillment(_requestId)
  {
    currentGasPrice = _gasPrice;
    emit OracleUpdated(_gasPrice);
  }

  function getCurrentGasPrice() public view returns(uint _currentGasPrice){
    return currentGasPrice;
  }

  function getLinkBalance() view returns (uint _balance){
    return ERC20(LINK_ADDRESS_ROPSTEN).balanceOf(address(this));
  }

}
