import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoreSubjectLinks from './CoreSubjectLinks';
function CoursesHP() {
 const [courseList,setCourseList]=useState([]);
 const couresListFirst=[];
 const couresListSecond=[];
 const couresListThird=[];
 
    useEffect(()=>{
        axios.get('http://localhost:3001/getCourseCore').then((response)=>
        {
            setCourseList(response.data);
        });

  })
  courseList.map((val,key)=>{

    const obj={ID:val.ID,Name:val.Name,Type:val.Type,year:val.year,Department:val.Department,credit:val.credit}
    var pieces = val.ID.split("");
     if(pieces[5]==='H'&& pieces[6]==='P')
     {
        if(val.year==='First')
        {
          couresListFirst.push(obj);
        }
        else if(val.year==='Second')
        {
         couresListSecond.push(obj);
        }
        else if(val.year==='Third')
        {
         couresListThird.push(obj);
        }
        
     }
   })
    return (
        <div className='courses'>
            <div className='core-courses-sec1'>
                <CoreSubjectLinks/>
            </div>


            <div className='core-courses-sec2'>
                <div className='courseunit-box'>
                    <h2 className='courseunit-title'>Hindu Philosophy</h2>
                    <div className='courseunits'>
                        <h4 className='courseunits-year'>First Year</h4>
                        {couresListFirst.map((val,key)=>{
                          return(
                            <div className='courseunits-link'><button className='course-btn'>{val.ID} {val.Name}</button></div>   
                          )
                        })}
                                           
                    </div>
                    <div className='courseunits'>
                        <h4 className='courseunits-year'>Second Year</h4>
                        {couresListSecond.map((val,key)=>{
                          return(
                            <div className='courseunits-link'><button className='course-btn'>{val.ID} {val.Name}</button></div>   
                          )
                        })}                 
                    </div>
                    <div className='courseunits'>
                        <h4 className='courseunits-year'>Third Year</h4>
                        {couresListThird.map((val,key)=>{
                          return(
                            <div className='courseunits-link'><button className='course-btn'>{val.ID} {val.Name}</button></div>   
                          )
                        })}                   
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CoursesHP
