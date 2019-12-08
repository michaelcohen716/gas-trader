import React, { useEffect, useState } from "react";
import PercentilesBar from "./components/PercentilesBar";
import Card from "./components/Card";
import { AMBER_API_KEY } from "./constants";
import axios from "axios";

const Dashboard = () => {
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
          <Card title="Hourly % Change">
            <div className="text-center">
              {stats.hourlyPercentChangeETH || 0}%
            </div>
          </Card>
        </div>
        <div className="col-md-4">
          <Card title="Daily % Change">
            <div className="text-center">
              {stats.dailyPercentChangeETH || 0}%
            </div>
          </Card>
        </div>
        <div className="col-md-4">
          <Card title="Weekly % Change">
            <div className="text-center">
              {stats.weeklyPercentChangeETH || 0}%
            </div>
          </Card>
        </div>
        <div className="col-md-12">
          <PercentilesBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
