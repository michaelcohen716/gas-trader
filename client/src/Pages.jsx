import React from "react";
import Home from "./Home";
import Charts from "./Charts";
import Orders from "./Orders";
import About from "./About";
import { Switch, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/about" component={About} />}
    </Switch>
  );
};

export default Pages;
