import React from 'react'
import './App.css'
import Homepage from './screens/Homepage/Homepage'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
       </Switch>
    </div>
  )
}

export default App
