import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <div className="nav-container">
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Goals.png'} />
          </Link>
          <p>Goals</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Organize.png'} />
          </Link>
          <p>Organize</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Calendar.png'} />
          </Link>
          <p>Calendar</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Vision.png'} />
          </Link>
          <p>Vision</p>
        </div>
        <div className="nav-icons">
          <Link>
          <img src={process.env.PUBLIC_URL + 'assets/icons/Nav-Icons/Explore.png'} />
          </Link>
          <p>Explore</p>
        </div>
      </div>
    )

}

export default Nav