import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Course() {

    const [couresList,setCourseList]=useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:3001/getCourse').then((response)=>
        {
            setCourseList(response.data);
        });
    })


    const deleteCandidates =(id)=>{
        axios.delete(`http://localhost:3001/deleteCourse/${id}`);
        alert(id+"deleted");
    }

    return (
        <div>
            <div className="container mt-4">
            <h1 className="p-2">This is Course Management Page</h1>
            <div>
            <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Type</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Year</th>
                        <th scop="col">Edit</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                        { couresList.map((val,key)=>{

                            return (
                                <tr key={val.ID}>
                                <td scope="row">{val.ID}</td>
                                <td>{val.Name}</td>
                                <td>{val.Department}</td>
                                <td>{val.Type}</td>
                                <td>{val.credit}</td>
                                <td>{val.year}</td>
                                <td><button type="button" onClick={()=>deleteCandidates(val.ID)} className="btn btn-danger">Delete</button></td>
                                <td><Link to={'/Editcourse/'+val.ID}><button  type="button" className="btn btn-warning">Edit</button></Link></td>

                                </tr>
                            )

                        })}
                    
                    </tbody>
                </table>
                        </div>
            <div>
                <Link to="/AddCourse">  <button type="button" className="btn btn-secondary btn-lg btn-block">ADD</button></Link>
              
            </div>
        </div>
        </div>
    )
}

export default Course
