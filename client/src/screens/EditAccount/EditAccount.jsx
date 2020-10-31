import React, { useState, useEffect } from "react";
import "./EditAccount.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getAccount, updateAccount } from "../../services/accounts";

const EditAccount = () => {
  //   const [account setAccount] = useState({
  //     accountType: '',
  //     accountNumber: '',
  //     routingNumber: '',
  //     creditCardExp: '',
  //     creditCardccv: '',
  //     firstName: '',
  //     lastName: '',
  //     address: '',
  //     address2: '',
  //     city: '',
  //     state: '',
  //     zip: ''
  //   })

  // const [isUpdated, setUpdated] = useState(false)
  // let { id } = useParams ()

  // useEffect (() => {
  //   const fetchAccount = async () => {
  //     const account = await getAccount(id)
  //     setAccount(account)
  //   }
  //   fetchAccount()
  // }, [id])

  // const handleChange = (event) => {
  //   const {name, value} = event.target
  //   setAccount({
  //     ...account,
  //     [name]:value
  //   })
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   let { id } = propls.match.useParams
  //   const updated = await updatedAccount (id, account)
  //   setUpdated(updated)
  // }
  // if (isUpdated) {
  //   return <Redirect to ={`/accounts/${props.match.params.id}`} />
  // }

  return (
    <div>
      <Layout />
      <div className="bottom">
        <div className="title">
          <h1>Edit Account</h1>
        </div>

        <div>
          <input
            className="first"
            type="text"
            name="accountnumber"
            placeholder="Account Number"
          />
        </div>
        <input
          className="first"
          type="text"
          name="routingnumber"
          placeholder="Routing Number"
        />
        <div></div>

        <div>
          <input
            className="exp"
            type="text"
            name="expirationnumber"
            placeholder="EXP 01/25"
          />
          <input
            className="ccv"
            type="text"
            name="accountccv"
            placeholder="CCV"
          />
        </div>

        <div>
          <form>
            <input
              className="first"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            <input
              className="first"
              type="text"
              name="lasttname"
              placeholder="Last Name"
            />
            <input
              className="first"
              type="text"
              name="Address"
              placeholder="Address"
            />
            <input
              className="first"
              type="text"
              name="Address2"
              placeholder="Address2"
            />
            <input
              className="first"
              type="text"
              name="city"
              placeholder="City"
            />
            <input
              className="first"
              type="text"
              name="state"
              placeholder="State"
            />
            <input
              className="first"
              type="text"
              name="zip"
              placeholder="Zip Code"
            />
          </form>
          <button className="save">Save Changes</button>
          <button className="delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
