import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <div className="nav-container">
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Goals.png'} alt="Goals"/>
          </Link>
          <p>Goals</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Organize.png'} alt="Organize"/>
          </Link>
          <p>Organize</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Calendar.png'} alt="Calendar"/>
          </Link>
          <p>Calendar</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Vision.png'} alt="Vision"/>
          </Link>
          <p>Vision</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Explore.png'} alt="Explore" />
          </Link>
          <p>Explore</p>
        </div>
      </div>
    )

}

export default Nav