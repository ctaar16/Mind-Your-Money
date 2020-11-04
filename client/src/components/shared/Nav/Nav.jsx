import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Goals from "../../../assets/icons/Nav-Icons/Goals.png";
import Organize from "../../../assets/icons/Nav-Icons/Organize.png";
import Calendar from "../../../assets/icons/Nav-Icons/Calendar.png";
import Vision from "../../../assets/icons/Nav-Icons/Vision.png";
import Explore from "../../../assets/icons/Nav-Icons/Explore.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-icons">
        <Link>
          <img src={Goals} alt="Goals" />
        </Link>
        <p>Goals</p>
      </div>
      <div className="nav-icons">
        <Link>
          <img src={Organize} alt="Organize" />
        </Link>
        <p>Organize</p>
      </div>
      <div className="nav-icons">
        <Link>
          <img src={Calendar} alt="Calendar" />
        </Link>
        <p>Calendar</p>
      </div>
      <div className="nav-icons">
        <Link>
          <img src={Vision} alt="Vision" />
        </Link>
        <p>Vision</p>
      </div>
      <div className="nav-icons">
        <Link>
          <img src={Explore} alt="Explore" />
        </Link>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Nav;
