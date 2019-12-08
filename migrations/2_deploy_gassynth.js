var GasSynth = artifacts.require("./GasSynth.sol");

const JOB_ID_UINT_AMBERDATA = "76df5967ddf64011930d20ac29b5f463"

const jobId = web3.utils.toHex(JOB_ID_UINT_AMBERDATA)

module.exports = function(deployer) {
  deployer.deploy(GasSynth, jobId);
};
