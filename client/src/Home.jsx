import React from "react";
import Card from './components/Card';
import Loading from './components/Loading';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Card title="Welcome to VaporTrader">
          <h4>What is VaporTrader?</h4>
          <p>VaporTrader is a ....</p>
          <h4>How does it work?</h4>
          <p>You can mint...</p>
          <h4>Another header</h4>
          <p>A little bit more text...</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
