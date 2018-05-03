import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import LoginRegisterContainer from './login.register.container'
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/login_register' component={LoginRegisterContainer} />
    </Switch>
  </Router>
)

export default App;
