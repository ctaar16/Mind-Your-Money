import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/users";
import Layout from "../../components/shared/Layout/Layout";

function AddUser(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    imgURL: "https://www.unsplash.com/92hd.png",
  });

  const [isUpdated, setUpdated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(user);
    setUpdated(true);
  };

  if (isUpdated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sixpack">
      <div className="dragon">
        <div className="dummy">
        <h1 className="title">Sign Up with Mind Your Money</h1>
        </div>
        <form className="pepperoni">
          <input
            className="third"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            className="third"
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <input
            className="third"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            className="third"
            type="text"
            name="imgURL"
            value={user.imgURL}
            onChange={handleChange}
            placeholder="ImgURL"
          />
        </form>
        <div>
          <button className="herb" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;