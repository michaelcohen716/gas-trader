pragma solidity 0.4.24;

import "./SafeMath.sol";
import "./Ownable.sol";
import "./ERC20Mintable.sol";
import "./ERC20Detailed.sol";

interface GasOracle {
    function getCurrentGasPrice() returns(uint);
}

contract GasSynth is Ownable, ERC20Mintable, ERC20Detailed {
    using SafeMath for uint256;

    uint256 CR = 150;
    uint256 currentPrice;
    IERC20 marginToken;

    GasOracle gasOracle;

    uint collateral;

    constructor (address _gasOracle)
        public
        ERC20Detailed('GasSynth', 'GSYN', 18)
    {
        gasOracle = GasOracle(_gasOracle);
    }

    function provideCollateral(uint256 amount) external {
    }

    function update() public {
        currentPrice = gasOracle.getCurrentGasPrice();
    }

    function penalize() public {
    }

    // only contract owner can run
    function mint(uint256 amount) public {

    }

    function purchase(uint256 amount) payable external {
        require(amount <= balanceOf(address(this)), "Not enough tokens available");
        require(msg.value == amount.mul(currentPrice), "Incorrect value sent");

        transfer(msg.sender, amount);
    }

    // only contract owner can run
    function withdraw(uint256 amount) external {
        // require()
    }
}
