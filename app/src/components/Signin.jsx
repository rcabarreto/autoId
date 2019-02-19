import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../actions'

const Signin = ({ dispatch }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSigninForm = (e) => {
    e.preventDefault()
    dispatch(userActions.signinUser(name, email, password))
  }

  return (
    <form className="form-signin" onSubmit={handleSigninForm}>

      <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      <div className="form-group">
        <label htmlFor="inputName" className="sr-only">Full Name</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} id="inputName" className="form-control" placeholder="Name" required />
      </div>


      <div className="form-group">
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required />
      </div>

      <div className="form-group">
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

      <p className="mt-3 mb-3 text-muted">
        <Link to="/login">Already have an account? Login now!</Link>
      </p>

    </form>
  )
}


export default connect()(Signin)
