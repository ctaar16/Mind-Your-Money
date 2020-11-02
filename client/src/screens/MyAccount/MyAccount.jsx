import React from 'react';
import './MyAccount.css';
import Layout from '../../components/shared/Layout/Layout';
import Checking from '../../components/Checking/Checking';
import Savings from '../../components/Savings/Savings';
import CreditCards from '../../components/CreditCards/CreditCards';
import Rewards from '../../components/Rewards/Rewards';
import { NavLink } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div>
      <Layout/>
      <div className="account-layout">
          <h1 className="account-title">Account Summary</h1>
          <div className="account-lists">
              <Checking/>
              <Savings/>
              <CreditCards/>
              <Rewards/>
          </div>
            <button className="add-account-button">
          <NavLink className="add-account-link" to="/AddAccount">
              <strong className="add-account-text">Add Account<img className="button-add-icon" src={process.env.PUBLIC_URL + 'assets/Add-Icon.png'} alt="Add"/></strong>
          </NavLink>
            </button>
      </div>
    </div>
  )
}

export default MyAccount