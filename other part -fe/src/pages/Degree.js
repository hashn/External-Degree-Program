import React from 'react'
import {Link} from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';

function Degree() {
    
    return (
        
            <div className='degree'>
                <div className='degree-sec1'>
                    <div>
                        <div className='degree-sec1-heading'>
                            <h2>FACULTY OF ARTS, UNIVERSITY OF JAFFNA</h2>
                            <h4>Centre For Open & Distance Learning (CODL)</h4>
                            <h3>BACHELOR OF ARTS DEGREE PROGRAM</h3>
                        </div>
                        <div className='degree-sec1-intro'>
                            <h2>Introduction</h2>
                            <p>In accordance with the re-structuring of existing External Degree Program
                                 as per the Commission Circular no 932, Faculty of Arts, University of Jaffna,
                                  proposing a new structure, incorporating the provisions of the credit valued
                                   system.
                                    The new regulations shall be effective for the new entrants of the 
                                    forthcoming academic year 2011/2012 onwards.
                            </p>
                        </div>
                    </div>
                    <img src="assets/imagas/degree.jpg" alt="degree_image" className="card-image-center" />
                </div>

                <div className='degree-sec2'>
                    <div className='degree-sec2-text'>
                        <h2>Admission Criteria</h2>
                        <p>Minimum qualification for entry is as follows:</p>
                        <ol>
                            <li><p> at least three passes in all three approved subjects in one sitting and</p></li>
                            <li><p> a minimum mark of 30% for the Common General Paper.</p></li>
                        </ol>
                        <ul>
                            <li><p> Eligibility of students for consideration for the next stage of selection should be determined on the basis of rank order on average Z – Scores obtained by candidates at the GCE A/L Examination.</p></li>
                            <li><p> UGC will decide minimum Z- Score required to become eligible for consideration for various courses of study after finalizing the number of students that can be accommodated to the course of study.</p></li>
                            <li><p> Any other qualification for the admission of few percentages of students for the B.A degree programme shall be considered by the Senate.</p></li>
                        </ul>
                        <p>Some of the other requirements/qualifications are given below</p>
                        <ol>
                            <li><p> Diploma holders of the National College of Education</p></li>
                            <li><p> Teachers from government Schools who were trained in the Training Colleges</p></li>
                            <li><p> Any other relevant and equal qualifications determine by the Senate</p></li>
                        </ol>
                    </div>                                      
                </div>

                <div className='degree-sec3'>
                     <h2>Structure of study program</h2>
                     <div className="container-fluid padding">
                        <div className="row padding">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-heading"><h4>Degrees</h4></div>
                                    <div className="degree-card-text">
                                        <p><i class="fa fa-angle-double-right" aria-hidden="true"></i>B.A general degree program
                                        <br />(03 years duration)
                                        <br />SLQF level - 05</p>
                                    </div>
                                    <div className="degree-card-text">
                                        <p><i class="fa fa-angle-double-right" aria-hidden="true"></i>B.A special degree program
                                        <br />(04 years duration)
                                        <br />SLQF level - 06</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-heading"><h4>Subjects</h4></div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/CC">Christian Civilization</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/EC">Economics</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/EN">English Literature</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/GY">Geography</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/HC">Hindu Civilization</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/HP">Hindu Philosophy</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/HY">History</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/LG">Linguistics</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/PH">Philosophy</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/PS">Political Science</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/PY">Psychology</Link></p></div>
                                            </div>
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/SN">Sanskrit</Link></p></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div className="subject-box"><p><Link to="/TA">Tamil</Link></p></div>
                                            </div>
                                            <div class="col">
                                                
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-heading"><h4>Courses</h4></div>
                                    <div className="course-box"><p><Link to="/Foundation">Foundation Course Units</Link></p></div>
                                    <div className="course-box"><p><Link to="/core">Core Course Units</Link></p></div>
                                    <div className="course-box"><p><Link to="/Supplementary">Supplementary Course Units</Link></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10"><div className="apply-btn"><Link to='/ApplicationStatus'><button className="apply-btn">APPLY ONLINE</button></Link></div></div>
                        <div className="col-md-2"><div><Link to="http://www.codl.jfn.ac.lk/wp-content/uploads/2019/08/Download-File-4.pdf">DOWNLOAD STUDENTS' GUIDE BOOK</Link></div></div>
                        
                    </div>                                  
                </div>
            </div>
    )
}

export default Degree
