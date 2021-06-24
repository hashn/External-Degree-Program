import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footerbackground">
      <div className="row">
        {/* <div className="col-4 colmn-3">
          <p className="p-text">img logo</p>
        </div> */}
        <div className="col-md-6 footerLinks">
          <hr className="hr-light" />
          <h3 className="h3-color">CONTACT US</h3>
          <hr className="hr-light" />
          <div className="row">
            <div className="col-2"> <p className="p-text fas fa-map-marker-alt"></p></div>
            <div className="col colmn-3">
              <p className="p-text">
                Center for Open and Distance Learning
                University of Jaffna
                Jaffna, Sri Lanka
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2"><p className="p-text fa fa-phone"></p></div>
            <div className="col-4 colmn-3"><p className="p-text">+94212223612</p> </div>
          </div> 
          <div className="row">
            <div className="col-2"><p className="p-text fa fa-envelope"></p></div>
            <div className="col-4 colmn-3"><p className="p-text"> codl@univ.jfn.ac.lk</p></div>
          </div>
        </div>
        <div className="col-md-6 footerLinks">
          <hr className="hr-light" />
          <h3 className="h3-color">QUICK LINKS</h3>
          <hr className="hr-light" />
          <div>
            <div className="row">
              <div className="col colm-4">
                <Link to="/" className="h3-color">Home</Link><br />
                <Link to='/' className="h3-color">AboutUs</Link><br />
                <Link to='/Degree' className="h3-color">Degree</Link><br />
              </div>
              <div className="col colm-4">
                <Link to='/Degree' className="h3-color">Apply Online</Link><br />
                <Link to='/UserRegistration' className="h3-color">Registration</Link><br />
                <Link to="/Login" className="h3-color">LogIn</Link><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center p-3 text-light" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2021.
        <Link to='/'className="text-light">Center for Open and Distance Learning(CODL),
          University of Jaffna, Sri Lanka. All Rights Reserved.</Link>
      </div>
      {/* Copyright */}
    </footer>
    </div>
  )
  }
}

export default Footer
