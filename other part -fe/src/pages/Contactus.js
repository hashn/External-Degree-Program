import React, { Component } from 'react'
import Imageslider from '../components/Imageslider.js'

class Contactus extends Component {
    render() {
        return (
            <div>
               
                <Imageslider/>
                <div className="row">
                    <div className="col">
                    <div className="row">
                        {/*- cotactUs-section-card1*/}
                        <div className=" container-fluid padding">
                        <div className="row padding">
                            <div className="col-md">
                            <div className=" cantact-card card">
                                <div className="card-body row text-center">
                                <h4 className="card-title">CONTACT INFORMATION</h4>
                                <p className="card-text">
                                    <b>University of Jaffna</b><br />
                                    Post Box 57, Ramanathan Road
                                    Thirunelvely, Jaffna,
                                    Sri Lanka.
                                    (+94) 021 221 8101
                                    (+94) 021 222 2294
                                    info@univ.jfn.ac.lk
                                </p>
                                <p className="card-text">
                                    <b> Centre for Open and Distance Learning</b><br />
                                    University of Jaffna
                                    Jaffna, Sri Lanka
                                    (+94)  021 222 3612
                                    codl@univ.jfn.ac.lk
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-8">
                    <div className="container-fluid padding">
                        <div className="row padding">
                        <div className="col-md">
                            <div className="card">
                            <p className="card-text">
                                <iframe title="Map"className="map-contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87965.8257360699!2d79.9956993533283!3d9.702451963277172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5412e9696c55%3A0xbe9ec4b5fe068191!2sCentre%20for%20Open%20and%20Distance%20Learning%2C%20University%20of%20Jaffna!5e0!3m2!1sen!2slk!4v1609082804474!5m2!1sen!2slk" />
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  
                
            </div>
        )
    }
}

export default Contactus
