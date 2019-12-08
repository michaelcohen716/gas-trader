import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import Loading from "../Loading";

const Stat = ({ title, stat }) => (
  <React.Fragment>
    <div className="text-center">{stat ? `${stat}` : <Loading />}</div>
  </React.Fragment>
);

const GasPrediction = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          `https://www.etherchain.org/api/gasPriceOracle`
        );
        console.log(result);
        const data = result.data;
        console.log("Etherchain GasPrediction Data:");
        console.log(data);
        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  console.log(stats);

  return (
    <React.Fragment>
      <Card title="Predicted Gas Confirmation Times:">
        <div className="row">
          <div className="col-10">
            <p>{"Save Low (< 30 mins)"}</p>
          </div>
          <div className="col-2">
            <Stat title={""} stat={stats.safeLow} />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <p>{"Standard (< 5 mins)"}</p>
          </div>
          <div className="col-2">
            <Stat stat={stats.standard} />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <p>{"Fast (< 1 min)"}</p>
          </div>
          <div className="col-2">
            <Stat stat={stats.fast} />
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <p>{"Confirms in 1-2 blocks"}</p>
          </div>
          <div className="col-2">
            <Stat stat={stats.fastest} />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default GasPrediction;

// <div className="col-md-4">
//       <StatCard
//         title="Hourly % Change"
//         stat={stats.hourlyPercentChangeETH}
//       />
//     </div>
//     <div className="col-md-4">
//       <StatCard title="Daily % Change" stat={stats.dailyPercentChangeETH} />
//     </div>
//     <div className="col-md-4">
//       <StatCard
//         title="Weekly % Change"
//         stat={stats.weeklyPercentChangeETH}
//       />
//     </div>
//     <div className="col-md-12">
//       <PercentilesBar />
//     </div>
//   </div>

// <div className="row container mx-0 my-1">
//   <p>Predicted Gas Confirmation Times:</p>

//   <div className="text-left my-0">
//     {/* <div className="row">{stats.safeLow}</div> */}
//   </div>
// </div>;
