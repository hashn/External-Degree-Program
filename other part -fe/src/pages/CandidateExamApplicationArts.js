import React from 'react';
import './Pagess Css/Candidate_Exam_Application_Arts.css';
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function CandidateExamApplicationArts() {
    
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
    const [applicationList,setApplicationDetails]=useState([]);
     var acadamicYear="0000";
    var closingdate="00/00/0000";


    

    const addCandidates=()=>{
        
        axios.post("http://localhost:3001/create",
        {
            fullnametamil:fullnametamil,
            fullnameeng:fullnameeng,
            nic:nic,
            address:address,
            phoneno:phoneno,
            email:email,
            year:year,
            section:section,
            subjectl:subjectl,
            result1:result1,
            subject2:subject2,
            result2:result2,
            subject3:subject3,
            result3:result3,
            english_result:english_result,
            common_general_test_result:common_general_test_result,
            other_qualification_name:other_qualification_name,
            qualification_provided_company:qualification_provided_company,
            duration_of_course:duration_of_course,
            validity_date:validity_date,
            position:position,
            company:company,
            acadamic_year:acadamicYear,
            faculty:'BA'

        }



        


        ).then(()=>{console.log('success')});

        axios.post("http://localhost:3001/createNotice",{
            type:"Candidate Exam Application"
        });
    }
 //Application List Details//
 
  const acadamicYearAndClosingDate=() =>{
    axios.get("http://localhost:3001/openApplicationDetailsCandidate").then((response)=>
    {
        setApplicationDetails(response.data);
    });

    applicationList.map((val,key)=>{
        acadamicYear=val.AcadamicYear;
        closingdate=val.ClosingDate;
    })
  }
  //Application List Details//


  
    return (
        <>
        {acadamicYearAndClosingDate()}
         <div>
            <div className="CandidateApplication" style={{fontFamily:"Mukta Malar" , backgroundColor:"#ffff"}}>
                <div className="closeingDate"><p style={{ fontSize:"20px"}}>closing date:{`${new Date(closingdate).getDate()}/${new Date(closingdate).getMonth()}/${new Date(closingdate).getFullYear()}`}</p></div>
                <div className="CandidateApplicationHead">
                <img src="assets/imagas/uojLogo.png" alt="uoj logo"/>
                <div  className="CandidateApplicationHeadP">
                <p>திறந்த மற்றும் தொலைக்கல்வி நிலையம்,யாழ்ப்பாணப் <br/> பல்கலைக்கழகம், இலங்கை<br/>
                CENTER FOR OPEN AND DISTANCE LEARNING (CODL)UNIVERSITY OF JAFFNA</p>
                </div>
                </div>
                <div className="Head1">
                     <p>கலைமாணி பட்டப்படிப்பு ({acadamicYear}) (வெளிவாரி) புதிய அனுமதிக்கான தெரிவுப் பரீட்சைக்கான விண்ணப்பம்-{acadamicYear}
                    <br/>BACHLOR OF ARTS ({acadamicYear}) SELECTION EXAM APPLICATION FOR NEW ADMISSION-{acadamicYear}</p>    
                </div>
                <div className="inputbox1">
                    <label>Full Name(In Tamil):<br/>முழுப்பெயர்(தமிழில்):</label>
                    <input type="text" className="textInput" onChange={(event)=>{setFullNameTamil(event.target.value);}}></input><br/>
                    <label>Full Name(In English):<br/>முழுப்பெயர்(ஆங்கிலத்தில்):</label>
                    <input type="text" className="textInput" onChange={(event)=>{setFullNameEng(event.target.value);
                     }}></input><br/>

                    <label>NIC No:<br/>தே.அ.அ.இல:</label>
                    <input type="text" maxLength="14" className="NIC" onChange={(event)=>{setNIC(event.target.value);
                     }}></input><br/>

                    <label >Address (In English) :<br/>(ஆங்கிலத்தில்):</label>
                    <input type="text" className="textInput" onChange={(event)=>{setAddress(event.target.value);
                     }}></input><br/>

                    <label>Telephone No:<br/>தொலைபேசி இல:</label>
                    <input type="text" onChange={(event)=>{setPhoneno(event.target.value);
                    
                     }}/><br/>
                     <label>Email:<br/>மின்னஞ்சல்:</label>
                     <input type="email" onChange={(event)=>{setEmail(event.target.value);}}></input><br/>
                </div>

                <div className="inputbox2">
                    <div>
                    <h5>INFORMATION ABOUT EDUCATIONAL QUALIFICATION<br/>கல்வித் தகமை தொடர்பான விபரங்கள்</h5>
                    <p></p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                           <p> G.C.E.(A/L)<br/>க.பொ.த.உயர்தரம். year அல்லது அதற்கு முன்னர்முன்னர்</p>
                           <label>Year(வருடம்)<br/></label>
                           <input type="year" className="year" onChange={(event)=>{setYear(event.target.value);
                     }}></input><br/>
                           <label>Section(பிரிவு)<br/></label>
                           <input type="text" onChange={(event)=>{setSection(event.target.value);
                     }}></input><br/>
                           <p>Result(பெறுபேறுகள்)<br/></p>
                           <table className="resutlTable">
                                <thead>
                                   <tr>
                                    <td>Subjects(பாடங்கள்)</td>
                                    <td>Grades(தரம்)</td>
                                    </tr> 
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input type="text" className="subject" onChange={(event)=>{setSubject1(event.target.value);}}/></td>
                                    <td><input type="text" className="grade" onChange={(event)=>{setResult1(event.target.value);}}/></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className="subject" onChange={(event)=>{setSubject2(event.target.value);}}/></td>
                                    <td><input type="text"className="grade"  onChange={(event)=>{setResult2(event.target.value);}}/></td>
                                </tr>
                                <tr>
                                    <td><input type="text"className="subject"onChange={(event)=>{setSubject3(event.target.value);}}/></td>
                                    <td><input type="text" className="grade" onChange={(event)=>{setResult3(event.target.value);}}/></td>
                                </tr>
                                <tr>
                                    <td><p>General English(பொது ஆங்கிலம்ம்)</p></td>
                                    <td ><input type="text"  className="grade"  onChange={(event)=>{setEnglishResult(event.target.value);}}/></td>
                                </tr>
                                <tr>
                                    <td><p>Common General Test(பொது அறிவு)</p></td>
                                    <td> <input type="number" className="grade" onChange={(event)=>{setCommonGeneralTest(event.target.value);}}/></td>
                                </tr>
                                </tbody>
                           </table>

                        </div>
                        <div className="col-5">
                           <p>OTHER QUALIFICATIONS<br/>ஏனைய தகமைகள்</p>  
                             <label>qualification Name<br/>தகமையின்பெயர்</label><br/>
                            <input type="text" onChange={(event)=>{setOtherQalificationName(event.target.value);}}></input><br/>
                            <label>Provided Company<br/>வழங்கிய நிறுவனம்</label><br/>
                            <input  type="text" onChange={(event)=>{setQualificationProvidedCompany(event.target.value);}}></input><br/>
                            <label>The duration of the course<br/>கற்கை நெறியின் கால அளவு</label><br/>
                            <input type="text" onChange={(event)=>{setDurationOfCourse(event.target.value);}}></input><br/>
                            <label>Validity Date<br/>கற்கை நெறியின் செல்லுபடியாகும் திகதி</label><br/>
                            <input type="date" onChange={(event)=>{setValidityDate(event.target.value);}}/><br/>

                        </div>
                        
                    </div>
                    <div className="inputbox3">
                        <h5>Information about career qualification<br/>தொழில் தகமைகள் தொடர்பான விபரங்கள்</h5>
                        <label>Position:<br/>பதவி:</label>
                        <input  type="text" onChange={(event)=>{setPosition(event.target.value);}}></input><br/>
                        <label>Company:<br/>நிறுவனம்:</label>
                        <input type="text" onChange={(event)=>{setCompany(event.target.value);}}></input>
                    </div>
                 <div className="imageUpload">
                 
                     <p> இப்படிவத்தை சமர்ப்பித்த பின் உங்களால் இதனை 
                     பதிவிரக்கம் செய்ய முடியும். இப்படிவத்தை பிரதி எடுத்து கொடுப்பனவு சீட்டினை  இங்கே  ஒட்டவும், கீழே தரப்பட்ட உறுதியுரை வாசித்து, கையொப்பமிட்ட படிவத்தை கழே தரப்பட்ட 
                     முகவரிக்கு முடிவு திகதிக்கு முன் அனுப்பி வைக்கவும். </p>
        
                  </div>
                 <div className="signature">
                    <h5>விண்ணப்பதாரின் உறுதியுரை</h5>
                    <p>இக்கற்கை நெறிக்கான, அனுமதிக்கான தகமை தொடர்பிலான நிபந்தனைகளை வாசித்து விழங்கிக் 
                        கொண்டுள்ளேன் என்பதனையும், இதற்குரிய ஆகக்குறைந்த தகமையை நான் கொண்டுள்ளேன் எனவும், அது தொடர்பாக
                        தேவையான விபரங்களை அளித்துள்ளேன் எனவும் உறுதிப் படுத்துகிறேன். தரப்பட்ட விபரங்களில் ஏதாவது தகவல்கள் 
                        பிழையானவை அல்லது தவறாக கொடுக்கப்பட்டவை என கண்டுபிடிக்கப்படுமிடத்து, எந்நேரத்திலும் பல்கலைகலகத்தால் 
                        எனது பதிவு இரத்து செய்யப்டுமெனவும், பல்கலைக்கழகத்திற்கு என்னால் செலுத்ப்பட்ட எந்தக் கொடுப்பனவும் மீள பெறுவத்ற்கு
                        தகுதியற்றவனாவேன் எனவும் இத்தால் உறுதிபடுத்துகிறேன்.
                    </p>
                    <div className="signature1">
                    <pre>..................                                                            ...............................................</pre>                                   
                    <pre>     Date                                                                                   Applicant Signature              </pre>
                    <pre>     திகதி                                                                    விண்ணப்பதாரின் கையொப்பம்கையொப்பம்</pre>
                    </div>
                    </div>
                </div> 
                <div className="note">
                    <h5>NOTE:</h5>
                    <p>Application should be return to the following address on or before {closingdate}.</p>
                    <pre>
                        Deputy Registrar,</pre>
                        <pre>Center For Open and Distance Learning,</pre>
                        <pre>University of Jaffna,</pre>
                       <pre>Thirunelvely.</pre>
                    
                </div>
                <div className="button_">
                 <Link to={'/Degree'}><button  style={{marginLeft:"400px", backgroundColor:"#0209A7", color:"#ffff", fontSize:"18px" }} onClick={addCandidates}>Submit</button>
              </Link> 
    
                </div> 
            </div>
            </div> 
            </>
        );
}
export default CandidateExamApplicationArts


