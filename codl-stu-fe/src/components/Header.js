import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light stiky-top">
                    <Link to="/" className="navbar-brand"><img src="assets/imagas/logo3.png" width="300" alt="Logo" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item active">
                        <Link to="/Home" className="nav-link active"> Student <span className="sr-only">(current)</span></Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link to="/studentdetails" className="nav-link">Student Registration</Link>
                  </li> */}
                  
                  {/* <li className="nav-item">
                    <Link to="/registration" className="nav-link">Registration</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li> */}
                  {/* <li className="nav-item ">
                        <Link to="/gpa" className="nav-link">  GPA </Link>
                  </li> */}
                  <li className="nav-item ">
                        <Link to="/semesterRegistration" className="nav-link">  Semester Registratio </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )
    }
}

export default Header
