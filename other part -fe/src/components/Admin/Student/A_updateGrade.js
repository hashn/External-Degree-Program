import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import {useEffect} from "react";
import { Link } from 'react-router-dom';

function A_updateGrade() {

    const [CourseId,setCourseId]=useState("");
    const [RegNo,setRegNo]=useState("");
    const [Grade,setgrade]=useState("");

   const addgrade =()=>{
       axios.post("http://localhost:3001/addgrade",{
        CourseId:CourseId,
        RegNo:RegNo,
        Grade:Grade,
       }).then(()=>{alert('success')});
   }
  

  

  //view
  // useEffect(()=>{
  //   axios.get(`http://localhost:3001/EditGrade/${ID}`).then((res)=>{
  //       setMarksList(res.data);
    
  //     }).then(()=>{
  //       editMarkslist.map((val,key)=>{
  //           setRegNo(val.RegNo);
  //           setgrade(val.Grade);      
  //       })
  //     })
  // })

  //update
//   const updateGrade = (student_course) => {
//     axios.put('http://localhost:3001/updateGrade',
//     {
//             RegNo:RegNo,
//             Grade:GradeNew,
//     });
//     setNewGrade("")
// };

 
  return(
    <div className="container mt4 editpage"> 
    <form className="addBatch" id="batch">
    <h4>Bachelor of Arts (BA) Students</h4>
    <h5>Add / Update End of Course Examination Grades of Students</h5>

                        <div className="addBatchForm row">
                            <div className="col-md-4">
                                <label >Course Code   :</label>
                                <input type="text" onChange={(event)=>{setCourseId(event.target.value);}}/>
                                {/* <select onChange={(event)=>{setCourseId(event.target.value);}}>
                                  <option event="">select</option>
                                  <option event="course1">EX. ACCC 11023</option>
                                  <option event="course2">course 2</option>
                                  <option event="course3">course 3</option>
                                  <option event="course4">course 4</option>
                                </select> */}
                            </div>
                            <div className="col-md-4">
                                <label>Reg No.   :</label>
                                <input type="text" onChange={(event)=>{setRegNo(event.target.value);}}/>
                            </div>
                            <div className="col-md-4">
                                <label>Grade   :</label>
                                <input type="text" onChange={(event)=>{setgrade(event.target.value);}}/>
                            </div>
                        </div>
                        <button onClick={addgrade} type="button" className="btn btn-success">add</button>
                    </form>
        {/* {editMarkslist.map((val,key)=>{
            return(
                <div key={val.CourseId}>

                <form className="row edit-form">
                    <div className="col-md-6">
                    <label>{val.RegNo} :</label>
                    <input type="text" defaultValue={val.Grade} onChange={(event)=>{setNewGrade(event.target.value);}}></input>
                    <button onClick={()=> {updateGrade(val.RegNo)}}><i className="far fa-check-circle"></i></button><br/>
                    </div>
                    <div className="col-md-6">

                    </div>
                </form>



                </div>
            )
        })} */}
                        <Link to={"/students/BA"}><button type="button" className="btn btn-secondary">CANCEL</button></Link>

    </div>
  )
}

export default A_updateGrade
 