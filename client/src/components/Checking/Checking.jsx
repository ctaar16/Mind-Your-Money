import React from 'react';
import './Checking.css';
import { Route } from 'react-router-dom';
import Checkings from '../../screens/EditAccount/EditChecking';

function Checking(props) {
    return (
        <div className="checking-layout">
                <div className="checking-title-bar">
                    <div className="checking-title">My Checking</div>
                    <Route path='/checkings' exact component={Checkings} >
                        <img className="checking-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                    </Route>
                </div>
            <div className="checking-list">
                <div className="checking-item">000-0000-00000000 Checking</div>
            </div>
        </div>
    );
}

export default Checking;