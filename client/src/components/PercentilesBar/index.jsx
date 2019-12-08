import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { AMBER_API_KEY } from "../../constants";
import Card from "../Card";

const PercentilesBar = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPercentiles() {
      try {
        // const web3 = await getWeb3();
        const result = await axios.get(
          `https://web3api.io/api/v2/transactions/gas/percentiles`,
          { headers: { "x-api-key": AMBER_API_KEY } }
        );
        const percentiles = result.data.payload;
        console.log(percentiles);
        setData(Object.keys(percentiles).map(p => percentiles[p]));
      } catch (err) {
        console.error(err);
      }
    }

    getPercentiles();
  }, []);

  return (
    <Card title="Gas Percentiles">
      <Bar
        data={{
          labels: [
            0,
            1,
            2,
            3,
            4,
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80,
            85,
            90,
            95,
            96,
            97,
            98,
            99,
            100
          ],
          datasets: [
            {
              label: "Label",
              data
            }
          ]
        }}
      />
    </Card>
  );
};

export default PercentilesBar;
