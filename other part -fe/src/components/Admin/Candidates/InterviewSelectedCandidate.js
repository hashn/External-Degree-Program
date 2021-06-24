import React from 'react'
import axios from 'axios';
import {useState} from "react";
import {useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
function InterviewSelectedCandidate() {

  
 const [interviewSelectedCandidateDetails,setInterviewSelectedCandidateDetails]=useState([]);
 const {id}=useParams();



 useEffect(() => {

       axios.get(`http://localhost:3001/interviewselectedcandidatesDetails/${id}`).then((response)=>
        {
            setInterviewSelectedCandidateDetails(response.data);
           
            
        });
 });
 
 const deleteInterviewSelectedCandidate =(id)=>{

    axios.delete(`http://localhost:3001/delete_interview_selected_candidate/${id}`);
        alert("deleted");
}

    return (
        <div className="container mt-4">
                    <div>
                        <Link to={"/AcadamicYearCandidate"}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                        alt='back'
                        style={{
                            width:"40px",
                            height:"40px",
                            
                        }}></img></button></Link>
                </div>
      <h1 style={{
          marginLeft:"150px"
      }}>Interview Selected Candidate Details</h1>
    {interviewSelectedCandidateDetails.map((val,key)=>{
 return(
      <div>                                     
      <div style={{ marginBottom:"20px",marginLeft:"800px"}}>
              <br/><Link to={"/AddinterviewMarks/"+id}><button type="button"
                style={{
                    borderRadius:"25px",
                    color:"#ffff",
                    backgroundColor:"#006400",
                    width:"250px",
                    height:"30px" }} >Add Interview Marks</button></Link>
        </div>  
            <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope ="col">Interview Marks</th>
                            <th scope ="col">Delete</th>
                            <th scope="col">Edit</th>
                            <th scope="col">More Details</th>
                            </tr>
                        </thead>
                        <tbody>

                                 
                                                <tr>
                                                <th scope="row">{val.ID}</th>
                                                <td>{val.InterviewMarks}</td>
                                                <td><button type="button" style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#8B0000",
                                                        width:"100px"
                                                        
                                                    }}  onClick={()=>{deleteInterviewSelectedCandidate(val.ID)}}>DELETE</button></td>
                                                <td><Link to={`/UpdateInterviewSelectedCandidate/+${val.ID}`}><button type="button" style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#FFA500",
                                                        width:"100px"
                                                        
                                                    }}>EDIT</button></Link></td>
                                                <td> <Link to={"/InterViewSelectedCandidateDetails/"+val.ID}><button type="button" style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#008B8B",
                                                        width:"150px"
                                                        
                                                        
                                                    }}>More Details</button></Link></td>
                                                
                                                </tr>
                            </tbody></table>
                            </div>
                        )
                    })}

                <div style={{ marginBottom:"30px",marginTop:"30px"}}>
                <Link to={"/AcadamicYearCandidate"}><button type="button" ><img 
                src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                alt='back'
                style={{
                    width:"40px",
                    height:"40px"
                }}></img></button></Link>
               </div>
        </div>
    );
}

export default InterviewSelectedCandidate




            

            
      
      
            
         