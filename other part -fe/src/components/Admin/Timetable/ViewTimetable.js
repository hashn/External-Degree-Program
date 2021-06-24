import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewTimetable() {
    const [file,setImage] = useState('');


    useEffect(()=>{
        axios.get('http://localhost:3001/gatImage')
        .then((data)=>{
            console.log(data)
            setImage('http://localhost:3001/'+data.file)
            console.log(file)
        })
    })
    return (
        <div>
            <h1>This is the timetabel</h1>
            {file && <img src={file}/>}
        </div>
    )
}

export default ViewTimetable