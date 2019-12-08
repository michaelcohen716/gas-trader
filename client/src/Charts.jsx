import React, { useEffect, useState } from "react";
import PercentilesBar from "./components/PercentilesBar";
import Card from "./components/Card";
import { AMBER_API_KEY } from "./constants";
import axios from "axios";
import Loading from './components/Loading';
import PriceHistory from "./components/PriceHistory";

const StatCard = ({ title, stat }) => (
  <Card title={title}>
    <div className="text-center">
      {
        stat ? `${stat}%` : (<Loading />)
      }
    </div>
  </Card>
);

const Charts = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          `https://web3api.io/api/v2/market/tokens/prices/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2/latest`,
          { headers: { "x-api-key": AMBER_API_KEY } }
        );
        const data = result.data.payload;
        console.log("Data:");
        console.log(data);
        setStats(data[0]);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <StatCard title="Hourly % Change" stat={stats.hourlyPercentChangeETH} />
        </div>
        <div className="col-md-4">
          <StatCard title="Daily % Change" stat={stats.dailyPercentChangeETH} />
        </div>
        <div className="col-md-4">
          <StatCard title="Weekly % Change" stat={stats.weeklyPercentChangeETH} />
        </div>
        <div className="col-md-12">
          <PriceHistory />
          <PercentilesBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;
