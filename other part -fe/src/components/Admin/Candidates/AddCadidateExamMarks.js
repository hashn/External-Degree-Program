
import React, { useState } from 'react'
import axios from 'axios';
import {useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
function AddCadidateExamMarks() {

    const [candidateList,setExamSelectedCandidateDetails] = useState([]);
    const {id}=useParams();
    const [marks,setMarks]=useState();

    useEffect(() => {

        axios.get(`http://localhost:3001/examSelectedCandidateDetails/${id}`).then((response)=>
         {
             setExamSelectedCandidateDetails(response.data);
            
         });
  });
  
  const AddExamMarks= (Id)=>{
    
    axios.put(`http://localhost:3001/updateExamSelectedcandidate/${Id}`,{
        cloumn:"Candidate_Exam_Marks",
        editData:marks 
    }).then(()=>{
        alert(Id+','+marks)
    })
    
  }
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
                            <th scope="col">Exam Marks</th>
                            <th scope="col">Add Marks</th>
                            </tr>
                        </thead>
                        <tbody>
            {candidateList.map((val,key)=>{
                key=val.ID
                return (
                           
                            <tr>
                             <th scope="row">{val.ID}</th>
                            <td>{val.FullName}</td>
                            <td>{val.ExamID}</td>
                            <td>{val.Candidate_Exam_Marks}</td>
                            <td> <input type="number" onChange={(e)=>{setMarks(e.target.value)}}></input><button onClick={()=>{AddExamMarks(val.ID)}}type="button" ><img 
                            src="https://findicons.com/files/icons/986/aeon/128/add.png"
                            alt='add'
                            style={{
                                width:"25px",
                                height:"25px",
                                
                            }}></img></button>
                        
                        </td>
                            </tr>
                           
                       
                        );
                 })}
                        </tbody>
                        </table>

            </div>
            <Link to='/ExamSelectedCandidate'><button type="button" className="btn btn-info">CANCEL</button></Link>

        </div>
    )
}

export default AddCadidateExamMarks
