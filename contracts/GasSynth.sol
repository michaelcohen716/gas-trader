pragma solidity 0.4.24;

import "./SafeMath.sol";
import "./Ownable.sol";
import "./ERC20Mintable.sol";
import "./ERC20Detailed.sol";

contract GasSynth is Ownable, ERC20Mintable, ERC20Detailed {
    using SafeMath for uint256;

    uint256 CR = 150;
    uint256 currentPrice;
    IERC20 marginToken;

    constructor ()
        public
        ERC20Detailed('GasSynth', 'GSYN', 18)
    {}

    function provideCollateral(uint256 amount) external {
    }

    function update() public {
    }

    function penalize() public {
    }

    function mint(uint256 amount) public {
    }

    function purchase(uint256 amount) external {
    }

    function withdraw(uint256 amount) external {
    }
}
