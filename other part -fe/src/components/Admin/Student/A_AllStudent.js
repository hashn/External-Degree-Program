import React , { useEffect }from 'react'
import Sidebar from '../Sidebar'
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function A_AllStudent() {
//add batch
    const [batchNo,setBatchNo]=useState("");
    const [acdYear,setAcdYear]=useState("");
    const [comDate,setComDate]=useState("");

   const addBatch =()=>{
       axios.post("http://localhost:3001/addBatch",{
            batchNo:batchNo,
            acdYear:acdYear,
            comDate:comDate,
       }).then(()=>{alert('success')});
   }

const upgradeAll =()=>{
    axios.post("http://localhost:3001/upgradeAll",{
         
    }).then(()=>{alert('upgraded by one level')});
}


//view batch
   const [batchList,setBatchtList]=useState([]);
   useEffect(()=>{
    axios.get("http://localhost:3001/viewBatchh").then((response)=>
   {
       setBatchtList(response.data);
   });
    })

        return (
            <div className="row wrapper">
                <div className="batch-sidebar col-md-4">
                    <Sidebar/>
                </div>
                <div className="batch-table col-md-8">
                    <div className="batch-table-btn row">
                    <h6 data-toggle="collapse" data-target="#batch" class=" col-md-3 collapsed">
                        Add a new batch
                    </h6>
                    <h6 data-toggle="collapse" data-target="#upgrade" class="col-md-3 collapsed">
                        Upgrade Students
                    </h6>
                    {/* <h6 data-toggle="collapse" data-target="#marks" class="col-md-3 collapsed">
                        Add Marks
                    </h6> */}
                    <h6><a href="/addMarks">Add Marks</a></h6>
                    </div>
                    
                    <form className="addBatch collapse" id="batch">
                        <div className="addBatchForm row">
                            <div className="col-md-4">
                                <label >Batch   :</label>
                                <input type="number" onChange={(event)=>{setBatchNo(event.target.value);}}/>
                            </div>
                            <div className="col-md-4">
                                <label>Year   :</label>
                                <input type="year" onChange={(event)=>{setAcdYear(event.target.value);}}/>
                            </div>
                            <div className="col-md-4">
                                <label>Date   :</label>
                                <input type="date" onChange={(event)=>{setComDate(event.target.value);}}/>
                            </div>
                        </div>
                        <button onClick={addBatch} type="button" className="btn btn-success">add</button>
                    </form>
                    <form className="upgradeAll collapse" id="upgrade">
                            <h7>Upgrade all the students :</h7>
                            <button onClick={upgradeAll} type="button" className="btn btn-info">Upgrade All</button><br/>
                        <h7>***Vist Students details pages to UPGRADE STUDENTS ONE BY ONE.</h7>
                    </form>
                    {/* <form className="addMarks collapse" id="marks">
                        <a href="/students/BA/firstyearcourses">First Year</a>
                        <a href="/students/BA/secondyearcourses" >Second Year</a>
                        <a href="/students/BA/thirdyearcourses">Third Year</a>
                        <a href="/students/BA/fourthyearcourses">Fourth Year</a>
                    </form> */}

                    <h4>Bachelor of Arts (BA) Students</h4>
                    <table>
                    <thead>
                        <tr>
                            <th scope="col">Batch</th>
                            <th scope="col">Academic Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batchList.map((val,key)=>{
                            return(
                            <tr key={val.batchNo}>
                                <td scope="row" >{val.batchNo}</td>
                                {/* <td><a onClick={getYear} onChange={(event)=>{setYear(val.acdYear);}} href="/students/BA/nameList">{val.acdYear}</a></td> */}
                                <td><Link to={"/students/BA/nameList/"+val.acdYear}><a>{val.acdYear}</a></Link></td>
                            </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        )
}

export default A_AllStudent
