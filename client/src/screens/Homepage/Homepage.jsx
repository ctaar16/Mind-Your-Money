import React from 'react'
import './Homepage.css'
import Layout from '../../components/shared/Layout/Layout'

const Homepage = () => {
  return (
    <div>
      <Layout />
      <div className="homepage-container">
        <div className="progress-bar">
          <img className="progress-img"src={process.env.PUBLIC_URL + 'assets/Full-Bar.png'} alt="Progress" />
        </div>
        <div className="homepage">
          <div className="boards-container">
          <h2>
            Vision Boards
          </h2>
            <img className="board" src={process.env.PUBLIC_URL + 'assets/Car-Mood-Board.png'} alt="Car" />
            <img className="board" src={process.env.PUBLIC_URL + 'assets/Travel-Mood-Board.png'} alt="Travel" />
          </div>
          <div className="calendar-container">
          <h2>
            Calendar
          </h2>
            <img className="calendar" src={process.env.PUBLIC_URL + 'assets/Big-Calendar.png'} alt="Calendar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage