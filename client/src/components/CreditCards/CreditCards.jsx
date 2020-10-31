import React from 'react';
import './CreditCards.css'

function CreditCards(props) {
    return (
        <div className="card-layout">
            <div className="card-title-bar">
                <div className="card-title">My Crdit Cards</div>
                <button className="card-button">Edit</button>
            </div>
            <div className="card-list">
                <div className="card-item">000-0000-00000000 Crdit Cards</div>
            </div>
        </div>
    );
}

export default CreditCards;