import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../../../assets/Logo.png";

const Layout = (props) => {
  let params = useParams();
  return(
    <div id="outer-container" className="layout">
    <Hamburger
      className="Hamburger"
      pageWrapId={"page-wrap"}
      outerContainerId={"App"}
      userId={`${params.userId}`}
      />
    <Nav />
    <Link className="logo" to={`/User/${params.userId}/Homepage`}>
      <img src={Logo} alt="Mind Yo' Money!" />
    </Link>
    <div className="layout-children">{props.children}</div>
    </div>
  );
}

export default Layout;
