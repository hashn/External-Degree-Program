import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import {useEffect} from "react";
import { Link } from 'react-router-dom';

function A_courselist3 () {

    // view first year foundation
    const [Fcourselist,setCourseListF]=useState([]);
   useEffect(()=>{
    axios.get("http://localhost:3001/viewCourses3/found").then((response)=>
   {
        setCourseListF(response.data);
   });
    })

// view first year supplementary
    const [Scourselist,setCourseListS]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/viewCourses3/sup").then((response)=>{
            setCourseListS(response.data);
        });
    })

// view first year core
    const [Ccourselist,setCourseListC]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/viewCourses3/core").then((response)=>{
            setCourseListC(response.data);
        });
    })


    return(
        <div className="courseslist">
            <h4>Bachelor of Arts (BA) Students
                <br/>Level - 03
            </h4>

            <h6>Foundation Course Units</h6>
            {Fcourselist.map((val,key)=>{
                return(
                    <ul key={val.ID}>
                        <li><Link to={"/students/BA/firstyear/addmarks/"+val.ID}>{val.ID}  :   {val.Name}</Link></li>
                    </ul>
                );
            })}

            <h6>Core Course Units</h6>
            {Ccourselist.map((val,key)=>{
                return(
                    <ul key={val.ID}>
                        <li><Link to={"/students/BA/firstyear/addmarks/"+val.ID}>{val.ID}  :   {val.Name}</Link></li>
                    </ul>
                );
            })}

            <h6>Supplimentary Course Units</h6>
            {Scourselist.map((val,key)=>{
                return(
                    <ul key={val.ID}>
                        <li><Link to={"/students/BA/firstyear/addmarks/"+val.ID}>{val.ID}  :   {val.Name}</Link></li>
                    </ul>
                );
            })}

            <Link to="/students/BA"><button type="button" className="btn btn-secondary">CANCEL</button></Link>

        </div>    
    )
}
export default A_courselist3
