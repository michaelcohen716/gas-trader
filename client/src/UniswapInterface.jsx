import React from "react";
import Web3 from "web3";
import UniswapExchange from "./abi/UniswapExchange.json";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

const PLACEHOLDER_EXCHANGE_ADDRESS =
  "0xc4659c4DD66d1175D8b3C53b195911AD493Bb2eB"; // replace this

async function ExchangeContract() {
  return await new web3.eth.Contract(
    UniswapExchange,
    PLACEHOLDER_EXCHANGE_ADDRESS
  );
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

function UniswapInterface() {
  return (
    <div>
      <button onClick={() => ethForToken(0.1)}>Exchange ETH for token</button>
      <button onClick={() => tokenForEth(3)}>Exchange Token for ETH</button>
    </div>
  );
}

export default UniswapInterface;
