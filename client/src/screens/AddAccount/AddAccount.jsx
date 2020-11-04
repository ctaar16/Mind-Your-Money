import React from "react";
import Option from "../../components/DropDown/Options";
import Layout from "../../components/shared/Layout/Layout";
import "./AddAccount.css";

function AddAccount() {
  return (
    <div>
      <Layout />
      <div className="add-account-layout">
        <Option />
      </div>
    </div>
  );
}

export default AddAccount;
