import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../../../assets/Logo.png";

const Layout = (props) => (
  <div id="outer-container" className="layout">
    <Hamburger
      className="Hamburger"
      pageWrapId={"page-wrap"}
      outerContainerId={"App"}
    />
    <Nav />
    <Link className="logo" to="/">
      <img src={Logo} alt="Mind Yo' Money!" />
    </Link>
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
