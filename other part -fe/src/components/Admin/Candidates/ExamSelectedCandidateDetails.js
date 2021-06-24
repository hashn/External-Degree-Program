import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
function ExamSelectedCandidateDetails() {
  const [candidateList,setCandidateDetails]=useState([]);
  const [examSelectedCandidate,setExamSelectedCandidate]   = useState([]);
  const statusA="INTERVIEW SELECTED";
    const {id}=useParams();


    useEffect(()=>{
    axios.get(`http://localhost:3001/examSelectedCandidateDetalsId/${id}`).then((response)=>
   {
    setExamSelectedCandidate(response.data);
    
   });

   axios.get(`http://localhost:3001/CandidatesDetailsId/${id}`).then((response)=>
        {
            setCandidateDetails(response.data);
        });

 });
const deleteExamSelectedCandidate =()=>{
    axios.delete(`http://localhost:3001/delete_exam_selected_candidate/${id}`).then(()=>{
        alert("deleted");
    })
        
}

const setectCandidateForInterview =()=>{
    
    
    axios.put('http://localhost:3001/updateState',{
        status:statusA,
        id:id
    });

    examSelectedCandidate.map((val,key)=>{
        alert(val.ExamID+','+val.Email+','+val.FullName+','+val.acadamic_year+','+val.Candidate_Exam_Marks+','+val.Department);
        axios.post("http://localhost:3001/addInterviewSelectedCandidate",{
        id:id,
        ExamMarks:val.Candidate_Exam_Marks,
        Acadamic_year:val.acadamic_year,
        department:val.Department

    }).then(()=>{
        alert("selected For Interview");
    })

    
})}
    return (
        <div className="container border mt-4" style={{
            width:"800px",
            height:"1000px",
            backgroundColor:"#D6D6D6",
            marginBottom:"20px",
            textAlign:'center'
            
        }}>
            <div style={{
                            marginRight:"800px",
                            
                        }}>
                        <Link to={"/AcadamicYearCandidate"}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                         alt='back'
                         style={{
                            width:"40px",
                            height:"40px"
                        }}></img></button></Link>
                       
                        </div>
            <h1>Exam Selected Candidates</h1>
            {examSelectedCandidate.map((val,key)=>{
                return(
                    <div>
                                    <p className="border border-dark">ID:{val.ID}</p>
                                    <p className="border border-dark">Exam Marks:{val.Candidate_Exam_Marks}</p>

                    </div>
                )

            })}
            
          {candidateList.map((val,key)=>{
              return(
                       <div>
                        
                        <div key={val.ID}>
                        
                        <div >
                        <p className="border border-dark">Name In Tamil:{val.full_name_tamil}</p>
                        <p className="border border-dark">Name In English:{val.full_name_eng}</p>
                        <p className="border border-dark">NIC:{val.nic}</p>
                        <p className="border border-dark">Addres:{val.address}</p>
                        <p className="border border-dark">Email:{val.Email}</p>
                        <p className="border border-dark">Phone No:{val.phone_no}</p>
                        </div>
                        <div className="row">
                            <div className="col" style={{
                                marginTop:"25px"
                            }}>
                            <h5>INFORMATION ABOUT G.C.E(A/L)</h5>
                            <p className="border border-dark">Year:{val.year}</p>
                            <p className="border border-dark">Section:{val.section}</p>
                            <p className="border border-dark">{val.subject_1}:{val.result_1}</p>
                            
                            <p className="border border-dark">{val.subject_2}:{val.result_2}</p>
                            <p className="border border-dark">{val.subject_3}:{val.result_3}</p>
                            <p className="border border-dark">General English result:{val.english_result}</p>
                            <p className="border border-dark">Common General Test:{val.common_general_test_result}</p>
                            </div>
                            <div className="col">
                            <h5>INFORMATION ABOUT OTHER QUALIFICATION</h5>
                            <p className="border border-dark">Qalification Name:{val.other_qualification_name}</p>
                            <p className="border border-dark">Provider:{val.qualification_provider}</p>
                            <p className="border border-dark">Duration:{val.duration_of_course}</p>
                            <p className="border border-dark">Valididty:{val.validity_date}</p>
                            <h5>INFORMATION ABOUT CAREER QUALIFICATION</h5>
                            <p className="border border-dark">Position:{val.position}</p>
                            <p className="border border-dark">Company:{val.company}</p>
                            <p className="border border-dark">Status:{val.status}</p>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div className="d-flex justify-content-around" style={{
                            marginTop:"50px"
                        }}>
                        <Link   to="/AcadamicYearCandidate"><button style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#8B0000",
                            width:"175px"
                            
                        }} onClick={()=>deleteExamSelectedCandidate(val.ID)} type="button">Delete</button></Link>
                        <Link to={"/UpdateExamSelectedCandidate/"+val.ID}><button 
                        type="button"
                        style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#FFA500",
                            width:"175px"
                            
                        }}  > Edit Marks</button></Link>
                        <Link to={'/SendMail/'+val.Email}><button type="button" 
                        
                        style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#03411C",
                            width:"175px"
                            
                        }}
                        onClick={()=>{setectCandidateForInterview(val.ID)}}
                        >send email and select interview</button></Link>
                        </div>
                        <div style={{
                           
                            marginTop:"50px"
                        }}>
                        <Link to={"/ExamSelectedCandidate/"+val.AccadamicYear}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                         alt='back'
                         style={{
                            width:"40px",
                            height:"40px"
                        }}></img></button></Link>

                       
                        </div>
                  </div>

                  
                  </div>
              )
          })}
          
        </div>
    )
}

export default ExamSelectedCandidateDetails

