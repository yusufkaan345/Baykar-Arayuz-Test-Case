import React from 'react'
import '../../css/LandingPageCss/Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Collers</a>
      
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link btn " href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn " href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn " href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn " href="#">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn " href="#">Log In</a>
          </li>
          <li className="nav-item">
            <a className=" nav-link btn btn-active" href="#">Sign up now</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar