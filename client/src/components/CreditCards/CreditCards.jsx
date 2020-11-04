import React, {useState} from 'react';
import './CreditCards.css';
import { NavLink,Route } from 'react-router-dom';
import EditCreditCards from '../../screens/EditAccount/EditCreditCards';
import EditIcon from "../../assets/Edit-Icon.png"

function CreditCards(props) {
    const [getID, setID] = useState("")
    return (
        <div className="card-layout">
            <div className="card-title-bar">
                <div className="card-title">My Credit Cards</div>
                <NavLink className="link" to={`/EditCreditCards/${getID}/edit`}>
                    <img className="card-button" src={EditIcon} alt="Edit"/>
                </NavLink>
                <Route path={`/EditCreditCards/${getID}/edit`} exact component={EditCreditCards} />
            </div>
            <select name="cardList" className="card-list" defaultValue="default" onChange={(event) => setID(event.target.value)}>
                {console.log(getID)}
                <option value="default">Select Account</option>
                {props.accounts.map((account) => 
                    <option key={account._id} className="card-item" value={account._id}>{account.accountNumber}</option>
                )}
            </select>
        </div>
    );
}

export default CreditCards;