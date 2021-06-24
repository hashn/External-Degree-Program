import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateInterviewSelectedCandidate() {
    const {id} =useParams();
    const [Emarks,setEMarks]=useState(0);
    const [INmarks,setINmarks]=useState(0);



    


    const handleEMarksSubmit =() =>{
           
            axios.put(`http://localhost:3001/updateExamSelectedcandidate/${id}`,
            {
             editData:Emarks,
             cloumn:'Candidate_Exam_Marks'
            }).then(()=>{
                alert("succes");
            })
           
           
          
    }

    const handleIMarksSubmit =()=>{
        axios.put(`http://localhost:3001/updateIWSelectedcandidate/${id}`,
        {
         editData:INmarks,
         
        }).then(()=>{
            alert("succes");
        })
        
    }
    
    return (
        <div>
           <div className="col container mt-4 border" style={{

               width:"500px",
               height:"400px",
               marginBottom:"20px",
               alignContent:'center'

           }}>
               <div>
                   <h3 style={{
                       marginLeft:"120px",
                       marginTop:"20px"
                   }}>Edit  Marks</h3>
                 
                         <div style={{
                             margin:"70px",
                             marginLeft:"50px"
                         }}>
                             <h5>Candidate ID:{id}</h5>
                         <div >
                         
                             <p>Add  NewInterview Marks:</p>
                             <p><input type="number" onChange={(e)=>{setINmarks(e.target.value)}}/>
                             <button type="button" style={
                                 {
                                     backgroundColor:"#FFFF",
                                     border:"none",
                                     marginBottom:"13px",
                                     marginLeft:"10px"
                                 }
                             } onClick={()=>{handleIMarksSubmit()}} ><img 
                           src="https://icons555.com/images/icons-blue/image_icon_edit_pic_512x512.png"
                           alt='edit'
                            style={{
                                width:"30px",
                                height:"25px"
                            }}></img></button>
                            </p>
                            </div>

                         <div>
                         <p>Add New Exam  Marks:</p>
                             <p><input type="number" onChange={(e)=>{setEMarks(e.target.value)}}/>
                             <button type="button" style={
                                 {
                                     backgroundColor:"#FFFF",
                                     border:"none",
                                     marginBottom:"13px",
                                     marginLeft:"10px"
                                 }
                             } 
                             onClick={()=>{handleEMarksSubmit()}} ><img 
                             src="https://icons555.com/images/icons-blue/image_icon_edit_pic_512x512.png"
                             alt='edit'
                            style={{
                                width:"30px",
                                height:"30px"
                            }}></img></button></p>
                            </div>
                         
                         
                         </div>
                     
                 

                
               </div>
               

           </div>
        </div>
    )
}

export default UpdateInterviewSelectedCandidate
