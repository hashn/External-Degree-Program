import React, { useEffect } from 'react'
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function OpenAndCloseApplicationForm() {

    const [openApplicationList,setOpenApplicationList]=useState([]);
    const [setCloseDate,setClosedate]=useState('00.00.0000');
    
    

    useEffect(()=>{
        axios.get('http://localhost:3001/viewOpenApplications').then((response)=>
        {
            setOpenApplicationList(response.data);
            
        });
    },[]);
    
    
     
    return (
        <div className="container mt-4">
           
           <div className="font-weight-bold" style={{
               marginLeft:"300px",
           }}>
           <h1>Application Details</h1>
           </div>
             <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" >Acadamic Year</th>
                    <th scope="col">Department</th>
                    <th scope="col">Application Name</th>
                    <th scope="col">Opening date</th>
                    <th scope="col">Closing date</th>
                </tr>
                </thead>
                <tbody>
                {openApplicationList.map((val,key)=>{
                    var copdate = new Date(val.ClosingDate);
                    var monthc=copdate.getMonth()+1;
                    var dayc=copdate.getDate();
                    var yearc=copdate.getFullYear()
                    var opdatec=dayc+'/'+monthc+'/'+yearc;

                    var opdate = new Date(val.OpeningDate);
                    var month1=opdate.getMonth()+1;
                    var day1=opdate.getDate();
                    var year1=opdate.getFullYear()
                    var opdate2=day1+'/'+month1+'/'+year1;
                    
                    
                        return (
                            <tr key={val.ID}>
                            <th scope="row">{val.ID}</th>
                            <td>{val.AcadamicYear}</td>
                            <td>{val.Department}</td>
                            <td>{val.ApplicationName}</td>
                            <td>{opdate2}</td>
                            <td>{opdatec}</td>
                            </tr>
                        )
                    
                 })}
                </tbody>
            </table>

            <div style={{
               marginLeft:"300px"
           }}>
           
           </div>
           <div className="d-flex justify-content-between" style={{
               margin:"50px"
           }}>
          <div>
          <Link to='/Login/Dashboard'><button type="button" 
          style={
              {
                backgroundColor:"#0C2787",
                color:"#ffff",
                borderRadius:"25px",
                height:"40px",
                width:"250px",
                fontSize:"18px"
              }
          } className="btn btn-sm">BACK</button></Link>
       
          </div>
           <div>
            <Link to='/OpenApplicationForm'><button type="button" style={{
                backgroundColor:"#00130F",
                color:"#ffff",
                borderRadius:"25px",
                height:"40px",
                width:"250px",
                fontSize:"18px"
            }} className="btn btn-sm">OPEN APPLICATION</button></Link>
      
            </div>
           </div>
            </div>
    )
}

export default OpenAndCloseApplicationForm
