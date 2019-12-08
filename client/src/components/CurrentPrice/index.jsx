import React from "react";
import styled from "styled-components";
import Card from "../Card";


const Price = styled.h2`
  font-size: 56px;
  margin-bottom: 0px;
  font-family: Courier, monospace;
`;

const CurrentPrice = ({ price }) => (
  <Card title="Current Price">
    <div className="row">
      <div className="col-md-12 text-center">
        <Price>{price}</Price>
      </div>
    </div>
  </Card>
);

CurrentPrice.defaultProps = {
  price: "12.13"
};

export default CurrentPrice;
