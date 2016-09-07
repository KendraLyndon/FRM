import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import Login from './modules/Login'
import Template from './modules/Template'
import Dashboard from './modules/Dashboard'
import ShowConnection from './modules/connections/Show'
import EditConnection from './modules/connections/Edit'
import Eventful from './modules/Eventful'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/:userName" component={Template}>
      <Route path="/:userName/dashboard" component={Dashboard}/>
      <Route path="/:userName/connection/:id" component={ShowConnection}/>
      <Route path="/:userName/connection/:id/edit" component={EditConnection}/>
      <Route path="/:userName/eventful" component={Eventful}/>
    </Route>
  </Router>
), document.getElementById('app'))
