import React from "react";
import Card from "./components/Card";

const Orders = () => {
  return (
    <React.Fragment>
      <Card title="Latest Orders">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">Tokens</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>....</td>
              <td>12</td>
              <td>$12.13</td>
              <td>$144.50</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>....</td>
              <td>9</td>
              <td>$12.13</td>
              <td>$144.50</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>....</td>
              <td>6</td>
              <td>$12.13</td>
              <td>$144.50</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </React.Fragment>
  );
};

export default Orders;
