import React, { useState } from "react";
import "./creditcard.css";
import { useParams, Redirect } from "react-router-dom";
import { createAccount } from "../../services/accounts";
import Layout from "../shared/Layout/Layout";

function AddAccount(props) {
  let params = useParams();
  const [account, setAccount] = useState({
    accountType: "CreditCard",
    userId: `${params.userId}`,
    accountNumber: "",
    routingNumber: "N/A",
    creditCardExp: "",
    creditCardccv: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [isUpdated, setUpdated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createAccount(account);

    setUpdated(true);
  };

  if (isUpdated) {
    return <Redirect to={`/User/${params.userId}/MyAccount`} />;
  }

  return (
    <div>
      <Layout />
      <div className="mimi">
        <h1 className="title">New Credit Card</h1>
        <form className="pepperoni">
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
          <button className="wax" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
