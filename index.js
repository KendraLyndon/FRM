import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Login from './modules/Login'
import Dashboard from './modules/Dashboard'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/:userName/dashboard" component={Dashboard}/>
  </Router>
), document.getElementById('app'))
