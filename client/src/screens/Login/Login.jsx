import React, { useState, useEffect } from "react";
import "./Login.css";
import { Redirect, NavLink } from "react-router-dom";
import { getUsers } from "../../services/users";
import Layout from "../../components/shared/Layout/Layout";
import Logo from "../../assets/Logo-Full.png"

function Login(props) {
  const [ allUsers, setAllUsers] = useState()
  const [ user, setUser] = useState({})
  const [ userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setAllUsers(users)
    };
    
    fetchUsers();
  }, []);

  useEffect(() => {
    passwordCheck()
  },[allUsers, user, userInput])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userInput.username != ""){
      setUser(allUsers.filter((user) => `${user.username}` === userInput.username)[0])
    }
  };

  const passwordCheck = () => {
    if(user.password === userInput.password){
      setUpdated(true);
    }
  }

  if (isUpdated) {
    return <Redirect to={`/User/${user._id}/MyAccount`} />;
  }

  return (
    <div>
      <Layout />
      <div className="mimi">
        <img src ={Logo} className="title" alt="logo" />
        <form className="pepperoni">
        <input
            className="first"
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            className="first"
            type="text"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </form>
        <div>
          <button className="save" onClick={handleSubmit}>
            Login
          </button>
          <NavLink to="/SignUp">
            <button className="save" >
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;