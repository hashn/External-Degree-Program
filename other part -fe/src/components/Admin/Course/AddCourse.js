import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddCourse() {
    const [id,setID]=useState("");
    const [name,setName]=useState("");
    const[credit,setCredit]=useState(0);
    const[type,setType]=useState("core");
    const[year,setYear]=useState("First");
    const[depatment,setDepartment]=useState("BA")

    


    const handleSubmit = () =>{

        
        axios.post('http://localhost:3001/createCourse',{
            id:id,
            type:type,
            year:year,
            name:name,
            depatment:depatment,
            credit:credit


        })
        
    }
    return (
        <div>
            <div className="container mt-4">
            <form>
            
            <div className="form-group">
                <label>ID</label>
                <input type="text" className="form-control" onChange={(event)=>{setID(event.target.value)}}/>
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
            <label htmlFor="exampleFormControlSelect1">Type</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setType(event.target.value)}}>
                <option value="core">core</option>
                <option value="foundation">Foundation</option>
                <option value="supplementary">Sublimentry</option>
            </select>
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={(event)=>{setName(event.target.value)}}/>
                 </div>
            <div className="form-group">
                <label>Credit</label>
                <input type="number" className="form-control" onChange={(event)=>{setCredit(event.target.value)}}/>
               </div>
            <div className="form-group">
                <label>Year</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setYear(event.target.value)}}>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
            </select>
            </div>
            <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>SUBMIT</button>
            <Link to='/Course'><button className="btn btn-warning">CANCEL</button></Link>
            </div>
            </form>
           
        </div>
        </div>
    )
}

export default AddCourse
