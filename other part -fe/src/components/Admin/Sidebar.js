import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
           
        
            <div className="sidebar-container">     
                <div class="nav-side-menu">
                <div class="brand">CODL</div>
                    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            
                    <div class="menu-list">
                      <ul id="menu-content" class="menu-content collapse out">
                        <li><a href="/Login/Dashboard">Dashboard</a></li>
                        <li><a href="/Admin">Admin</a></li>
                        <li><a href="/Lecturer">Lecturer</a></li>
                        <li><a href="/Staff">Staff</a></li>
                        <li><a href="/AcadamicYearCandidate">Candidate</a></li>
                        <li><a href="/Course">Course</a></li>
          
                        <li data-toggle="collapse" data-target="#student" class="collapsed">
                            <a href="#">Student<span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="student">
                            <li data-toggle="collapse" data-target="#ba" class="collapsed active">
                                <a href="/students/BA">Bachelor of Arts (BA)</a>
                            </li>
                            {/* <ul class="sub-menu collapse" id="ba">
                                <li><a href="#">First Year</a></li>
                                <li><a href="#">Second Year</a></li>
                                <li><a href="#">Third Year</a></li>
                                <li><a href="#">Fourth Year</a></li>
                            </ul> */}

                            <li data-toggle="collapse" data-target="#bfa" class="collapsed active">
                                <a href="#">Bachelor of Fine Arts (BFA)<span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="bfa">
                                <li><a href="#">First Year</a></li>
                                <li><a href="#">Second Year</a></li>
                                <li><a href="#">Third Year</a></li>
                                <li><a href="#">Fourth Year</a></li>
                            </ul>
                            
                            <li data-toggle="collapse" data-target="#com" class="collapsed active">
                                <a href="#">Bachelor of Commerce (B.Com)<span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="com">
                                <li><a href="#">First Year</a></li>
                                <li><a href="#">Second Year</a></li>
                                <li><a href="#">Third Year</a></li>
                                <li><a href="#">Fourth Year</a></li>
                            </ul>

                            <li data-toggle="collapse" data-target="#man" class="collapsed active">
                                <a href="#">Bachelor of Business Management(BBM)<span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="man">
                                <li><a href="#">First Year</a></li>
                                <li><a href="#">Second Year</a></li>
                                <li><a href="#">Third Year</a></li>
                                <li><a href="#">Fourth Year</a></li>
                            </ul>
                        </ul>
          
                        {/* <li data-toggle="collapse" data-target="#candidate" class="collapsed">
                            <a href="#">Candidate<span class="arrow"></span></a>
                        </li>  
                        <ul class="sub-menu collapse" id="candidate">
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/AllCandidates">All Candidates</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/ExamSelectedCandidate">Exam Selected Candidates</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/InterviewSelectedCandidate">Interview Selected Candidate</a>
                            </li>
                        </ul> */}
          
          
                        {/* <li data-toggle="collapse" data-target="#course" class="collapsed">
                            <a href="#">Course<span class="arrow"></span></a>
                        </li>  
                        <ul class="sub-menu collapse" id="course">
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Bachelor of Arts (BA)</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Bachelor of Fine Arts (BFA)</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Bachelor of Commerce (B.Com)</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Bachelor of Business Management(BBM)</a>
                            </li>
                        </ul> */}

                        <li data-toggle="collapse" data-target="#timetable" class="collapsed">
                            <a href="#">Timetable<span class="arrow"></span></a>
                        </li>  
                        <ul class="sub-menu collapse" id="timetable">
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/AddTimetable">Lecture timetable</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Candidate Exam timetable</a>
                            </li>
                            <li data-toggle="collapse" class="collapsed active">
                                <a href="/">Student Exam timetable</a>
                            </li>
                        </ul>
                    </ul>
               </div>
          </div>
        </div>  
        )
    }
}

export default Sidebar
