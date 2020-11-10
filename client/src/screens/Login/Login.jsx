import React, { useState, useEffect } from "react";
import "./Login.css";
import { Redirect, NavLink } from "react-router-dom";
import { getUsers } from "../../services/users";
import Logo from "../../assets/Logo-Full.png";

function Login(props) {
  const [allUsers, setAllUsers] = useState();
  const [user, setUser] = useState({});
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setAllUsers(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const passwordCheck = () => {
      if (user.password === userInput.password) {
        setUpdated(true);
      }
    };
    passwordCheck();
  }, [allUsers, user, userInput]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.username != "") {
      setUser(
        allUsers.filter((user) => `${user.username}` === userInput.username)[0]
      );
    }
  };

  if (isUpdated) {
    return <Redirect to={`/User/${user._id}/Homepage`} />;
  }

  return (
    <div className="sixpack">
      {/* <Layout /> */}
      <div className="dragon">
        <div className="dummy">
          <img src={Logo} className="title-img" alt="logo" />
        </div>
        <form className="pepperoni">
          <input
            className="third"
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            className="third"
            type="text"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </form>
        <div>
          <button className="herb" onClick={handleSubmit}>
            Login |
          </button>
          <NavLink to="/SignUp">
            <button className="herb2">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
