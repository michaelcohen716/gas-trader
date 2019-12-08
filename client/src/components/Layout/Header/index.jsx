import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Logo = styled.h1`
  margin-bottom: 0px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
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

const Header = ({ match }) => {
  const { path } = match;

  const pages = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/charts",
      title: "Charts"
    },
    {
      path: "/orders",
      title: "Orders"
    },
    {
      path: "/profile",
      title: "Profile"
    },
    {
      path: "/about",
      title: "About"
    }
  ];

  return (
    <div className="row d-flex align-items-center">
      <div className="col-md-6">
        <Link to="/">
          <Logo>
            Vapor<span>Trader</span>
          </Logo>
        </Link>
      </div>
      <div className="col-md-6">
        <Menu>
          {pages.map(page => (
            <li key={page.path}>
              <Link
                to={page.path}
                className={path === page.path ? "active" : ""}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(Header);
