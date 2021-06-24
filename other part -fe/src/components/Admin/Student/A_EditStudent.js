import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import {useEffect} from "react";
import { Link } from 'react-router-dom';

function A_EditStudent() {

  const {sId}=useParams();

  const [editStudentList,setStudentList]=useState([]);

  const [RegNo,setRegNo]=useState("");
  const [Name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[mobile,setMobile]=useState("");
  const[level,setlevel]=useState("");
  const[acdyear,setacdyear]=useState("");
  const[gpa,setgpa]=useState("");
  const[address,setAddress]=useState("");
  const[nic,setNIC]=useState("");
  const[dob,setDob]=useState("");
  const[sex,setsex]=useState("");

  const[NameNew,setNewName]=useState([]);
  const[emailnew,setnewEmail]=useState([]);
  const[mobilenew,setnewMobile]=useState([]);
  const[levelnew,setnewlevel]=useState([]);
  const[acdyearnew,setnewacdyear]=useState([]);
  const[gpanew,setnewgpa]=useState([]);
  const[addressnew,setnewAddress]=useState([]);
  const[nicnew,setnewNIC]=useState([]);
  const[dobnew,setnewDob]=useState([]);
  const[sexnew,setnewsex]=useState([]);


  

  //view
  useEffect(()=>{
    axios.get(`http://localhost:3001/EditStudent/${sId}`).then((res)=>{
        setStudentList(res.data);
    
      }).then(()=>{
        editStudentList.map((val,key)=>{
            setRegNo(val.RegNo);
            setName(val.Name);
            setEmail(val.email);
            setMobile(val.mobile);
            setlevel(val.level);
            setacdyear(val.acdyear);
            setgpa(val.gpa);
            setAddress(val.address);
            setNIC(val.nic);
            setDob(val.dob);
            setsex(val.sex);          
        })
      })
  })

  //update
  const updateSubmit = (student) => {
    axios.put('http://localhost:3001/updateStudent',
    {
            sId:sId,
            Name:NameNew,
    });
    setNewName("")
};

const updateSubmitemail = (student) => {
  axios.put('http://localhost:3001/updateStudentemail',
  {
          sId:sId,
          email:emailnew,
  });
  setnewEmail("")
};

const updateSubmitnic = (student) => {
  axios.put('http://localhost:3001/updateStudentnic',
  {
          sId:sId,
          nic:nicnew,
  });
  setnewNIC("")
};
const updateSubmitlevel = (student) => {
  axios.put('http://localhost:3001/updateStudentlevel',
  {
          sId:sId,
          level:levelnew,
  });
  setnewlevel("")
};
const updateSubmitaddress = (student) => {
  axios.put('http://localhost:3001/updateStudentaddress',
  {
          sId:sId,
          address:addressnew,
  });
  setnewAddress("")
};
const updateSubmitgpa = (student) => {
  axios.put('http://localhost:3001/updateStudentgpa',
  {
          sId:sId,
          gpa:gpanew,
  });
  setnewgpa("")
};
const updateSubmitmobile = (student) => {
  axios.put('http://localhost:3001/updateStudentmobile',
  {
          sId:sId,
          mobile:mobilenew,
  });
  setnewMobile("")
};
const updateSubmitsex = (student) => {
  axios.put('http://localhost:3001/updateStudentsex',
  {
          sId:sId,
          sex:sexnew,
  });
  setnewsex("")
};

 
  return(
    <div className="container mt4 editpage"> 
        {editStudentList.map((val,key)=>{
            return(
                <div key={val.sId}>
                  <h5>Update {val.RegNo}</h5>
                <hr/>
                <form className="editStudednt row edit-form">
                
                

                  <div className="col-md-6">
                  <h6>Update Personal Details</h6>
                    <label>Name :</label>
                    <input type="text" defaultValue={val.Name} onChange={(event)=>{setNewName(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmit(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>NIC :</label>
                    <input type="text" defaultValue={val.nic} onChange={(event)=>{setnewNIC(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitnic(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>email :</label>
                    <input type="text" defaultValue={val.email} onChange={(event)=>{setnewEmail(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitemail(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>level :</label>
                    <input type="number" defaultValue={val.level} onChange={(event)=>{setnewlevel(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitlevel(val.sId)}}><i className="far fa-check-circle"></i></button><br/>


                    <label>address :</label>
                    <input type="text" defaultValue={val.address} onChange={(event)=>{setnewAddress(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitaddress(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>gpa :</label>
                    <input type="number" defaultValue={val.gpa} onChange={(event)=>{setnewgpa(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitgpa(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>mobile :</label>
                    <input type="text" defaultValue={val.mobile} onChange={(event)=>{setnewMobile(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitmobile(val.sId)}}><i className="far fa-check-circle"></i></button><br/>

                    <label>sex :</label>
                    <input type="text" defaultValue={val.sex} onChange={(event)=>{setnewsex(event.target.value);}}></input>
                    <button onClick={()=> {updateSubmitsex(val.sId)}}><i className="far fa-check-circle"></i></button><br/>
                    </div>
                    <div className="col-md-6">
                      <h6>Update Academic Details</h6>
                      <Link to={"/addmarks"}><button type="button" className="btn btn-warning">Update Grades</button></Link>
                    </div>

                </form>

                <Link to={"/students/BA/nameList/"+val.acdyear}><button type="button" className="btn btn-secondary">CANCEL</button></Link>


                </div>
            )
        })}
    </div>
  )
}

export default A_EditStudent
 