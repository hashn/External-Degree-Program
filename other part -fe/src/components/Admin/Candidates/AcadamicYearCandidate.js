import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function AcadamicYearCandidate() {
    const [acadamic_year_List,setAcadamicYearList]=useState([]);

    
    useEffect(() => {

        axios.get("http://localhost:3001/acadamicYearDeatails").then((response)=>
         {
            setAcadamicYearList(response.data);
            
             
         })
  },[]);

  

  
    return (
        <div>
          <div className='row'>
              <div className=" col card border-info mb-3">
              <div>
              <div>
                        <h1 className="card-header">All Candidate</h1>
                        <div className="card-body text-info card-text">
                {acadamic_year_List.map((val,key)=>{
                    if(val.User_Type=="Candidate Exam Application")
                    {
                        return(
                    
                        <div key={val.ID}>
                            <Link to={'/AllCandidates/'+val.Year}><button type="button" className="btn btn-secondary btn-sm btn-block">{val.Year}</button></Link><br/>
                      
                        </div>
                        )
                    }
                })}
                 </div>
                    </div>
             </div>
              </div>
              <div className=" col card border-info mb-3">
              <div>
              <div>
                        <h1 className="card-header">Exam Selected  Candidate</h1>
                        <div className="card-body text-info card-text">
                {acadamic_year_List.map((val,key)=>{
                    if(val.User_Type=="Candidate Exam Application")
                    {
                        return(
                    
                        <div key={val.ID}>
                        <Link to={'/ExamSelectedCandidate/'+val.Year}><button type="button" className="btn btn-secondary btn-sm btn-block">{val.Year}</button></Link><br/>
                       
                        </div>
                         
                        )
                    }
                })}
                 </div>
                    </div>
             </div>
              </div>
              <div className=" col card border-info mb-3">
              <div>
              <div>
                        <h1 className="card-header">Interview Selected Candidatates</h1>
                        <div className="card-body text-info card-text">
                {acadamic_year_List.map((val,key)=>{
                    if(val.User_Type=="Candidate Exam Application")
                    {
                        return(
                            <div key={val.ID}>
                             <Link to={'/InterviewSelectedCandidate/'+val.Year}><button type="button" className="btn btn-secondary btn-sm btn-block">{val.Year}</button></Link><br/>
                                
                            </div>
                       
                        )
                    }
                })}
                 </div>
                    </div>
             </div>
              </div>
          </div>
            
        </div>
    )
}

export default AcadamicYearCandidate
