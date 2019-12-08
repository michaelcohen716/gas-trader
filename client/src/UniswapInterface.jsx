import React from "react";
import Web3 from "web3";
import { ethers } from "ethers"; // using ethers for event listening
import UniswapExchange from "./abi/UniswapExchange.json";
import UniswapFactory from "./abi/UniswapFactory.json";
import ERC20 from "./abi/ERC20.json";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}


// ropsten addresses
const UNISWAP_FACTORY_ADDRESS = "0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351";
const UNISWAP_EXCHANGE_ADDRESS = "0xc4659c4DD66d1175D8b3C53b195911AD493Bb2eB";
const TOKEN_ADDRESS = "0x701a74998C0091ec2C8278Ca223Ce3760DE0747e";


export async function getPastEvents(){
    const exchContr = await ExchangeContract();
    const allLogs = await exchContr.getPastEvents({ fromBlock: 0, toBlock: "latest" });
    console.log('all logs', allLogs)
    return allLogs;
}

// getPastEvents()

async function ExchangeContract() {
  return await new web3.eth.Contract(UniswapExchange, UNISWAP_EXCHANGE_ADDRESS);
}

const DEADLINE_FROM_NOW = 60 * 15; // 15 min...uniswap takes a deadline param
const deadline = Math.ceil(Date.now() / 1000) + DEADLINE_FROM_NOW;
const minTokens = 1;

export async function ethForToken(valueInEth) {
  const exchContr = await ExchangeContract();

  await exchContr.methods.ethToTokenSwapInput(minTokens, deadline).send({
    from: web3.eth.accounts.givenProvider.selectedAddress,
    value: web3.utils.toWei(String(valueInEth), "ether")
  });
}

export async function tokenForEth(tokens) {
  const exchContr = await ExchangeContract();
  exchContr.methods
    .tokenToEthSwapInput(
      web3.utils.toWei(String(tokens), "ether"),
      minTokens, // min liquidity
      deadline
    )
    .send({
      from: web3.eth.accounts.givenProvider.selectedAddress
    });
}

export async function ExchangeContractEthers() {
  let provider = ethers.providers.getDefaultProvider("ropsten");
  let contract = new ethers.Contract(
    UNISWAP_EXCHANGE_ADDRESS,
    UniswapExchange,
    provider
  );
  return contract;
}

async function FactoryContract() {
  return await new web3.eth.Contract(UniswapFactory, UNISWAP_FACTORY_ADDRESS);
}

export async function createTokenExchange() {
  const contr = await FactoryContract();
  await contr.methods.createExchange(TOKEN_ADDRESS).send({
    from: web3.eth.accounts.givenProvider.selectedAddress
  })
}

export async function addLiquidity() {
  const contr = await ExchangeContract();

  // ADD LIQUIDITY
  const DEADLINE_FROM_NOW = 60 * 15;
  const deadline = Math.ceil(Date.now() / 1000) + DEADLINE_FROM_NOW;

  await contr.methods.addLiquidity(1, 5000, deadline).send({
    from: web3.eth.accounts.givenProvider.selectedAddress,
    value: web3.utils.toWei("1", "ether")
  })
}

async function TokenContract(){
  return await new web3.eth.Contract(ERC20, TOKEN_ADDRESS);
}

export async function approveERC20(_from, _privateKey) {
  const tokenContr = await TokenContract();
  console.log('toekn contact', tokenContr)
  await tokenContr.methods.approve(UNISWAP_EXCHANGE_ADDRESS, 100000000000000).send({
    from: web3.eth.accounts.givenProvider.selectedAddress
  })
}


function UniswapInterface() {
  return (
    <div>
      <button onClick={() => ethForToken(0.1)}>Exchange ETH for token</button>
      <button onClick={() => tokenForEth(3)}>Exchange Token for ETH</button>
      <button onClick={() => createTokenExchange()}>Create token exchange</button>
      <button onClick={() => addLiquidity()}>Add liquidity</button>
      <button onClick={() => approveERC20()}>Approve</button>
    </div>
  );
}

export default UniswapInterface;
