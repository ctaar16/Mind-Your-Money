import React, { useState } from "react";
import "./Checking.css";
import { useParams, NavLink, Route } from "react-router-dom";
import EditChecking from "../../screens/EditAccount/EditChecking";
import EditIcon from "../../assets/Edit-Icon.png";

function Checking(props) {
  const [getID, setID] = useState("default");
  let params = useParams();
  return (
    <div className="checking-layout">
      <div className="checking-title-bar">
        <div className="checking-title">My Checking</div>
        <NavLink className="link" to={getID === "default" ? `/User/${params.userId}/MyAccount` : `/User/${params.userId}/EditChecking/${getID}/edit`}>
          <img className="checking-button" src={EditIcon} alt="Edit" />
        </NavLink>
        <Route
          path={`/User/${params.userId}/EditChecking/${getID}/edit`}
          exact
          component={EditChecking}
        />
      </div>
      <select
        name="checkingList"
        className="checking-list"
        defaultValue="default"
        onChange={(event) => setID(event.target.value)}
      >
        <option value="default">Select Account</option>
        {props.accounts.map((account) => (
          <option
            key={account._id}
            className="checking-item"
            value={account._id}
          >
            {account.accountNumber}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Checking;
