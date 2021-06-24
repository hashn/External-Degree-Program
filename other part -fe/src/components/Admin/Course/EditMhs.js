import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function EditMhs() {
    const  {id} =useParams();
    
    const [couresList,setUpdateList]=useState([]);
    const [name,setName]=useState("");
    const[credit1,setCredit]=useState();
    const[type1,setType]=useState("");
    const[year1,setYear]=useState("");
    const[depatment,setDepartment]=useState("BA");
    const[id1,setID]=useState('');
    
    // const[depatment2,setDepartment2]=useState('');
    // const[name2,setName2]=useState('null');
    // const[credit2,setCredit2]=useState('');
    // const[type2,setType2]=useState('');
    // const[year2,setYear2]=useState('');
    // const[id2,setID2]=useState('');
    
    // useEffect(()=>{
    //     const url=`http://localhost:3001/courseDetailsId/${id}`
    //     async function fetchData(){
    //         const request = await axios.get(url);
    //         setUpdateList(request.data.results);
    //         return request;
    //     }
    //     fetchData();
    // },[])
    useEffect(()=>{
        axios.get(`http://localhost:3001/courseDetailsId/${id}`).then((res)=>{
            setUpdateList(res.data);
            }).then(()=>{
            couresList.map((val,key)=>{
                key=val.ID;
                setID(val.ID);
                setName(val.Name);
                setType(val.Type);
                setCredit(val.credit); 
                setYear(val.year);
                setDepartment(val.Department); 
                 
            })
            
          })
      },[]);
      
      
     
      
     
   
    const handleSubmit = () => {
    
         
        
        axios.put(`http://localhost:3001/updateCourse/${id}`,
        {        
                name2:name,
                type2:type1,
                depatment2:depatment,
                credit2:credit1,
                year2:year1
        });
        
    };
   
    return (
        
        <div className="container mt-4">
            <h1>EDIT COURSE</h1>
        {couresList.map((val,key)=>{
        return (
            <div>
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.ID}</button><br/> 
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.Name}</button><br/>  
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.Department}</button> <br/>  
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.credit}</button>  <br/> 
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.Type}</button> <br/>  
                <button type="button" class="btn btn-secondary btn-lg btn-block">{val.year}</button>  <br/>          
             </div>
        
        )})}
        </div>
    )
}

export default EditMhs
