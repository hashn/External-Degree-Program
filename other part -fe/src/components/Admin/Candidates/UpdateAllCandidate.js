import React from 'react'
import {useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import '../AdminCSS/Update.css';
function UpdateAllCandidate() {
  const {id}=useParams();
  const [updatelist,setUpdateList]=useState([]);
  const [fullnametamil,setFullNameTamil]=useState("");
  const [fullnameeng,setFullNameEng]=useState("");
  const[nic,setNIC]=useState("");
  const[address,setAddress]=useState("");
  const[phoneno,setPhoneno]=useState("");
  const[email,setEmail]=useState("");
  const[year,setYear]=useState(0);
  const[section,setSection]=useState("");
  const[subjectl,setSubject1]=useState("");
  const[result1,setResult1]=useState("");
  const[subject2,setSubject2]=useState("");
  const[result2,setResult2]=useState("");
  const[subject3,setSubject3]=useState("");
  const[result3,setResult3]=useState("");
  const[english_result,setEnglishResult]=useState("");
  const[common_general_test_result,setCommonGeneralTest]=useState(0);
  const[other_qualification_name,setOtherQalificationName]=useState("");
  const[qualification_provided_company,setQualificationProvidedCompany]=useState("");
  const[duration_of_course,setDurationOfCourse]=useState("");
  const[validity_date,setValidityDate]=useState("");
  const[position,setPosition]=useState("");
  const[company,setCompany]=useState("");
  const[num1,setNumber]=useState("");
  const [acadamic_Year,setAcadamicYear]=useState([]);

  
  useEffect(()=>{
    axios.get(`http://localhost:3001/CandidatesDetailsId/${id}`).then((res)=>{
        setUpdateList(res.data);
    
      })

  })


  const managePage = () =>{
    switch(num1){
      
      case 1:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Name Tamil</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setFullNameTamil(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:fullnametamil,cloumn:'full_name_tamil'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );

      case 2:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Name English</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setFullNameEng(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:fullnameeng,cloumn:'full_name_eng'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );

      case 3:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter NIC Number</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setNIC(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:nic,cloumn:'nic'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );
     
      case 4:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Address</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setAddress(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:address,cloumn:'address'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );

      case 5:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Email</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setEmail(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:email,cloumn:'Email'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );

      case 6:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Phone No</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setPhoneno(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:phoneno,cloumn:'phone_no'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );
      
      case 7:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Year</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setYear(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:year,cloumn:'year'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>
      );
      case 8:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Section</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setSection(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:section,cloumn:'section'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 9:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Subject1</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setSubject1(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:subjectl,cloumn:'subject1'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 10:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter result1</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setResult1(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:result1,cloumn:'result_1'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 11:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Subject2</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setSubject2(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:subject2,cloumn:'subject2'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 12:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter result2</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setResult2(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:result2,cloumn:'result_2'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 13:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Subject3</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setSubject3(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:subject3,cloumn:'subject3'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 14:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter result3</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setResult3(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:result3,cloumn:'result_3'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 15:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter English Result</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setEnglishResult(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:english_result,cloumn:'english_result'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );
      case 16:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Enter Common General Test Result</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setCommonGeneralTest(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:common_general_test_result,cloumn:'common_general_test_result'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 17:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Other Qualification Name</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setOtherQalificationName(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:other_qualification_name,cloumn:'other_qualification_name'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 18:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Qualification Provided Institution</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setQualificationProvidedCompany(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:qualification_provided_company,cloumn:'qualification_provider'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 19:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Duration Of Course</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setDurationOfCourse(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:duration_of_course,cloumn:'duration_of_course'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 20:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>validity Date</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setValidityDate(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:validity_date,cloumn:'validity_date'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 21:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Position</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setPosition(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:position,cloumn:'position'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );

      case 22:   return(
        <div className="container mt-4 align-self-center form-group text-center">
          <labet>Company</labet>
          <input type="text"  className="form-control" onChange={(event)=>{setCompany(event.target.value)}}/><br/><br/>
          <button type="button" onClick={()=>{axios.put(`http://localhost:3001/updateCandidate/${id}`,{editData:company,cloumn:'company'})}} class=" btn button_Submit btn-sm btn-block">SUBMIT</button>
        </div>

      );


      default:  return <div className="select_item"><h1>SELECT UPDATE ITEM</h1></div>

      
      
    }
  }
  const handleClick =(num)=>{
    setNumber(num);
    managePage();
  }
   
  
 
 
  return(
    <div className="container mt-4 text-center"> 
        <div className="col">
          <div>
          {updatelist.map((val,key)=>{
            
            return(
                <div key={val.ID}>
                
                <h1 className="d-flex justify-content-center">Update {val.full_name_eng}</h1>
                  <div>
                    <button type="button" onClick={()=>{handleClick(1)}} class="btn button_style btn-sm">Full Name Tamil : {val.full_name_tamil} </button>
                    <button type="button" onClick={()=>{handleClick(2)}} class="btn button_style btn-sm">Full Name English : {val.full_name_eng}</button>
                    <button type="button" onClick={()=>{handleClick(3)}} class="btn button_style btn-sm">NiC : {val.nic}</button><br/>
                    
                  </div>
                
                <div>
                    <button type="button" onClick={()=>{handleClick(4)}} class="btn button_style btn-sm">Address : {val.address}</button>
                    <button type="button" onClick={()=>{handleClick(5)}} class="btn button_style btn-sm">Email : {val.Email}</button>
                    <button type="button" onClick={()=>{handleClick(6)}} class="btn button_style btn-sm">Phone No : {val.phone_no}</button><br/>
                   
                </div>
                    <div className="row row1">
                      <div className="col col1">
                      <h5>INFORMATION ABOUT G.C.E(A/L)</h5>
                    <button type="button" onClick={()=>{handleClick(7)}} class="btn button_style btn-sm ">Year : {val.year}</button>
                    <button type="button" onClick={()=>{handleClick(8)}} class="btn button_style btn-sm ">Section : {val.section}</button><br/>
                    <button type="button" onClick={()=>{handleClick(9)}} class="btn button_style btn-sm ">Subject1 : {val.subject1} </button>
                    <button type="button" onClick={()=>{handleClick(10)}} class="btn button_style btn-sm ">Result1 : {val.result_1}</button><br/>
                   
                    <button type="button" onClick={()=>{handleClick(11)}} class="btn button_style btn-sm ">Subject2 : {val.subject2}</button>
                    <button type="button" onClick={()=>{handleClick(12)}} class="btn button_style btn-sm ">Result2 : {val.result_2}</button><br/>

                    <button type="button" onClick={()=>{handleClick(13)}} class="btn button_style btn-sm ">Subject3 : {val.subject3}</button>
                    <button type="button" onClick={()=>{handleClick(14)}} class="btn button_style btn-sm ">Result3 : {val.result_3}</button><br/>
                    <button type="button" onClick={()=>{handleClick(15)}} class="btn button_style btn-sm ">English Result : {val.english_result}</button>
                    <button type="button" onClick={()=>{handleClick(16)}} class="btn button_style btn-sm ">Common General Test Result : {val.common_general_test_result}</button>
                    
                      </div>


                      <div className="col col1">
                      <h5>INFORMATION ABOUT OTHER QUALIFICATION</h5>
                    <button type="button" onClick={()=>{handleClick(17)}} class="btn button_style btn-sm ">Other Qualification : {val.other_qualification_name}</button><br/>
                    <button type="button" onClick={()=>{handleClick(18)}} class="btn button_style btn-sm ">Qualification Provider :{val.qualification_provider}</button><br/>
                    <button type="button" onClick={()=>{handleClick(19)}} class="btn button_style btn-sm ">Duration of Course :{val.duration_of_course}</button><br/>
                    <button type="button" onClick={()=>{handleClick(20)}} class="btn button_style btn-sm ">Valididty Data :{val.validity_date}</button><br/>
                    
                      </div>

                      <div className='col col1'>
                      <h5>INFORMATION ABOUT CAREER QUALIFICATION</h5>
                    <button type="button" onClick={()=>{handleClick(21)}} class="btn button_style btn-sm ">Position : {val.position}</button><br/>
                    <button type="button" onClick={()=>{handleClick(22)}} class="btn button_style btn-sm ">Company : {val.company}</button>
      
                      </div>
                   </div>
                    
                    
                   
                </div>
            )
        })}
      
          </div>
          <div className="row">
          {managePage()}
          </div>
        </div>
          
          <Link to={"/AcadamicYearCandidate"+acadamic_Year}><button type="button" className="btn button_Cancel btn-sm btn-block">CANCEL</button></Link>
    </div>
  )
}

export default UpdateAllCandidate
 