
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Supplementary() {
  
  const [couresList,setCourseList]=useState([]);
  const couresListFirst=[];
  const couresListSecond=[];
  const couresListThird=[];
  const couresListFourth=[];
    

    useEffect(()=>{
        axios.get('http://localhost:3001/getCourseSublimentary').then((response)=>
        {
            setCourseList(response.data);
        });

  })

    

  couresList.map((val,key)=>{
    const obj={ID:val.ID,Name:val.Name,Type:val.Type,year:val.year,Department:val.Department,credit:val.credit}
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
     else
     {
      couresListFourth.push(obj);
     }
   })
    return (
        <div className='courses'>
                            <div className='core-courses-sec1'>
                <h2 className="sec1-sub-title">Courses</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div className="sec1-sub-box"><a href="/CC">Foundation Courses</a></div>
                    </div>
                    <div class="col-md-4">
                        <div className="sec1-sub-box"><a href="/EC">Core Courses</a></div>
                    </div>
                    <div class="col-md-4">
                        <div className="sec1-sub-box"><a href="/EN">Supplementary Courses</a></div>
                    </div>
                    
                </div>
                <img src="assets/imagas/course.jpg"  alt="image_course" className="card-image-center" />
            </div>
             <div className='core-courses-sec2'>
                <div className='courseunit-box'>
                <h2 className='courseunit-title'>Foundation Course Units</h2>
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

export default Supplementary

