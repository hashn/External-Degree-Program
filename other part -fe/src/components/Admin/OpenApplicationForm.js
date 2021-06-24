import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function OpenApplicationForm() {
    const [Closing_date,setClosingDate]=useState("");
    const [Acadamic_year,setAcadamicYear]=useState("");
    const [Department,setDepartment]=useState("BA");
    const [Application_Name,setApplicationName]=useState("Candidate Exam Application");

   const handleOpenApplication =()=>{
       axios.put("http://localhost:3001/addOpenApplication",{
            
            Closing_date:Closing_date,
            Acadamic_year:Acadamic_year,
            Department:Department,
            Application_Name:Application_Name,
            status:'open'
       })
       if(Application_Name==='Candidate Exam Application'||Application_Name=='University Registration')
       {
        axios.post("http://localhost:3001/addAcadamicYearDetails",{
            Acadamic_year:Acadamic_year,
            Department:Department,
            Application_Name:Application_Name
       }).then(()=>{alert('success')});
       }
   }
    return (
        <div className="container mt-4">
            <h1>OPEN APPLICATION FORM</h1>
        <form>
            <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Closing Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" onChange={(event)=>{setClosingDate(event.target.value);}}/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Acadamic Year</label>
            <input type="year" className="form-control" id="exampleFormControlInput1" onChange={(event)=>{setAcadamicYear(event.target.value);}}/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Department</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setDepartment(event.target.value)}}>
                <option value="BA">Bachelor of Arts (BA)</option>
                <option value="BFA">Bachelor of Fine Arts (BFA)</option>
                <option value="B.Com">Bachelor of Commerce (B.Com)</option>
                <option value="BBM">Bachelor of Business Management(BBM)</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="exampleFormControlSelect1" >Application Name</label>
            <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Name" onChange={(event)=>{setApplicationName(event.target.value)}}>
                <option value="Candidate Exam Application">Candidate Exam Application</option>
                <option value="University Registration">University Registration</option>
                <option value="Semester Registration">Semester Registration</option>
                <option valu="Repeat Exam">Repeat Exam</option>
                <option value="Semester Exam">Semester Exam</option>
            </select>
            </div>
            <div className="d-flex justify-content-around">
            <br/> <Link to='/OpenAndCloseApplicationForm'><button onClick={handleOpenApplication} type="button" className="btn btn-success">OPEN</button></Link>
            <Link to='/OpenAndCloseApplicationForm'><button type="button" className="btn btn-secondary">CANCEL</button></Link>
            </div>
        </form>
   

        
</div>


     
    )
}

export default OpenApplicationForm
