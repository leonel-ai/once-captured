import React from 'react'
import Link from 'next/link'


const Nav = () => (
  <nav className="navbar navbar-dark fixed-top">
    <Link prefetch-href="/"><a className="navbar-brand" href="#"></a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Facebook</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Instagram</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Book Now</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
