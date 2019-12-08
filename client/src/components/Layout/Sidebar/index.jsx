import React, { useState, useEffect } from "react";
import CurrentPrice from "../../CurrentPrice";
import Account from "../../Account";
import axios from "axios";
import { AMBER_API_KEY } from "../../../constants";

const Sidebar = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function getPrice() {
      try {
        const result = await axios.get(
          `https://web3api.io/api/v2/transactions/gas/predictions`,
          { headers: { "x-api-key": AMBER_API_KEY } }
        );
        const predictions = result.data.payload;
        setPrice(predictions.average.gasPrice / 100000000);
      } catch (err) {
        console.error(err);
      }
    }

    getPrice();
  });

  return (
    <div className="col-md-4">
      <CurrentPrice price={price} />
      <Account price={price} />
    </div>
  );
};

export default Sidebar;
