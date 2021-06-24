import React , { useEffect }from 'react'
import Sidebar from '../Sidebar'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



function A_StudentDetail() {
    const [studentList,setStudentList]=useState([]);
    const {year}=useParams();
    //View All Details//
    useEffect(()=>{
    axios.get(`http://localhost:3001/studentDetails/${year}`).then((response)=>
   {
       setStudentList(response.data);
   });
    })

    
    const deleteStudent = (sId) =>{
        axios.delete(`http://localhost:3001/deleteStudent/${sId}`).then((response)=>{
            setStudentList(studentList.filter((val)=>{
                return val.sId!==sId;
            }));
        })
     }

     const upgradeStudent =(sId)=>{
        axios.post(`http://localhost:3001/upgradeStudent/${sId}`,{
             
        }).then(()=>{alert(sId+'upgraded by one level')});
    }

    const completeStudent =(sId)=>{
        axios.post(`http://localhost:3001/completeStudent/${sId}`,{
             
        }).then(()=>{alert(sId+'update status as completed')});
    }

        return (
            <div className="row wrapper">
                <div className="detail-sidebar col-md-4">
                    <Sidebar/>
                </div>
                <div className="detail-table col-md-8">
                    
                    <div className="detail-table-heading">
                        <h4>Bachelor of Arts (BA) Students</h4>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Academic Year</th>
                            <th scope="col">Current Level</th>
                            <th scope="col">Reg. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact No.</th>
                            <th scope="col">Current GPA</th>
                            <th scope="col">More details</th>
                            <th scope="col">Edit details</th>
                            <th scope="col">Delete student</th>
                            <th scope="col">Upgrade student</th>
                            <th scope="col">Degree Completion</th>
                        </tr>
                        
                        </thead>
                        <tbody>
                        {studentList.map((val,key)=>{
                            return(
                                <tr key={val.sId}>
                                    <td scope="row" className="special">{val.acdyear}</td>
                                    <td className="special">{val.level}</td>
                                    <td>{val.RegNo}</td>
                                    <td>{val.Name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobile}</td>
                                    <td>{val.gpa}</td>
                                    <td><Link to={"/students/BA/nameList/MoreDetails/"+val.RegNo}><button type="button" className="btn btn-info" >MORE</button></Link></td>
                                    <td><Link to={"/EditStudent/"+val.sId}><button type="button" className="btn btn-warning">EDIT</button></Link></td>
                                    <td><button onClick={()=> {deleteStudent(val.sId)}} type="button" className="btn btn-danger">Delete</button></td>
                                    <td><button onClick={()=> {upgradeStudent(val.sId)}} type="button" className="btn btn-primary">Upgrade</button></td>
                                    <td><button onClick={()=> {completeStudent(val.sId)}} type="button" className="btn btn-success">Completed</button></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <Link to="/students/BA"><button type="button" className="btn btn-secondary">CANCEL</button></Link>

                </div>
            </div>
        )
    }

export default A_StudentDetail
