const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const walletFile = require('./wallet.json');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(walletFile.ropsten_mnemonics, walletFile.ropsten_provider);
      },
      network_id: 3,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
