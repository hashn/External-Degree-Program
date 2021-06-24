import React , { useEffect }from 'react'
import {useState} from "react";
import axios from 'axios';
import '../AdminCSS/Allcandidates.css';
import { Link, useParams } from 'react-router-dom';

function AllCandidates() {
    const [candidatesList,setCandidatesList]=useState([]);
    const {id}=useParams();
    //View All Details//
    useEffect(()=>{
    axios.get(`http://localhost:3001/allCandidates/${id}`).then((response)=>
   {
       setCandidatesList(response.data);
   });
    },[])
//View All Details//

//Delete Candidates//
const deleteCandidates = (id) =>{
   axios.delete(`http://localhost:3001/delete_candidate/${id}`).then((response)=>{
       setCandidatesList(candidatesList.filter((val)=>{
           return val.id!==id;
       }));
   })
}
//Delete Candidates//

   return (
        <div className="container mt-4 d-flex justify-content-center">
        <div>
        <div style={{}

                }>
                <Link to={"/AcadamicYearCandidate"}><button type="button" ><img 
                src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                alt='back'
                style={{
                    width:"40px",
                    height:"40px"
                }}></img></button></Link>
      </div>

            
            <h1 className='d-flex justify-content-center'>All Applied Candidate-{id}</h1>
           <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name In English</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
                <th scope="col">Accept Student</th>
                <th scope="col">More Details</th>
                
                </tr>
            </thead>
            <tbody>
            {candidatesList.map((val,key)=>{
          return(
            <tr key={val.ID}>
            <td scope="row" >{val.ID}</td>
            <td>{val.full_name_eng}</td>
            <td>{val.Email}</td>
            <td>{val.status}</td>
            <td><button onClick={()=>deleteCandidates(val.ID)} type="button"
            style={{
                borderRadius:"25px",
                color:"#ffff",
                backgroundColor:"#8B0000",
                width:"100px"
                
            }}   >Delete</button></td>
            <td><Link to={"/UpdateAllCandidate/"+val.ID}><button type="button"
            style={{
                borderRadius:"25px",
                color:"#ffff",
                backgroundColor:"#FFA500",
                width:"100px"
                
            }}  >EDIT</button></Link></td>
            <td><Link to={"/AcceptAndSendMail/"+val.ID}><button type="button"
            style={{
                borderRadius:"25px",
                color:"#ffff",
                backgroundColor:"#006400",
                width:"150px"
                
                
            }} >ACCEPT STUDENT</button></Link></td>
            <td><Link to={"/AllCanditatsMoreDetails/"+val.ID}><button type="button"
            style={{
                borderRadius:"25px",
                color:"#ffff",
                backgroundColor:"#008B8B",
                width:"150px"
                
                
            }} >MORE DETAILS</button></Link></td>

            
            </tr>
            );
        })}
            </tbody>
          </table>

        </div>
                       
        </div>
    )
}

export default AllCandidates
