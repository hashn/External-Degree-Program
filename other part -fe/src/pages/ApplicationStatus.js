import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CandidateExamApplicationArts from './CandidateExamApplicationArts';
function ApplicationStatus() {
 
    const [applicationList,setApplicationDetails]=useState([]);
    useEffect(()=>{
            axios.get("http://localhost:3001/openApplicationDetailsCandidate").then((response)=>
                {
                    setApplicationDetails(response.data);
                    console.log(response.data);
                });
       
    },[])
    
    
    return (
        <div>
            <h1>Candidate Exam Application</h1>
            {applicationList.map((val,key)=>{
                                
                        var date=new Date(val.ClosingDate);
                        var date2 = new Date();
                        var month1 = date.getMonth()+1;
                        var year1 = date.getFullYear();
                        var day1= date.getDate();
                        var month2 = date2.getMonth()+1;
                        var year2 = date2.getFullYear();
                        var day2 = date2.getDate();


                                if(year2>year1)
                                {
                                    return(
                                        <div key={val.ID}>
                                            <br/><h1>Application is Closed</h1>
                                            
                                        </div>
                                    )
                                }
                                else if(year2==year1)
                                {
                                    if(month2>month1)
                                    {
                                    
                                        return(
                                            <div key={val.ID}>
                                                <br/><h1>Application is Closed</h1>
                                                
                                            </div>
                                        )
                                    }
                                    else if(month2==month1){
                                        if(day2>day1)
                                        {
                                            return(
                                                <div key={val.ID}>
                                                    <br/><h1>Application is Closed</h1>
                                                    
                                                </div>
                                            )
                                        }
                                        else
                                        {
                                            return(
                                                <div className="container mt-4" key={val.ID}>
                                                    <CandidateExamApplicationArts/>
                                                </div>
                                            );
                                        }
                                    }
                                    else
                                    {
                                        return(
                                            <div className="container mt-4" key={val.ID}>
                                                <CandidateExamApplicationArts/>
                                            </div>
                                        );
                                    }
                                    
                                    
                                    
                                    
                                }

                                else{
                                    return(
                                        <div className="container mt-4" key={val.ID}>
                                            <CandidateExamApplicationArts/>
                                        </div>
                                    );
                                }
                                            })}
                                                                    
                                        </div>
                                    )
                                }

export default ApplicationStatus
