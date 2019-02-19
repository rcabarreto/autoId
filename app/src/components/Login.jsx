import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../actions'

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginForm = (e) => {
    e.preventDefault()
    dispatch(userActions.loginUser(email, password))
  }

  return (
    <form className="form-signin" onSubmit={handleLoginForm}>

      <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>

      <div className="form-group">
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required />
      </div>

      <div className="form-group">
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
      </div>

      <div className="checkbox mb-3">
        <label htmlFor="rememberme">
          <input type="checkbox" value="remember-me" id="rememberme" /> Remember me
        </label>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>

      <p className="mt-3 mb-3 text-muted">
        <Link to="/signin">Create an Account!</Link>
      </p>

    </form>
  )
}


export default connect()(Login)
