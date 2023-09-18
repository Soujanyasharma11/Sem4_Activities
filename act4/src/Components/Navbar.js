import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-1" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link mx-1" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <Link className="btn btn-primary mx-1" to="/login">Login</Link>
    <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar