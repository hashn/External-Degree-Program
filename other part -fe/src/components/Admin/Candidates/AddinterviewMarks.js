
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';

function AddinterviewMarks() {
    const [candidateList,setIWSelectedCandidateDetails] = useState([]);
    const {id}=useParams();
    const [marks,setMarks]=useState();

    useEffect(() => {

        axios.get(`http://localhost:3001/interviewselectedcandidatesDetails/${id}`).then((response)=>
         {
            setIWSelectedCandidateDetails(response.data);
            
         });
  });
  
  const AddExamMarks= (Id)=>{
    
    axios.put(`http://localhost:3001/updateIWSelectedcandidate/${Id}`,{
        cloumn:"InterviewMarks",
        editData:marks 
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
                            <th scope="col">Exam Marks</th>
                            <th scope="col">Interview Marks</th>
                            <th scope="col">Add/Edit Marks</th>
                            </tr>
                        </thead>
                        <tbody>
            {candidateList.map((val,key)=>{
                key=val.ID
                return (
                           
                            <tr>
                             <th scope="row">{val.ID}</th>
                            <td>{val.ExamMarks}</td>
                            <td>{val.InterviewMarks}</td>
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
            
        </div>
    )
}

export default AddinterviewMarks
