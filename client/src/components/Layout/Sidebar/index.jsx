import React from "react";
import CurrentPrice from "../../CurrentPrice";
import Account from "../../Account";

const Sidebar = () => (
  <div className="col-md-4">
    <CurrentPrice />
    <Account />
  </div>
);

export default Sidebar;
