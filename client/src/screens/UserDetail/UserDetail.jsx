import React, { useState } from "react";
import "./UserDetail.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/accounts";
import Layout from "../../components/shared/Layout/Layout";
import Logo from "../../assets/Logo-Full.png"

function AddUserDetail(props) {
//   const [User, setUser] = useState({
//     email: "email",
//     password: "",
//   });

//   const [isUpdated, setUpdated] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await createUser(user);

//     setUpdated(true);
//   };

//   if (isUpdated) {
//     return <Redirect to="/UserDetail" />;
//   }

  return (
    <div>
      <Layout />
      <div className="mimi">
      <img src ={Logo} className="title" />
        <form className="pepperoni">
        <input
            className="first"
            type="text"
            name="email"
            placeholder="Username"
          />
          
          <input
            className="first"
            type="text"
            name="email"
            placeholder="Email"
          />

          <input
            className="first"
            type="text"
            name="password"
            placeholder="Password"
          />
          <input
            className="first"
            type="text"
            name="email"
            placeholder="Image Link"
          />

        </form>
        <div>
          <button className="save" >
            Update Changes
          </button>
          <button className="delete" >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserDetail;