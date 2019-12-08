pragma solidity 0.4.24;

import "./SafeMath.sol";
import "./Ownable.sol";
import "./ERC20Mintable.sol";
import "./ERC20Burnable.sol";
import "./ERC20Detailed.sol";
import "./GasOracle.sol";

contract GasSynth is Ownable, ERC20Mintable, ERC20Burnable, ERC20Detailed {
    using SafeMath for uint256;

    uint256 goalCR = 150;
    uint256 txFee = 3; // 0.3%
    uint256 currentPrice;

    GasOracle gasOracle;

    constructor (address _gasOracle)
        public
        ERC20Detailed('GasSynth', 'GSYN', 18)
    {
        gasOracle = GasOracle(_gasOracle);
    }

    function calculateCR(uint256 balance, uint256 totalSupply)
        public
        view
        returns (uint256)
    {
        uint256 pricePerTKNBit = currentPrice / (10 ** decimals());
        return (balance * 100) / (totalSupply * pricePerTKNBit);
    }

    function currentCR() public view returns (uint256) {
        return calculateCR(address(this).balance, totalSupply());
    }

    function mint(uint256 amount) public onlyMinter {
        require(
            calculateCR(address(this).balance, totalSupply() + amount) >= goalCR,
            'Insufficient collateral to mint tokens.'
        )

        super.mint(owner(), amount);
    }

    // Take a transaction fee to reward the collateral provider
    function transfer(address recipient, uint256 amount) public returns (bool) {
        uint256 txFeeAmount = 0;

        // Only award txFee if CR is above goal
        if (currentCR() >= goalCR) {
            txFeeAmount = ((amount * 1000) * txFee) / 1000;
            super.transfer(owner(), txFeeAmount);
        }

        // Ideally we would burn the txFee and return ether to msg.sender to
        // improve CR if the current CR is too low.

        return super.transfer(recipient, amount - txFeeAmount);
    }

    function redeem(uint256 amount) public {
        uint256 redeemedValue = amount * (currentPrice / (10 ** decimals()));

        require(
            redeemedValue <= address(this).balance,
            'Insufficient balance to redeem tokens.'
        );

        burn(amount);
        msg.sender.transfer(redeemedValue);
    }

    function update() public {
        currentPrice = gasOracle.getCurrentGasPrice();
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(
            amount <= address(this).balance,
            'Insufficient balance to withdraw ether.'
        );

        require(
            calculateCR(address(this).balance - amount, totalSupply()) >= goalCR,
            'Insufficient collateral to withdraw ether.'
        );

        owner().transfer(amount);
    }

    function() external payable {}
}
