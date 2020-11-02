import React from 'react';
import './Checking.css'

function Checking(props) {
    return (
        <div className="checking-layout">
                <div className="checking-title-bar">
                    <div className="checking-title">My Checking</div>
                    <button className="checking-button">Edit</button>
                </div>
            <div className="checking-list">
                <div className="checking-item">000-0000-00000000 Checking</div>
            </div>
        </div>
    );
}

export default Checking;