import React from 'react'
// import Sidebar from '../Sidebar'
// import RemoveTimetable from './RemoveTimetable';
 import ViewTimetable from './ViewTimetable';
import { Link } from 'react-router-dom';
function Timetable() {
   
        
    return (
        <div className="wrapper_1">
        <Link to='/AddTimetable'><button>ADD</button></Link><br/>
        <button>Delete</button><br/>
        <ViewTimetable/>

     </div>
    )
}

export default Timetable

