import React from 'react'
import axios from 'axios';
import {useState} from "react";
import {useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
function ExamSelectedCandidate() {
const {id}= useParams();

  
 const [examSelectedCandidateDetails,setExamSelectedCandidateDetails]=useState([]);
 

 useEffect(() => {

       axios.get(`http://localhost:3001/examSelectedCandidateDetails/${id}`).then((response)=>
        {
            setExamSelectedCandidateDetails(response.data);
           
            
        });
 });
 
const deleteExamSelectedCandidate =(id)=>{

    axios.delete(`http://localhost:3001/delete_exam_selected_candidate/${id}`);
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
      }}>Exam Selected Candidate Details-{id}</h1>

      <div style={{
          marginBottom:"20px",
          marginLeft:"800px"
      }}>
              <br/><Link to={"/AddCadidateExamMarks/"+id}><button type="button"
                style={{
                    borderRadius:"25px",
                    color:"#ffff",
                    backgroundColor:"#006400",
                    width:"250px",
                    height:"30px"
                
                
            }} >Add Exam Marks</button></Link>
            
          </div>
            <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Exam Marks</th>
                            <th scope="col">More Details</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>

                                {examSelectedCandidateDetails.map((val,key)=>{
                                return(
                                            
                                                <tr>
                                                <th scope="row">{val.ID}</th>
                                                <td>{val.Candidate_Exam_Marks}</td>
                                                
                                                <td><Link to={"/ExamSelectedCandidateDetails/"+val.ID}><button type="button"
                                                    style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#008B8B",
                                                        width:"150px"
                                                        
                                                        
                                                    }} >MORE DETAILS</button></Link></td>
                                                    <td><Link to={"/UpdateExamSelectedCandidate/"+val.ID}><button type="button"
                                                    style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#FFA500",
                                                        width:"100px"
                                                        
                                                    }}  >Edit Marks</button></Link></td>
                                               
                                                <td><button onClick={()=>deleteExamSelectedCandidate(val.ID)} type="button"
                                                    style={{
                                                        borderRadius:"25px",
                                                        color:"#ffff",
                                                        backgroundColor:"#8B0000",
                                                        width:"100px"
                                                        
                                                    }}   >Delete</button></td>
                                                </tr>
                       
                   
                                                
                                                )
                        
              
                                   })}
                        </tbody>
                       </table>

          
          <div style={{
              marginBottom:"30px",
              marginTop:"30px"

          }

                }>
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

export default ExamSelectedCandidate
