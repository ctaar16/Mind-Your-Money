import React, { useState } from 'react';
import "./creditcard.css"
import { useParams, Redirect } from "react-router-dom";
import { createAccount } from "../../services/accounts";

function AddAccount(props) {
  const [account, setAccount] = useState({
    accountType: 'CreditCard',
    accountNumber: '',
    routingNumber: 'N/A',
    creditCardExp: '',
    creditCardccv: '',
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setAccount({
            ...account,
            [name]: value
    })
    console.log(account)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await createAccount(account)
    console.log(updated)
    saved()
  }

  const saved = () => {
    return <Redirect to="/MyAccount" />
  }

  return (
    <div className="mimi">
      <h1 className="title">Edit Credit Card</h1>
        <form className="pepperoni" >

          <input
            className="first"
            type="text"
            name="accountNumber"
            value={account.accountNumber}
            onChange={handleChange}
            placeholder="Card Number"
          />

          <div>
            <input
              className="exp"
              type="text"
              name="creditCardExp"
              value={account.creditCardExp}
              onChange={handleChange}
              placeholder="EXP"
            />

            <input
              className="ccv"
              type="text"
              name="creditCardccv"
              value={account.creditCardccv}
              onChange={handleChange}
              placeholder="CCV"
            />
          </div>

          <input
            className="first"
            type="text"
            name="firstName"
            value={account.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />

          <input
            className="first"
            type="text"
            name="lastName"
            value={account.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <input
            className="first"
            type="text"
            name="address"
            value={account.address}
            onChange={handleChange}
            placeholder="Address"
          />

          <input
            className="first"
            type="text"
            name="address2"
            value={account.address2}
            onChange={handleChange}
            placeholder="Address2"
          />

          <input
            className="first"
            type="text"
            name="city"
            value={account.city}
            onChange={handleChange}
            placeholder="City"
          />

          <input
            className="first"
            type="text"
            name="state"
            value={account.state}
            onChange={handleChange}
            placeholder="State"
          />

          <input
            className="first"
            type="text"
            name="zip"
            value={account.zip}
            onChange={handleChange}
            placeholder="Zip Code"
          />
        </form>
        <div>
          <button className="save" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
}

export default AddAccount;