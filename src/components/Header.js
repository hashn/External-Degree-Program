import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light stiky-top">
              <Link to="/" className="navbar-brand"> <img src="assets/imagas/logo3.png" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link active" >Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#AboutUsSection">AboutUs</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Degree
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/degree">Bachelor of Arts (BA)</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Bachelor of Fine Arts (BFA)</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Bachelor of Commerce (B.Com)</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Bachelor of Business Management(BBM)</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Registration
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Semister Registration</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">User Registration</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">University Registration</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contactus" className="nav-link">ContactUs</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )
    }
}

export default Header
