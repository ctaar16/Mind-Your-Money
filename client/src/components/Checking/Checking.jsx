import React, { useState } from 'react';
import './Checking.css';
import { NavLink, Route, useParams } from 'react-router-dom';
import EditChecking from '../../screens/EditAccount/EditChecking';
import EditIcon from "../../assets/Edit-Icon.png"

function Checking(props) {
    const [getID, setID] = useState("")
    const { id } = useParams()
    return (
        <div className="checking-layout">
            <div className="checking-title-bar">
                <div className="checking-title">My Checking</div>
                <NavLink className="link" to={`/EditChecking/${getID}/edit`}>
                    <img className="checking-button" src={EditIcon} alt="Edit"/>
                </NavLink>
                <Route path={`/EditChecking/${getID}/edit`} exact component={EditChecking} />
            </div>
            <select name="checkingList" className="checking-list" defaultValue="default" onChange={(event) => setID(event.target.value)}>
                {console.log(getID)}
                <option value="default">Select Account</option>
                {props.accounts.map((account) => 
                    <option key={account._id} className="checking-item" value={account._id}>{account.accountNumber}</option>
                )}
            </select>
        </div>
    );
}

export default Checking;