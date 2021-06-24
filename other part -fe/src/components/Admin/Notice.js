import React from 'react'
import {useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
function Notice() {

    const [adminNotice,setNoticeList]=useState([]);
    const getNotice = () => {
        axios.get("http://localhost:3001/notice").then((response)=>
        {
            setNoticeList(response.data);
        });
    }
    const deleteNoticeItem=(id)=>{
        axios.delete(`http://localhost:3001/delete_notice/${id}`).then((response)=>{
            setNoticeList(adminNotice.filter((val)=>{
                return val.id!==id;
            }));
        })
    }
    return (
        <div className="container d-flex align-items-start flex-column">
          <h1 style={{
              textAlign:"center"
          }}>Notice</h1>
           {getNotice()}
            {
                
                adminNotice.map((val,key)=>{
                    
                   if(val.ID!=null)
                   {
                    if(val.Type==="Candidate Exam Application") 
                    {
                        return(
                           <div  className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/AcadamicYearCandidate'><button type="button" class="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                    else if(val.Type==="User Registration:Admin")
                    {
                        return (
                            <div className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/Admin'><button type="button" class="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                    else if(val.Type==="User Registration:Admin")
                    {
                        return (
                            <div className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/Admin'><button type="button" class="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                    else if(val.Type==="User Registration:Lecturer")
                    {
                        return (
                            <div className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/Lecturer'><button type="button" class="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                    else if(val.Type==="User Registration:Staff")
                    {
                        return (
                            <div className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/Staff'><button type="button" class="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                    else if(val.Type==="User Registration:Student")
                    {
                        return (
                            <div className="p-2" key={val.ID}>
                                <li key={val.ID}>
                             <Link to='/AdminStudent'><button type="button" className="btn btn-dark" onClick={()=>deleteNoticeItem(val.ID)}>{val.Type}</button></Link>
                            </li>
                            </div>
                        )
                    }
                   }
                    
                })
            }
        </div>
    )

}
export default Notice
