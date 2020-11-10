import React from "react";
import Dropdown from "./drop";
import "./Options.css";

function Options() {


  return (
    <div className="this">
      <nav className="options">
        <ul className="nav-menu">
          <li>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Options;
