import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'


const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const [sidebarToggled, setSidebarToggled] = useState(false)

  const toggleSideBar = () => {
    setSidebarToggled(!sidebarToggled)
  }

  return (
    <Route
      {...rest}
      render={props => (user.token ? (
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Component />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      ))
      }
    />
  )
}

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
}

export default connect(state => ({
  user: state.user,
}))(PrivateRoute)
