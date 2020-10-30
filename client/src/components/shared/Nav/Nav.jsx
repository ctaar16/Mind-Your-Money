import React from 'react'
import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {

    return (
      <nav>
        <div className="nav">
          <NavLink className="logo" to="/">Mind Yo' Money!</NavLink>
          <Link>
          <img src={process.env.PUBLIC_URL + '/Goals.png'} />
          </Link>
         </div>
       </nav>
    )

}

export default Nav