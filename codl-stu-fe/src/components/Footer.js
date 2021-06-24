import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class Footer extends Component {
	render() {
		return (
			<div>
			<footer className="footerbackground">
			<div className="row">
				<div className="col-4 colmn-3">
				<img src="assets/imagas/unilogo.png" width="200" alt="University logo" />
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
								<Link to="/Home" className="h3-color">Profile</Link><br />
								{/* <a href="#AboutUsSection" className="h3-color">AboutUs</a><br />
								<a href="#" className="h3-color">Degree</a><br /> */}
							</div>
							<div className="col colm-4">
								<Link to="/login" className="h3-color">Login</Link><br />								
								<Link to="/logout" className="h3-color">Logout</Link><br />
								<Link to="/registration" className="h3-color"> Registration </Link><br />
								{/* <Link to="/semesterRegistration" className="h3-color"> Semester Registration </Link><br /> */}
								
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Copyright */}
			<div className="text-center p-3 text-light" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
				© 2017. Center for Open and Distance Learning(CODL), University of Jaffna, Sri Lanka. All Rights Reserved.
			</div>
			{/* Copyright */}
		</footer>
		</div>
	)
	}
}

export default Footer