import React from "react";
import Card from './components/Card';
import Loading from './components/Loading';
import UniswapInterface from "./UniswapInterface";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Card title="Welcome to VaporTrader">
          <h4>What is VaporTrader?</h4>
          <p>VaporTrader is a platform for managing network congestion risk on Ethereum. 
            Traders can hedge their exposure or speculate on gas price via our easy interface.
          </p>
          <h4>How does it work?</h4>
          <p>VaporTrader leverages the power of Ethereum, Chainlink, Amber Data and Uniswap to provide permissionless access to ETH gas trading.</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
