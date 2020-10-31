import React from 'react'
import './MyAccount.css'
import Layout from '../../components/shared/Layout/Layout'
import Checking from '../../components/Checking/Checking'
import Savings from '../../components/Savings/Savings'
import CreditCards from '../../components/CreditCards/CreditCards'
import Rewards from '../../components/Rewards/Rewards'

const MyAccount = () => {
  return (
    <div className="account-layout">
        <Layout/>
        <h2 className="account-title">Account Summary</h2>
        <div className="account-lists">
            <Checking/>
            <Savings/>
            <CreditCards/>
            <Rewards/>
        </div>
        <button className="add-account-button">Add Account</button>
    </div>
  )
}

export default MyAccount