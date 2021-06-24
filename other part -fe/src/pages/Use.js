import React, { Component } from 'react'
import axios from 'axios';
export class Use extends Component {

          state={
            candidate:[]
        }
            componentDidMount(){
              axios.get(`http://localhost:3000/allCandidates/${41}`)
            .then(res => {
              const candidate = res.data;
              this.setState({ candidate });
              console.log(this.state.candidate);
            })
            }
          render() {
            return (
              <div>
                {
                  this.state.candidate.map( persons=>{
                    <div className="CandidateApplication" style={{fontFamily:"Mukta Malar" , backgroundColor:"#ffff"}}>
                <div className="closeingDate"><p style={{ fontSize:"20px"}}>closing date:</p></div>
                <div className="CandidateApplicationHead">
                <img src="assets/imagas/uojLogo.png" alt="uoj logo"/>
                <div  className="CandidateApplicationHeadP">
                <p>திறந்த மற்றும் தொலைக்கல்வி நிலையம்,யாழ்ப்பாணப் <br/> பல்கலைக்கழகம், இலங்கை<br/>
                CENTER FOR OPEN AND DISTANCE LEARNING (CODL)UNIVERSITY OF JAFFNA</p>
                </div>
                </div>
                <div className="Head1">
                     <p>கலைமாணிணி பட்டப்படிப்பு () (வெளிவாரி) புதிய அனுமதிக்கான தெரிவுப் பரீட்சைக்கான விண்ணப்பம்-
                    <br/>BACHLOR OF ARTS () SELECTION EXAM APPLICATION FOR NEW ADMISSION-</p>    
                </div>
                <div className="inputbox1">
                    <label>Full Name(In Tamil):<br/>முழுப்பெயர்(தமிழில்):</label>
                    <input type="text" className="textInput" value={persons.full_name_tamil}></input><br/>
                    <label>Full Name(In English):<br/>முழுப்பெயர்(ஆங்கிலத்தில்):</label>
                    <input type="text" className="textInput" value={persons.full_name_eng} required></input><br/>

                    <label>NIC No:<br/>தே.அ.அ.இல:</label>
                    <input type="text" maxLength="14" className="NIC" required value={persons.nic}></input><br/>

                    <label >Address (In English) :<br/>(ஆங்கிலத்தில்):</label>
                    <input type="text" className="textInput" required value={persons.address}></input><br/>

                    <label>Telephone No:<br/>தொலைபேசி இல:</label>
                    <input type="text" required value={persons.phone_no}/><br/>
                     <label>Email:<br/>மின்னஞ்சல்:</label>
                     <input type="email" required valu={persons.Email} ></input><br/>
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
                           <input type="year" className="year" value={persons.year}></input><br/>
                           <label>Section(பிரிவு)<br/></label>
                           <input type="text" value={persons.section}></input><br/>
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
                                    <td><input type="text" className="subject" value={persons.subject_1} /></td>
                                    <td><input type="text" className="grade" value={persons.val.result_1}/></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className="subject" value={persons.subject_2}  /></td>
                                    <td><input type="text"className="grade" value={persons.val.result_2}/></td>
                                </tr>
                                <tr>
                                    <td><input type="text"className="subject" value={persons.subject_3} /></td>
                                    <td><input type="text" className="grade" value={persons.val.result_3}/></td>
                                </tr>
                                <tr>
                                    <td><p>General English(பொது ஆங்கிலம்ம்)</p></td>
                                    <td ><input type="text"  className="grade"  value={persons.english_result}/></td>
                                </tr>
                                <tr>
                                    <td><p>Common General Test(பொது அறிவு)</p></td>
                                    <td> <input type="number" className="grade" value={persons.common_general_test_result}/></td>
                                </tr>
                                </tbody>
                           </table>

                        </div>
                        <div className="col-5">
                           <p>OTHER QUALIFICATIONS<br/>ஏனைய தகமைகள்</p>  
                             <label>qualification Name<br/>தகமையின்பெயர்</label><br/>
                            <input type="text" value={persons.other_qualification_name}></input><br/>
                            <label>Provided Company<br/>வழங்கிய நிறுவனம்</label><br/>
                            <input  type="text" value={persons.qualification_provider}></input><br/>
                            <label>The duration of the course<br/>கற்கை நெறியின் கால அளவு</label><br/>
                            <input type="text" vaue={persons.duration_of_course}></input><br/>
                            <label>Validity Date<br/>கற்கை நெறியின் செல்லுபடியாகும் திகதி</label><br/>
                            <input type="date" value={persons.validity_date}/><br/>

                        </div>
                        
                    </div>
                    <div className="inputbox3">
                        <h5>Information about career qualification<br/>தொழில் தகமைகள் தொடர்பான விபரங்கள்</h5>
                        <label>Position:<br/>பதவி:</label>
                        <input  type="text" value={persons.position}></input><br/>
                        <label>Company:<br/>நிறுவனம்:</label>
                        <input type="text" value={persons.company} ></input>
                    </div>
                 <div className="imageUpload">
                     <label style={{margin:"125px"}}>கொடுப்பனவு சீட்டினை  இங்கே  ஒட்டவும் செய்யவும்செய்யவும்</label>
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
                    <p>Application should be return to the following address on or before closingdate.</p>
                    <pre>
                        Deputy Registrar,</pre>
                        <pre>Center For Open and Distance Learning,</pre>
                        <pre>University of Jaffna,</pre>
                       <pre>Thirunelvely.</pre>
                    
                </div>
            </div>

                  })
                }
              </div>
          )
          }
        }

export default Use
