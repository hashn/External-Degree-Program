import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";


function Home() {
    
    const [student, setStudent] = useState([])

    const history = useHistory();

    useEffect(() => {

        fetch("http://localhost:3001/student", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(Response => Response.json())
        .then(Response => {
            setStudent(Response.data.student)
        })

    }, []);

    return (
        <div>

            <div  >
            <p class="text-center"> <h2>{student.Name}</h2> </p>
            </div>
            <table class="table">
                <tbody>
                    <tr>
                    <th scope="row"><h4> Registration Number  </h4></th>
                    <td>{student.RegNo}</td>
                    </tr>

                    <tr>
                    <th scope="row"><h4> Name with Initials </h4></th>
                    <td>{student.nameInitial}</td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Email </h4></th>
                    <td>{student.email}</td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Mobile </h4></th>
                    <td> {student.mobile} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Level of Study </h4></th>
                    <td> {student.level} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Accademic Year </h4></th>
                    <td> {student.acdyear} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Current GPA </h4></th>
                    <td> {student.gpa} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Address </h4></th>
                    <td> {student.address} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > National ID card </h4></th>
                    <td> {student.nic} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Sex </h4></th>
                    <td> {student.sex} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > Year of A/L </h4></th>
                    <td> {student.yearAl} </td>
                    </tr>

                    <tr>
                    <th scope="row"><h4 > A/L Stream </h4></th>
                    <td> {student.streamAl} </td>
                    </tr>
                 </tbody>

            </table>

            <button onClick={()=>history.push('/studentdetails')} type="button" className="btn btn-success"> Update </button>
    
        </div>

        
    )
}

export default Home