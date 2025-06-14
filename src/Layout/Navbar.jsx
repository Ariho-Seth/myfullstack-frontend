import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Full Stack Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to="/adduser" className="btn btn-outline-primary text-light">Add User</Link>

  </div>
</nav>
  )
}
