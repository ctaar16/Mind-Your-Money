import React from 'react';
import './Savings.css';
import { NavLink, Route } from 'react-router-dom';
import EditSavings from '../../screens/EditAccount/EditSavings';

function Savings(props) {
    return (
        <div className="savings-layout">
            <div className="savings-title-bar">
                <div className="savings-title">My Savings</div>
                <NavLink className="link" to="/EditSavings">
                    <img className="savings-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                </NavLink>
                <Route path='/EditSavings' exact component={EditSavings} />
            </div>
            <div className="savings-list">
                <div className="savings-item">000-0000-00000000 Savings</div>
            </div>
        </div>
    );
}

export default Savings;