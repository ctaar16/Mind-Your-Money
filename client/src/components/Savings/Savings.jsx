import React from 'react';
import './Savings.css';
import { Link } from 'react-router-dom';

function Savings(props) {
    return (
        <div className="savings-layout">
            <div className="savings-title-bar">
                <div className="savings-title">My Savings</div>
                <Link>
                    <img className="savings-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                </Link>
            </div>
            <div className="savings-list">
                <div className="savings-item">000-0000-00000000 Savings</div>
            </div>
        </div>
    );
}

export default Savings;