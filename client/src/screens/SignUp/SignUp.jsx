import React, { useState } from "react";
import "./SignUp.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/accounts";
import Layout from "../../components/shared/Layout/Layout";

function AddUser(props) {
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
//     return <Redirect to="/SignUp" />;
//   }

  return (
    <div>
      <Layout />
      <div className="mimi">
        <h1 className="title">Sign Up with Mind Your Money</h1>
        <form className="pepperoni">
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
        </form>
        <div>
          <button className="save" >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;