import React from "react";
import Web3 from "web3";
import GasOracle from "./contracts/GasOracle.json";
import LinkToken from "./contracts/LinkTokenInterface.json";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

const GAS_ORACLE_ADDRESS = "0x0a6701bfAEa5a3eA516976928fdc9DAfb2ED335c"; // our contract

async function GasOracleContract() {
  return await new web3.eth.Contract(GasOracle.abi, GAS_ORACLE_ADDRESS);
}

// only works if contract is funded with > 1 LINK
export async function createRequest() {
  const contr = await GasOracleContract();
  await contr.methods.createRequest().send({
    from: web3.eth.accounts.givenProvider.selectedAddress
  });
}

const ROPSTEN_LINK_TOKEN_ADDRESS = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";

export async function transferLink() {
  const linkTokenContract = await new web3.eth.Contract(
    LinkToken.abi,
    ROPSTEN_LINK_TOKEN_ADDRESS
  );
  await linkTokenContract.methods
    .transfer(GAS_ORACLE_ADDRESS, web3.utils.toWei("1", "ether"))
    .send({
      from: web3.eth.accounts.givenProvider.selectedAddress
    });
}

export async function getCurrentGasPrice(){
    const contr = await GasOracleContract();
    const gasPrice = await contr.methods.getCurrentGasPrice().call();
    console.log('gasprice', gasPrice)
}

export async function getLinkBalance(){
    const contr = await GasOracleContract();
    const bal = await contr.methods.getLinkBalance().call();
    console.log('bal', bal)
}

function Interface() {
  return (
      <div>
          <button onClick={transferLink}>
              Send LINK
          </button>
          <button onClick={() => createRequest(false)}>
              Send Oracle Request
          </button>
          <button onClick={getCurrentGasPrice}>
              Get current gas price
          </button>
          <button onClick={getLinkBalance}>
              Get link balance
          </button>
      </div>

  )
}

export default Interface;
