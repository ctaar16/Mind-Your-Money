import React from 'react';
import './Checking.css';
import { NavLink } from 'react-router-dom';

function Checking(props) {
    return (
        <div className="checking-layout">
                <div className="checking-title-bar">
                    <div className="checking-title">My Checking</div>
                    <NavLink className="link" to="/EditAccount">
                        <img className="checking-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                    </NavLink>
                </div>
            <div className="checking-list">
                <div className="checking-item">000-0000-00000000 Checking</div>
            </div>
        </div>
    );
}

export default Checking;