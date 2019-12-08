import React, { useEffect, useState } from "react";
// import Card from "./components/Card";
import { AMBER_API_KEY } from "../../constants";
import axios from "axios";
import Loading from "../Loading";

const Stat = ({ stat }) => (
  <div className="text-center">{stat ? `${stat}` : <Loading />}</div>
);

const ETHPrice = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          `https://web3api.io/api/v2/market/prices/eth/wap/latest`,
          { headers: { "x-api-key": AMBER_API_KEY } }
        );
        const data = result.data.payload.eth_usd;
        console.log("Result: " + result);
        console.log("Data:");
        console.log(data);
        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <Stat stat={stats.twap5m} />
        </div>
        <div className="col-6">
          <p>ETH</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ETHPrice;

/* <div className="row">
        <div className="col-md-4">
          <StatCard
            title="Hourly % Change"
            stat={stats.hourlyPercentChangeETH}
          />
        </div>
        <div className="col-md-4">
          <StatCard title="Daily % Change" stat={stats.dailyPercentChangeETH} />
        </div>
        <div className="col-md-4">
          <StatCard
            title="Weekly % Change"
            stat={stats.weeklyPercentChangeETH}
          />
        </div>
        <div className="col-md-12">
          <PercentilesBar />
        </div>
      </div> */
//   </React.Fragment>
