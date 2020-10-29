import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Mind Yo' Money!</NavLink>
                <div className="links">
                    <NavLink className="link" to="/accounts">Accounts</NavLink>
                    <NavLink className="link" to="/add-account">Add Account</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav