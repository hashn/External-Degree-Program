import axios from 'axios';
import React, { useState } from 'react';

function AddImage() {
    const [file,setFiles]=useState(null);
    const [uploadStatus,setUploadStatus]=useState('');
       const  imageHandler = (e) =>{
        setFiles(e.target.files[0]); 
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);
          axios.post("http://localhost:3001/addTimetable",data)
          .then(res => {
              setUploadStatus(res.data);
          })
          .catch((err)=>{
              console.log(err)
          })
    }
    return (

           <div>
               <h1>{uploadStatus}</h1>
               <form method="post" action='#' id="#" onSubmit={submitHandler} >
               <div className="form-group files">
                   <ladel>Upload  Image</ladel><input type='file' onChange={imageHandler} className="form-control" accept="image/*" multiple=""/>
               </div>
               <button>Submit</button>
           </form>
           </div>
    )
}

export default AddImage
