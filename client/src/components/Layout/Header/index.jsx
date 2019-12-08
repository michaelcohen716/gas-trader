import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px 0px 10px 0px;
  text-align: right;
  li {
    display: inline;
    margin-left: 20px;
    font-weight: bold;
    a {
      color: black;
    }
    a.active {
      color: #01cdfe;
    }
  }
`;

const Header = () => (
  <div className="row d-flex align-items-center">
    <div className="col-md-6">
      <h1>
        Vapor<span>Trader</span>
      </h1>
    </div>
    <div className="col-md-6">
      <Menu>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </Menu>
    </div>
  </div>
);

export default Header;
