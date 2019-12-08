import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from "./components/Card";
import { getPastEvents } from "./UniswapInterface";

const TableRow = styled.tr`
  td {
    font-size: 12px;
  }
`;

const Orders = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    async function getEvents() {

      try {
        const response = await getPastEvents();
        setEvents(response);
      } catch(err) {
        console.error(err);
      }

    }

    getEvents();
    
  }, []);

  return (
    <React.Fragment>
      <Card title="Latest Orders">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">Event</th>
              <th scope="col">ETH</th>
              <th scope="col">Tokens</th>
            </tr>
          </thead>
          <tbody>
            {
              events.filter(ev => ev.event === "EthPurchase" || ev.event === "TokenPurchase").map(ev => (
                <TableRow key={ev.id}>
                  <td>{ev.address}</td>
                  <td>{ev.event}</td>
                  <td>{parseFloat((ev.returnValues.eth_bought || (ev.returnValues.eth_sold) / 10000000000000)).toFixed(2)}</td>
                  <td>{parseFloat((ev.returnValues.tokens_sold || ev.returnValues.tokens_bought) / 10000000000000).toFixed(2)}</td>
                </TableRow>
              ))
            }
          </tbody>
        </table>
      </Card>
    </React.Fragment>
  );
};

export default Orders;
