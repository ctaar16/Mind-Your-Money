import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";
import EditChecking from "./screens/EditAccount/EditChecking";
import EditSavings from "./screens/EditAccount/EditSavings";
import EditCreditCards from "./screens/EditAccount/EditCreditCards";
import AddAccount from "./screens/AddAccount/AddAccount";
import MyAccount from "./screens/MyAccount/MyAccount";
import SignUp from "./screens/SignUp/SignUp"
import UserDetail from "./screens/UserDetail/UserDetail"
import Login from "./screens/Login/Login";
import Checkings from "../../client/src/components/DropDown/checkings";
import Savings from "../../client/src/components/DropDown/savings";
import CreditCard from "../../client/src/components/DropDown/creditcard";
import Goals from "./screens/Goals/Goals"
import Vision from "./screens/Vision/Vision"
import Calendar from "./screens/Calendar/Calendar"
import Organize from "./screens/Organize/Organize"
import Explore from "./screens/Explore/Explore"

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component = {SignUp} />
        <Route exact path="/User/:userId/Homepage" component = {Homepage} />
        <Route exact path="/User/:userId/MyAccount" component={MyAccount} />
        <Route exact path="/User/:userId/EditChecking/:id/edit" component={EditChecking} />
        <Route exact path="/User/:userId/EditSavings/:id/edit" component={EditSavings} />
        <Route exact path="/User/:userId/EditCreditCards/:id/edit" component={EditCreditCards} />
        <Route exact path="/User/:userId/AddAccount" component={AddAccount} />
        <Route exact path="/User/:userId/checkings" component={Checkings} />
        <Route exact path="/User/:userId/savings" component={Savings} />
        <Route exact path="/User/:userId/creditcard" component={CreditCard} />
        <Route exact path="/User/:userId/UserDetail" component = {UserDetail} />
        <Route exact path="/User/:userId/Goals" component={Goals} />
        <Route exact path="/User/:userId/Vision" component = {Vision} />
        <Route exact path="/User/:userId/Calendar" component = {Calendar} />
        <Route exact path="/User/:userId/Organize" component = {Organize} />
        <Route exact path="/User/:userId/Explore" component = {Explore} />
      </Switch>
    </div>
  );
};

export default App;
