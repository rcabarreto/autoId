import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Homepage = () => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">


    <main role="main" className="inner cover">
      <h1 className="cover-heading">Sequence Generator</h1>
      <p className="lead">This is a sequence service for development purposes.</p>
      <p>We allow you to create sequences and increment them with a simple API call. This is great if you need a sequenced number but your app does not provide that.</p>
      <p className="lead" style={{ padding: '10%' }}>
        <Link to="/signin" className="btn btn-lg btn-secondary">Create an account</Link>
        <small style={{ margin: '0 20px' }}>OR</small>
        <Link to="/login" className="btn btn-lg btn-secondary">Login</Link>
      </p>
    </main>

    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>Created by Rodrigo Barreto.</p>
      </div>
    </footer>
  </div>
)

export default Homepage
