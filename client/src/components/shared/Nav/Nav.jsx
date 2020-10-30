import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
      <nav>
        <div className="nav">
        <NavLink className="logo" to="/">Mind Yo' Money!</NavLink>
                
            </div>
        </nav>
    )

}

export default Nav