import React from "react";
import "./Homepage.css";
import Layout from "../../components/shared/Layout/Layout";
import FullBar from "../../assets/Full-Bar.png";
import CarBoard from "../../assets/Car-Mood-Board.png";
import TravelBoard from "../../assets/Travel-Mood-Board.png";
import Calendar from "../../assets/Big-Calendar.png";

const Homepage = () => {
  return (
    <div className ="homepage-layout">
    <Layout />
      <div className="homepage-container">
        <div className="progress-bar">
          <img className="progress-img" src={FullBar} alt="Progress" />
        </div>
        <div className="homepage">
          <div className="boards-container">
            <h1>Vision Boards</h1>
            <img className="board" src={CarBoard} alt="Car" />
            <img className="board" src={TravelBoard} alt="Travel" />
          </div>
          <div className="calendar-container">
            <h1>Calendar</h1>
            <img className="calendar" src={Calendar} alt="Calendar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
