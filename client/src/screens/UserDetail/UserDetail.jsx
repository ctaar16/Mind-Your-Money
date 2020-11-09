import React, { useState, useEffect } from "react";
import "./UserDetail.css";
import { useParams, Redirect } from "react-router-dom";
import { getUser, updateUser, deleteUser } from "../../services/users";
import { getAccounts, deleteAccount } from "../../services/accounts";
import Layout from "../../components/shared/Layout/Layout";
import Logo from "../../assets/Logo-Full.png"

function AddUserDetail(props) {
  const [userAccounts, setUserAccounts] = useState();
  const [isUpdated, setUpdated] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    imgURL: "https://www.unsplash.com/92hd.png",
  });

  let params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const grabUser = await getUser(params.userId);
      const accounts = await getAccounts(params.userId);
      setUser(grabUser)
      setUserAccounts(accounts)
    };
    fetchUser();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(params.userId, user);
    setUpdated(true);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteUser(params.userId);
    userAccounts.map(async (account) => {
      await deleteAccount(account._id);
    })
    setDeleted(true);
  };

  if (isUpdated) {
    return <Redirect to={`/User/${params.userId}/Homepage`} />;
  }

  if (isDeleted) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Layout />
      <div className="mimi">
      <img src ={Logo} className="title" alt="logo"/>
        <form className="pepperoni">
        <input
            className="first"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          />
          
          <input
            className="first"
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <input
            className="first"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            className="first"
            type="text"
            name="imgURL"
            value={user.imgURL}
            onChange={handleChange}
            placeholder="Image Link"
          />

        </form>
        <div>
          <button className="save" onClick={handleSubmit}>
            Update Changes
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserDetail;