pragma solidity ^0.4.24;

import "chainlink/contracts/ChainlinkClient.sol";

contract GasTrader is ChainlinkClient {
  uint256 oraclePayment = 1 * LINK;
  bytes32 jobId;

  uint currentGasPrice;

  constructor (bytes32 _jobId) public {
    setPublicChainlinkToken();
    jobId = _jobId;
  }

  function createRequest(
        address _oracle,
        bytes32 _jobId,
        string _baseCurrency, // USD
        string _symbol, // EUR
        int256 _times
  ) public returns (bytes32 requestId) {
      Chainlink.Request memory req = buildChainlinkRequest(
          _jobId,
          this,
          this.fulfill.selector
      );
      req.add("extPath", "transactions/gas/predictions");
      req.add("path", "payload.average.gasPrice");
      requestId = sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
  }

  function fulfill(bytes32 _requestId, uint256 _gasPrice)
    public
    recordChainlinkFulfillment(_requestId)
  {
    currentGasPrice = _gasPrice;
  }

  function getCurrentGasPrice() public view returns(uint _currentGasPrice){
    return currentGasPrice;
  }

}
