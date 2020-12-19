import React from "react";
import Card from "./components/Card";

const About = () => {
  return (
    <React.Fragment>
      <Card title="About">
        {/* <AboutTabs /> */}
        <h4>Overview:</h4>
        <p>
          <em>GasSynth</em> is a synthetic token tied to the average value of
          Ethereum gas. Using Amerbdata gas data in order to create a synthetic
          gas token. Using Chainlink as an oracle to push to chain. Arbitrage on
          network congestion. Uses Uniswap for frontend integration for trading.
        </p>
        <h4>Links:</h4>
        <ol>
          <li>
            <p>
              See the <em>GasSynth</em> Github
              <a href="https://github.com/michaelcohen716/gas-trader"> here</a>
            </p>
          </li>
        </ol>
      </Card>
    </React.Fragment>
  );
};

export default About;
