import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function EditMhs() {
    const  {id} =useParams();
    
    const [couresList,setUpdateList]=useState([]);
    const[id1,setID]=useState('');
    const[name2,setName2]=useState('');
    const[depatment2,setDepartment2]=useState('BA');
    const[credit2,setCredit2]=useState('');
    const[type2,setType2]=useState('core');
    const[year2,setYear2]=useState('First');
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/courseDetailsId/${id}`).then((res)=>{
            setUpdateList(res.data);
            })
      });

     
      const [num1,setNum]=useState(0);
      const managePage =()=>{
        switch(num1) {

          case 1:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Enter ID</labet>
              <input type="text"  className="form-control" onChange={(event)=>{setID(event.target.value)}}/><br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:id1,cloumn:'ID'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          case 2:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Enter Course Name</labet>
              <input type="text"  className="form-control" onChange={(event)=>{setName2(event.target.value)}}/><br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:name2,cloumn:'Name'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          case 3:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Select Department</labet>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setDepartment2(event.target.value)}}>
                <option value="BA">Bachelor of Arts (BA)</option>
                <option value="BFA">Bachelor of Fine Arts (BFA)</option>
                <option value="B.Com">Bachelor of Commerce (B.Com)</option>
                <option value="BBM">Bachelor of Business Management(BBM)</option>
            </select>
              
              <br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:depatment2,cloumn:'Department'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          case 4:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Enter Credit</labet>
              <input type="number"  className="form-control" onChange={(event)=>{setCredit2(event.target.value)}}/><br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:credit2,cloumn:'credit'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          case 5:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Select Type</labet>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setType2(event.target.value)}}>
                <option value="core">core</option>
                <option value="foundation">Foundation</option>
                <option value="supplementary">Sublimentry</option>
            </select>
            <br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:type2,cloumn:'Type'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          case 6:   return(
            <div className="container mt-4 align-self-center form-group text-center">
              <labet>Select Year</labet>
              <select className="form-control" id="exampleFormControlSelect1" onChange={(event)=>{setYear2(event.target.value)}}>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
                </select>
              <br/><br/>
              <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCourse/${id}`,{editData:year2,cloumn:'year'})}} class="btn btn-warning btn-lg btn-block">SUBMIT</button>
            </div>
          );
          default:  return <div className="text-center"><h1>SELECT<br/> UPDATE<br/> ITEM</h1></div>
        }
      }
      
      const handleClick =(num)=>{
          setNum(num);
          managePage();
      }
     
      
     
   
    
   
    return (
        
        <div className="container mt-4 ">
            <h1>EDIT COURSE</h1>
       <div className="row">
         <div className="col">
       {couresList.map((val,key)=>{
        return (
            <div>
                <button type="button" onClick={()=>{handleClick(1)}} class="btn btn-secondary btn-lg btn-block">ID : {val.ID}</button><br/> 
                <button type="button" onClick={()=>{handleClick(2)}} class="btn btn-secondary btn-lg btn-block"> Course Name : {val.Name}</button><br/>  
                <button type="button" onClick={()=>{handleClick(3)}} class="btn btn-secondary btn-lg btn-block">Department : {val.Department}</button> <br/>  
                <button type="button" onClick={()=>{handleClick(4)}} class="btn btn-secondary btn-lg btn-block">Creadit : {val.credit}</button>  <br/> 
                <button type="button" onClick={()=>{handleClick(5)}} class="btn btn-secondary btn-lg btn-block">Type : {val.Type}</button> <br/>  
                <button type="button" onClick={()=>{handleClick(6)}} class="btn btn-secondary btn-lg btn-block">Year :{val.year}</button>  <br/>         
             </div>
        
        )})}
      </div>
      <div className="col">
        {managePage()}
      </div>
      </div>    
      <div>
        <Link to='/Course'><button type="button"class="btn btn-info btn-lg btn-block">CANCEL</button></Link>
        </div>  
        </div>
    )
}

export default EditMhs
