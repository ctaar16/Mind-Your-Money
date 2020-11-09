import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import Layout from "../../components/shared/Layout/Layout";
import Checking from "../../components/Checking/Checking";
import Savings from "../../components/Savings/Savings";
import CreditCards from "../../components/CreditCards/CreditCards";
import Rewards from "../../components/Rewards/Rewards";
import { useParams, NavLink } from "react-router-dom";
import { getAccounts } from "../../services/accounts";
import AddIcon from "../../assets/Add-Icon.png";


const MyAccount = () => {
  const [getChecking, setChecking] = useState([]);
  const [getSavings, setSavings] = useState([]);
  const [getCreditCards, setCreditCards] = useState([]);
  let params = useParams();
  
  useEffect(() => {
    const fetchAccounts = async () => {
      
      const accounts = await getAccounts(params.userId);
      setChecking(
        accounts.filter((account) => account.accountType === "Checking")
      );
      setSavings(
        accounts.filter((account) => account.accountType === "Savings")
      );
      setCreditCards(
        accounts.filter((account) => account.accountType === "CreditCard")
      );
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <Layout />
      <div className="account-layout">
        <h1 className="account-title">Account Summary</h1>
        <div className="account-lists">
          <Checking accounts={getChecking} />
          <Savings accounts={getSavings} />
          <CreditCards accounts={getCreditCards} />
          <Rewards />
        </div>
        <button className="add-account-button">
          <NavLink className="add-account-link" to={`/User/${params.userId}/AddAccount`}>
            <strong className="add-account-text">
              Add Account
              <img className="button-add-icon" src={AddIcon} alt="Add" />
            </strong>
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
