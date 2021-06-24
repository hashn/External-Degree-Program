import React , { useEffect }from 'react'
import Sidebar from '../Sidebar'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function A_EachStudMoreDetails() {
    const [studentMoreList,setStudentMoreList]=useState([]);
    const [studentGradeList,setstudentGradeList]=useState([]);

    const {RegNo}=useParams();
    //View personal Details//
    useEffect(()=>{
    axios.get(`http://localhost:3001/studentMoreDetails/${RegNo}`).then((response)=>
   {
    setStudentMoreList(response.data);
   });
    })

    //view academic details//
    useEffect(()=>{
        axios.get(`http://localhost:3001/AcdemicDetails/${RegNo}`).then((response)=>
       {
        setstudentGradeList(response.data);
       });
        })



        return (
            <div className="row wrapper">
                <div className="batch-sidebar col-md-4">
                    <Sidebar/>
                </div>
                {/* {studentMoreList.map((val,key)=>{
                        return( */}
                <div className="moredetail col-md-8">
                {studentMoreList.map((val,key)=>{
                        return(
                            <div className="moredetail-head row"> 
                                <h4 className="col-md-6">{val.RegNo}</h4>
                                <img className="col-md-6" src="#"></img>
                            </div>
                        );
                })}
                    <hr/>
                    {studentMoreList.map((val,key)=>{
                        return(
                    <div className="moredetail-head row">
                        <h5 className="col-md-6">Academic Year   :   {val.acdyear}</h5>
                        <h5 className="col-md-6">Current Level   :   {val.level}</h5>
                    </div>
                        );
                    })}

                    <div className="detail-heading"><h4 data-toggle="collapse" data-target="#personal" class="collapsed">
                        <a className="detail-topic">Personal Details</a>
                    </h4></div>
                    {studentMoreList.map((val,key)=>{
                        return(
                    <div className="details-body collapse" id="personal">
                        <p>Full Name    : {val.Name}</p>
                        <p>Address    : {val.address}</p>
                        <p>E-mail    : {val.email}</p>
                        <p>Contact No.    : {val.mobile}</p>
                        <p>NIC No.    : {val.nic}</p>
                        <p>Sex    : {val.sex}</p>
                        <hr/>
                        <h5>Advanced Level Examination Details</h5>
                        <p>Year    : {val.yearAl}</p>
                        <p>Stream    : {val.streamAl}</p>
                        <table>
                            <tr>
                                <th>Subject</th>
                                <th>Grade</th>
                            </tr>
                            <tr>
                                <td>{val.ALsubject1}</td>
                                <td>{val.ALsubject1Result}</td>
                            </tr>
                            <tr>
                                <td>{val.ALsubject2}</td>
                                <td>{val.ALsubject2Result}</td>
                            </tr>
                            <tr>
                                <td>{val.ALsubject3}</td>
                                <td>{val.ALsubject3Result}</td>
                            </tr>
                            <tr>
                                <td>General English</td>
                                <td>{val.ALenglishResult}</td>
                            </tr>
                            <tr>
                                <td>General  Test</td>
                                <td>{val.ALgenTestmarks}</td>
                            </tr>
                        </table>
                        <hr/>
                        <h5>Other Qqualifications</h5>
                        <p>Course/Diploma Name    : {val.qualificationName}</p>
                        <p>Institute    : {val.qualificationInstitute}</p>
                        <p>Duration    : {val.courseDuration}</p>
                        <p>Expiration    : {val.courseExpire}</p>
                        <hr/>
                        <h5>Working Experience</h5>
                        <p>Position    : {val.ProfTitile}</p>
                        <p>Name of the company    : {val.ProfOrg}</p>
                    </div>
                    );
                    })}
                    
                    <div className="detail-heading"><h4 data-toggle="collapse" data-target="#academic" class="collapsed">
                        <a className="detail-topic">Academic Details</a>
                    </h4></div>
                    <div className="details-body collapse" id="academic">
                        <table>
                            <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Grade</th>
                            </tr>
                            </thead>
                           <tbody>
                        {studentGradeList.map((val,key)=>{
                        return(
                            <tr>
                                <td>{val.CourseId}</td>
                                <td>{val.Grade}</td>
                            </tr>
                        );
                        })}  
                        </tbody>  
                            {/* <tr>
                                <td>3</td>
                                <td>{val.RegNo}</td>
                                <td>abc</td>
                                <td>{val.level}</td>
                            </tr> */}
                            
                        </table>
                    </div>

                    <div className="detail-heading"><h4 data-toggle="collapse" data-target="#gpa" class="collapsed">
                        <a className="detail-topic">GPA</a>
                    </h4></div>
                    <div className="details-body collapse" id="gpa">
                        <h6>Overall GPA   :   </h6>
                        <div className="gpa row">
                            <p className="col-md-3">First Year GPA   :   </p>
                            <p className="col-md-3">Second Year GPA   :   </p>
                            <p className="col-md-3">Third Year GPA   :   </p>
                            <p className="col-md-3">Fourth Year GPA   :   </p>
                        </div>
                        
                    </div>
                    {studentMoreList.map((val,key)=>{
                        return(
                            <Link to={"/students/BA/nameList/"+val.acdyear}><button type="button" className="btn btn-secondary">CANCEL</button></Link>
                            );
                })}

                </div>
                   {/* );
                })}                        */}
                
            </div>
            
        )
}

export default A_EachStudMoreDetails
