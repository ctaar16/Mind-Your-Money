import React from 'react';
import './Rewards.css'

function Rewards(props) {
    return (
        <div className="rewards-layout">
            <div className="rewards-title">My Rewards</div>
            <form className="rewards-dropdown">
                <select className="rewards-options">
                    <option value="1-5" >&nbsp; 1-5% Cash Back &nbsp;</option>
                    <option value="5-10">&nbsp; 5-10% Cash Back &nbsp;</option>
                </select>
            </form>
        </div>
    );
}

export default Rewards;