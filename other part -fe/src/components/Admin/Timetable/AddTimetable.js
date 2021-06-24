import axios from 'axios'
import React, { useState } from 'react'

function AddTimetable() {
   const [column1,setColumn]=useState(0);
   


  const handheSubmit = () =>{
    axios.post("http://localhost:3001/addTimetable",
    {

    })
  }

  const managePage = (col) =>{
    if(col===0)
    {
      return (
        <div>
        <label>Choose number of day</label>
        <input type="number" onChange={(event)=>{setColumn(event.target.value)}}/>
        <button>Submit</button>
      </div>
      )
    }
    else
    {
      for (var i = 0; i <col ; i++) {

        return (
          <div>
            <label>Date</label>
            <input type="number"></input><br/>
          </div>
        )
        
      }
    }
  }
  return (
    <div>
      <h1>Candidate Timetable form</h1>
      {managePage(column1)}
    </div>
  )
}

export default AddTimetable
