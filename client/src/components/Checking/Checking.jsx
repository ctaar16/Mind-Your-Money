import React from 'react';
import './Checking.css';
import { NavLink, Route, useParams } from 'react-router-dom';
import EditChecking from '../../screens/EditAccount/EditChecking';

function Checking(props) {
    const { id } = useParams()
    return (
        <div className="checking-layout">
                <div className="checking-title-bar">
                    <div className="checking-title">My Checking</div>
                    <NavLink className="link" to={`/EditChecking/${props.id}/edit`}>
                        <img className="checking-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                    </NavLink>
                    <Route path={`/EditChecking/${props.id}/edit`} exact component={EditChecking} />
                </div>
            <div className="checking-list">
                <div className="checking-item">000-0000-00000000 {props.id}</div>
            </div>
        </div>
    );
}

export default Checking;