import React from 'react'
import './App.css'
import Homepage from './screens/Homepage/Homepage'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      {/* <header> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      {/* </header>
      <form className="login-info">
      <input className="user-form" placeholder="Username"></input>
      <input className="pass-form" placeholder="Password"></input>
      </form>
      <button className="login-button">Log In</button>
      <button className="signup-button">Sign Up</button> */}
    </div>
  )
}

export default App
