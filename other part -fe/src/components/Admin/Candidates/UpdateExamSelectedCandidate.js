import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
function UpdateExamSelectedCandidate() {
  const {id}=useParams();

  const[examSelectedCandidate,setExamSelectedCandidate]=useState([]);
  const[marks,setExamMarks]=useState(0);

  useEffect(()=>{
    
      axios.get(`http://localhost:3001/examSelectedCandidateDetalsId/${id}`).then((response)=>
   {
    setExamSelectedCandidate(response.data);
   });

  })


  
   
  
 
 
  return(
    <div className="container mt-4 text-center"> 
    <h1>Update Exam Selected Candidate</h1>
        <div className="row">
          <div className="col">
          {examSelectedCandidate.map((val,key)=>{
                return(
                    <div>
                          <div style={{
                      marginBottom:"20px",
                      marginRight:"500px"
                    }}>
                          <Link to={"/ExamSelectedCandidate/"+val.AccadamicYear}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                         alt='back'
                         style={{
                            width:"40px",
                            height:"40px"
                        }}></img></button></Link>
                          </div>
        
                                    <h5>Candidate ID : {val.ID}</h5> 
                                    <h5>Exam marks: {val.Candidate_Exam_Marks} </h5><br/>
                                  
                                    <Link to={`/UpdateAllCandidate/+${val.ID}`}><button type="button" style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#008B8B",
                                                        width:"300px"
                                                        
                                                    }}>EDIT MORE DETAILS</button></Link>

                    </div>
                )

            })}

         
      
          </div>
          <div className="col">
          <div className="container mt-4 align-self-center form-group text-center">
          <labet>Exam Marks</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setExamMarks(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{
            axios.put(`http://localhost:3001/updateExamSelectedcandidate/${id}`,{editData:marks,cloumn:'Candidate_Exam_Marks'})
            }} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
        </div>

         
          </div>
        </div>
           <br/><br/>

      </div>
  )
}

export default UpdateExamSelectedCandidate
 