import React from "react";
import "./Nav.css";
import { useParams, Link } from "react-router-dom";
import Goals from "../../../assets/icons/Nav-Icons/Goals.png";
import Organize from "../../../assets/icons/Nav-Icons/Organize.png";
import Calendar from "../../../assets/icons/Nav-Icons/Calendar.png";
import Vision from "../../../assets/icons/Nav-Icons/Vision.png";
import Explore from "../../../assets/icons/Nav-Icons/Explore.png";

const Nav = () => {
  let params = useParams();
  return (
    <div className="nav-container">
      <div className="nav-icons">
        <Link to={`/User/${params.userId}/Goals`}>
          <img src={Goals} alt="Goals" />
        </Link>
        <p>Goals</p>
      </div>
      <div className="nav-icons">
        <Link to={`/User/${params.userId}/Organize`}>
          <img src={Organize} alt="Organize" />
        </Link>
        <p>Organize</p>
      </div>
      <div className="nav-icons">
        <Link to={`/User/${params.userId}/Calendar`}>
          <img src={Calendar} alt="Calendar" />
        </Link>
        <p>Calendar</p>
      </div>
      <div className="nav-icons">
        <Link to={`/User/${params.userId}/Vision`}>
          <img src={Vision} alt="Vision" />
        </Link>
        <p>Vision</p>
      </div>
      <div className="nav-icons">
        <Link to={`/User/${params.userId}/Explore`}>
          <img src={Explore} alt="Explore" />
        </Link>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Nav;
