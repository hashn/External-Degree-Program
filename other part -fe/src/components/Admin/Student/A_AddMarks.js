// import React from 'react'
// import {useState} from "react";
// import axios from 'axios';
// import { useParams } from 'react-router';
// import {useEffect} from "react";
// import { Link } from 'react-router-dom';

// function A_AddMarks () {

//     const [studentMarksList,setstudentMarksList]=useState([]);
//     const {ID}=useParams();


//     const [regno,setregNo]=useState("");
//     const [grade,setgrade]=useState("");

//    const addmarks =(CourseId)=>{
//        axios.post(`http://localhost:3001/addmarks/${CourseId}`,{
//             Grade:grade,
//             RegNo:regno,
//        }).then(()=>{alert('success')});
//    }

// //    const upgradeStudent =(sId)=>{
// //     axios.post(`http://localhost:3001/upgradeStudent/${sId}`,{
         
// //     }).then(()=>{alert(sId+'upgraded by one level')});
// // }



    

//     //View All Details//
//     useEffect(()=>{
//     axios.get(`http://localhost:3001/addmarks/${ID}`).then((response)=>
//    {
//         setstudentMarksList(response.data);
//    });
//     })


//     //view course heading
//     const [courseList,setcourseList]=useState([]);
//     useEffect(()=>{
//         axios.get(`http://localhost:3001/viewCourse/${ID}`).then((response)=>
//        {
//         setcourseList(response.data);
//        });
//         })

//     //add marks    
    
//     return(
//         <div className="addMarksPage">
//             <h4>Bachelor of Arts (BA) Students
//                 <br/>Level - 01
//             </h4>
//             {courseList.map((val,key)=>{
//                     return(
//                     <div key={val.ID}>
//                         <h6 >{val.Type} Courses
//                             <br/>{val.subject}
//                             <br/>{val.ID}   :   {val.Name}
//                         </h6>
//                     </div>
//                     );
//                 })}
//                 <form >
//                         <div className=" row">
                            
//                             <div className="col-md-6">
//                                 <label>Reg No   :</label>
//                                 <input type="text" onChange={(event)=>{setregNo(event.target.value);}}/>
//                             </div>
//                             <div className="col-md-6">
//                                 <label>Grade   :</label>
//                                 <input type="text" onChange={(event)=>{setgrade(event.target.value);}}/>
//                             </div>
//                         </div>
//                         {/* <td><button onClick={()=> {upgradeStudent(val.sId)}} type="button" className="btn btn-primary">Upgrade</button></td> */}

//                 </form>

//             <table>
//                 <thead>
//                 <tr>
//                     <th scope="col">Student's Reg. No</th>
//                     <th scope="col">Proper Results</th>
//                     <th scope="col">Repeat/Upgrade Result</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {studentMarksList.map((val,key)=>{
//                     return(
//                     <tr key={val.SCid}>
//                         <td scope="row" >{val.RegNo}</td>
//                         <td>{val.Grade}</td>
//                         <td>{val.NewGrade}</td>
//                         <td>
//                         <button onClick={()=> {addmarks(val.CourseId)}} type="button" className="btn btn-success">add</button>

//                         </td>
//                     </tr>
//                     );
//                 })}
//                 </tbody>
//             </table>
//             <button type="button" className="btn btn-success">Add</button>
//             <Link to={"/students/BA"}><button type="button" className="btn btn-secondary">CANCEL</button></Link>

            
//         </div>    
//     )
// }
// export default A_AddMarks
