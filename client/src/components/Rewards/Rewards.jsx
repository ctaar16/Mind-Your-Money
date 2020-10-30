import React from 'react';

function Rewards(props) {
    return (
        <div>
            <div>My Rewards</div>
            <form className="rewards-dropdown">
                <label htmlFor="rewards">Rewards:</label>
                <select className="rewards">
                    <option value="1-5" >&nbsp; 1-5% Cash Back &nbsp;</option>
                    <option value="5-10">&nbsp; 5-10% Cash Back &nbsp;</option>
                </select>
            </form>
        </div>
    );
}

export default Rewards;