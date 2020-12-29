import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footerbackground">
      <a name="ContactSection" />
      <div className="row">
        <div className="col-4 colmn-3">
          <p className="p-text">img logo</p>
        </div>
        <div className="col-4 colmn-3">
          <hr className="hr-light" />
          <h3 className="h3-color">CONTACT US</h3>
          <hr className="hr-light" />
          <div className="row">
            <div className="col-2"> <p className="p-text">img</p></div>
            <div className="col colmn-3">
              <p className="p-text">
                Center for Open and Distance Learning
                University of Jaffna
                Jaffna, Sri Lanka
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2"><p className="p-text">img</p></div>
            <div className="col-4 colmn-3"><p className="p-text">+94212223612</p> </div>
          </div> 
          <div className="row">
            <div className="col-2"><p className="p-text">img</p></div>
            <div className="col-4 colmn-3"><p className="p-text"> codl@univ.jfn.ac.lk</p></div>
          </div>
        </div>
        <div className="col-4 colm-3">
          <hr className="hr-light" />
          <h3 className="h3-color">QUICK LINKS</h3>
          <hr className="hr-light" />
          <div>
            <div className="row">
              <div className="col colm-4">
                <Link to="/" className="h3-color">Home</Link><br />
                <a href="#AboutUsSection" className="h3-color">AboutUs</a><br />
                <a href="#" className="h3-color">Degree</a><br />
              </div>
              <div className="col colm-4">
                <a href="#" className="h3-color">Apply Online</a><br />
                <a href="#" className="h3-color">Registration</a><br />
                <a href="#" className="h3-color">LogIn</a><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center p-3 text-light" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2017.
        <a className="text-light" href="#">Center for Open and Distance Learning(CODL),
          University of Jaffna, Sri Lanka. All Rights Reserved.</a>
      </div>
      {/* Copyright */}
    </footer>
    </div>
  )
  }
}

export default Footer
