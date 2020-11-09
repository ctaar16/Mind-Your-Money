import React, { useState } from "react";
import "./Savings.css";
import { useParams, NavLink, Route } from "react-router-dom";
import EditSavings from "../../screens/EditAccount/EditSavings";
import EditIcon from "../../assets/Edit-Icon.png";

function Savings(props) {
  const [getID, setID] = useState("default");
  let params = useParams();
  return (
    <div className="savings-layout">
      <div className="savings-title-bar">
        <div className="savings-title">My Savings</div>
        <NavLink className="link" to={getID === "default" ? `/User/${params.userId}/MyAccount` : `/User/${params.userId}/EditSavings/${getID}/edit`}>
          <img className="savings-button" src={EditIcon} alt="Edit" />
        </NavLink>
        <Route
          path={`/User/${params.userId}/EditSavings/${getID}/edit`}
          exact
          component={EditSavings}
        />
      </div>
      <select
        name="savingsList"
        className="savings-list"
        defaultValue="default"
        onChange={(event) => setID(event.target.value)}
      >
        <option value="default">Select Account</option>
        {props.accounts.map((account) => (
          <option
            key={account._id}
            className="savings-item"
            value={account._id}
          >
            {account.accountNumber}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Savings;
