var GasTrader = artifacts.require("./GasTrader.sol");

module.exports = function(deployer) {
  deployer.deploy(GasTrader);
};
