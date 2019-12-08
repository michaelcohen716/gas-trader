var GasOracle = artifacts.require("./GasOracle.sol");
var GasSynth = artifacts.require("./GasSynth.sol");

module.exports = function(deployer) {
  deployer.deploy(GasSynth, GasOracle.address);
};
