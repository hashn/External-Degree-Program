import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
            <nav className=" nav_bg navbar navbar-expand-lg navbar-light  stiky-top">
              <Link to="/" className="navbar-brand"> <img src="assets/imagas/logo3.png" alt='ImageLogo' /></Link>
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
                    <Link to='/' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Degree
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to='/degree' className="dropdown-item" >Bachelor of Arts (BA)</Link>
                      <div className="dropdown-divider" />
                      <Link to='/' className="dropdown-item" >Bachelor of Fine Arts (BFA)</Link>
                      <div className="dropdown-divider" />
                      <Link to='/'className="dropdown-item" >Bachelor of Commerce (B.Com)</Link>
                      <div className="dropdown-divider" />
                      <Link to='/'className="dropdown-item" >Bachelor of Business Management(BBM)</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to='/' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Registration
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to='/UserRejistration' className="dropdown-item" >User Registration</Link>
                       <Link to='/lectureReg' className="dropdown-item" >Lecturer Registration</Link>
                       <Link to='#' className="dropdown-item" >Staff Registration</Link>
                       <Link to='#' className="dropdown-item" >Admin Registration</Link>
                   </div>  
                    
                  </li>
                  <li className="nav-item">
                    <Link to="/Contactus" className="nav-link">ContactUs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Login" className="nav-link" >Login</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )
    }
}

export default Header
