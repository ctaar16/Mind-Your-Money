import React from 'react';
import './Savings.css'

function Savings(props) {
    return (
        <div className="savings-layout">
            <div className="savings-title-bar">
                <div className="savings-title">My Savings</div>
                <button className="savings-button">Edit</button>
            </div>
            <div className="savings-list">
                <div className="savings-item">000-0000-00000000 Savings</div>
            </div>
        </div>
    );
}

export default Savings;