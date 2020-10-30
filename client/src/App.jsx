import React from 'react'
import './App.css'
import Homepage from './screens/Homepage/Homepage'
import EditAccount from './screens/EditAccount/EditAccount'
import AddAccount from './screens/AddAccount/AddAccount'
import MyAccount from './screens/MyAccount/MyAccount'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/EditAccount" component={EditAccount} />
        <Route exact path="/AddAccount" component={AddAccount} />
        <Route exact path="/MyAccount" component={MyAccount} />
      </Switch>
    </div>
  )
}

export default App
