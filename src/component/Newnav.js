import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, Outlet } from 'react-router-dom';
export default function Newnav() {
  return (
    <div className='section'>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/"><b><i>Home</i></b></Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/contact"><b><i>Contact</i></b></Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/aboutme"><b><i>About</i></b></Link>
        </li>
        </ul>

    </div>
    </div>
    
    </nav>
    
    <Outlet/>
    </div>
  )
}