import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee CRUD</Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Add Employee</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar