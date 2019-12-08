import React from "react";
import Card from "./components/Card";

import styled from "styled-components";
import AboutTabs from "./components/AboutTabs";

const Orders = () => {
  return (
    <React.Fragment>
      <Card title="About">
        {/* <AboutTabs /> */}
        <p>
          Using Amerbdata gas data in order to create a synthetic gas token.
          Using Chainlink as an oracle to push to chain. Arbitrage on network
          congestion. Uses Uniswap for frontend integration for trading.
        </p>
        <p>Links here</p>
      </Card>
    </React.Fragment>
  );
};

export default Orders;
