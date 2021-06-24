import axios from 'axios';
import React, { useState } from 'react'

function UserRejistration() {
    const [fullname,setfullName]= useState("");
    const [email,setEmail]= useState("");
    const [nic_id,setNicID]= useState("");
    const [type1,setType1]= useState("Admin");
    const [password,setPassword]= useState("");
    
    const handleSubmit = () =>{

        var type="User Registration:"+type1;
        axios.post("http://localhost:3001/createUserregister",{
            fullname:fullname,
            email:email,
            nic_id:nic_id,
            type1:type1,
            password:password
        }).then(()=>{alert("Please Wait,Untile Your Restration is Accepted")})

        axios.post("http://localhost:3001/createNotice",{
            type:type
        });
    }
    return (
        <div className="container mt-4">
            <h1>USER REGISTRATION FORM</h1>
            <form>
            
            <div className="form-group">
                <label> Full Name</label>
                <input type="text" className="form-control" onChange={(event)=>{setfullName(event.target.value)}}/>
            </div>
            <div className="form-group">
            <label>User Type</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setType1(event.target.value)}}>
                <option value="Admin">Admin</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Staff">Staff</option>
                <option value="Student">Student</option>
            </select>
            </div>
            <div className="form-group">
                <label>If your student then enter the studentt ID otherwise enter NIC number</label>
                <input type="text" className="form-control" onChange={(event)=>{setNicID(event.target.value)}}/>
                 </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"  onChange={(event)=>{setEmail(event.target.value)}}/>
               </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=>{setPassword(event.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserRejistration
