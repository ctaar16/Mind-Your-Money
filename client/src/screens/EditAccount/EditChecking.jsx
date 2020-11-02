import React, { useState, useEffect } from "react";
import "./EditAccount.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getAccount, updateAccount } from "../../services/accounts";

const EditChecking = (props) => {
  
    // const [accountType, setAccountType] = useState("");
    // const [accountNumber, setAccountNumber] = useState("");
    // const [routingNumber, setRoutingNumber] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [address2, setAddress2] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [zip, setZip] = useState("");
    const [account, setAccount] = useState({
      accountType: 'checking',
      accountNumber: 'Placeholder',
      routingNumber: 'Placeholder',
      creditCardExp: 'N/A',
      creditCardccv: 'N/A',
      firstName: 'Placeholder',
      lastName: 'Placeholder',
      address: 'Placeholder',
      address2: 'Placeholder',
      city: 'Placeholder',
      state: 'Placeholder',
      zip: 'Placeholder'
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()
  
    useEffect(() => {
      const fetchAccout = async () => {
          const account = await getAccount(id)
          setAccount(account)
      }
      fetchAccout()
  }, [id])

  
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setAccount({
            ...account,
            [name]: value
    })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  let { id } = props.match.params
  const updated = await updateAccount(id, account)
  setUpdated(true)
}

if (isUpdated) {
  return <Redirect to="/MyAccount" />
}

  return (
    <div>
      <Layout />
      <div className="mimi">
      <h1 className="title">Edit Checking</h1>
        <form className="pepperoni" onSubmit={handleSubmit}>
      
        <input
        className="first"
        type="text"
        name="accountNumber"
        value={account.accountNumber}
        onChange={handleChange}
        placeholder="Account Number"
      />

        <input
        className="first"
        type="text"
        name="routingNumber"
        value={account.routingNumber}
        onChange={handleChange}
        placeholder="Routing Number"
      />

        <input
        className="first"
        type="text"
        name="firstName"
        value={account.firstName}
        onChange={handleChange}
          placeholder={account.firstName}
      />

      <input
        className="first"
        type="text"
        name="lastName"
        value={account.lastName}
        onChange={handleChange}
          placeholder={account.lastName}
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
          <button type="submit" className="save">Save Changes</button>
          <button type="submit" className="delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default EditChecking;
