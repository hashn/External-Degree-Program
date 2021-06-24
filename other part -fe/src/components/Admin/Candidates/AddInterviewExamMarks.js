
import React, { useState } from 'react'
import axios from 'axios';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
function AddInterviewExamMarks() {
    const [candidateList,setInterviewSelectedCandidateDetails] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/interviewselectedcandidatesDetails").then((response)=>
         {
            setInterviewSelectedCandidateDetails(response.data);
            
         });
  });
  
    return (
        <div>
            <h1>ADD STUDENT MARKS</h1>
            <div>    
                       <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope='col'>#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Exam ID</th>
                            <th scope="col">Interview Marks</th>
                            </tr>
                        </thead>
                        <tbody>
            {candidateList.map((val,key)=>{
                return (
                           
                            <tr>
                             <th scope="row">{val.ID}</th>
                            <td>{val.FullName}</td>
                            <td>{val.ExamMarks}</td>
                            <td>{val.ExamID}</td>
                            <td><input type="number"></input></td>
                            </tr>
                           
                       
                        );
                 })}
                        </tbody>
                        </table>

            </div>
            <Link to='/InterviewSelectedCandidate'><button type="button" class="btn btn-info">CANCEL</button></Link>

        </div>
    )
}

export default AddInterviewExamMarks
