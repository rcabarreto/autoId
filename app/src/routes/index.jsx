import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

// private route HOC
import PrivateRoute from '../components/PrivateRoute'

import Dashboard from '../components/Dashboard'

import Homepage from '../components/Homepage'
import Signin from '../components/Signin'
import Login from '../components/Login'

const NoMatch = ({ location }) => (
  <div className="container-fluid">
    <div className="text-center">
      <div className="error mx-auto" data-text="404">404</div>
      <p className="lead text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
      <Link to="/dashboard">&larr; Back to Dashboard</Link>
    </div>
  </div>
)

const routes = (
  <React.Fragment>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />

      <PrivateRoute path="/dashboard" component={Dashboard} />

      <Route exact path="/" component={Homepage} />
      <Route component={NoMatch} />
    </Switch>
  </React.Fragment>
)

export default routes
