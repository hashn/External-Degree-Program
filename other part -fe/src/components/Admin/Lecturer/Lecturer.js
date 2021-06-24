import React , { useEffect }from 'react'
import Sidebar from '../Sidebar'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


function Lecturer() {
    const [LecturerList,setLecturerList]=useState([]);
    //View All Details//
    useEffect(()=>{
    axios.get("http://localhost:3001/lecturerDetails").then((response)=>
   {
       setLecturerList(response.data);
   });
    })

     
    
    
    return (
        <div className="row wrapper">
            <div className="detail-sidebar col-md-4">
                <Sidebar/>
            </div>
            <div className="detail-table col-md-8">
                
                <div className="detail-table-heading">
                    <h4>Bachelor of Arts (BA)</h4>
                    <h5>Academic Staff</h5>
                </div>

                    {LecturerList.map((val,key)=>{
                       return(
                        <div className="namelistLec" key={val.Fullname}>
                          <li>{val.Fullname}</li>
                            <hr/>
                                <p>Name :   {val.Fullname}</p>
                                <p>NIC :   {val.NIC}</p>
                                <p>E-mail Address :   {val.Email}</p>
                                <p>Subjejct Specifiacation :    {val.Subject1}  ,   {val.Subject2}  ,   {val.Subject3}</p><br/>
                                
                            
                        </div> 
                       
                     );
                    })}
                    
               
                </div>
                </div>  
                   
                   
                   
                    
                
        )
}

        
export default Lecturer
