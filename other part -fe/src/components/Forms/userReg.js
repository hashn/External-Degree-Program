import React , { useEffect }from 'react'
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserReg()  {
    const [Fullname,setFullname]=useState([]);
    const [Username,setUsername]=useState("");
    const [NIC,setNIC]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [Subject1,setSubject1]=useState("");
    const [Subject2,setSubject2]=useState("");
    const [Subject3,setSubject3]=useState("");

   const addlec =()=>{
       axios.post("http://localhost:3001/addLec",{
        Fullname:Fullname,
        Username:Username,
        NIC:NIC,
        Email:Email,
        Password:Password,
        Subject1:Subject1,
        Subject2:Subject2,
        Subject3:Subject3,
       }).then(()=>{alert('success')});
   }

        return (
            <div className='userReg'>
                <div className="close"><a href="/">x</a></div>
                <div className="userRegForm">
                    <h1>Sign Up</h1>
                    <form>
                        
                            <div >
                                <label >Full Name   :</label>
                                <input type="text" onChange={(event)=>{setFullname(event.target.value);}}/>
                            </div>
                            <div >
                                <label>Username   :</label>
                                <input type="text" onChange={(event)=>{setUsername(event.target.value);}}/>
                            </div>
                            <div >
                                <label>NIC   :</label>
                                <input type="text" onChange={(event)=>{setNIC(event.target.value);}}/>
                            </div>
                            <div >
                                <label >Email   :</label>
                                <input type="email" onChange={(event)=>{setEmail(event.target.value);}}/>
                            </div>
                            <div >
                                <label>Password   :</label>
                                <input type="password" onChange={(event)=>{setPassword(event.target.value);}}/>
                            </div>
                            <div >
                                <label>Subject Specifiacation   :</label>
                                <input type="text" onChange={(event)=>{setSubject1(event.target.value);}}/><br/>
                                <input type="text" onChange={(event)=>{setSubject2(event.target.value);}}/><br/>
                                <input type="text" onChange={(event)=>{setSubject3(event.target.value);}}/><br/>
                            </div>
                        
                        <button onClick={addlec} type="button" className="btn btn-success">Submit</button>
                    </form>
                    {/* <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="password" placeholder="Confirm Password"></input>
                        <input type="submit" value="Sign Up"></input>
                    </form> */}
                    <div className="reg-bottom-text">
                        <p>Already signed in<a href="/login">Login</a></p>
                        
                    </div>
                    {/* <div className="regBtn"><a href="/login">Login</a></div> */}
                </div>
                <img src="assets/imagas/degree.jpg" />
            </div>
        )
}

export default UserReg
