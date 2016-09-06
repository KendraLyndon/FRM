import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import Login from './modules/Login'
import Dashboard from './modules/Dashboard'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Router>
), document.getElementById('app'))
