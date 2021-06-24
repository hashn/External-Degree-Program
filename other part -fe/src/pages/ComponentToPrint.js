import React, { Component } from 'react'
import axios from 'axios';
export class ComponentToPrint extends Component {
    
        
    state ={
          candidates:null
    }
             

    componentDidMount(){
        let id=this.props.match.params.id;
        
        axios.get("http://localhost:3001/getDatatoPrint/ranjithamalarselvakumar1996@gmail.com")
        .then(response=>{
            console.log(response)
            this.setState({candidates:response.data})
        })
        .catch(error=>{
            console.log(error)
        })


        }
    

          render() {
            return (
              <div className="container mt-4">
                <div>
            <div className="CandidateApplication_download"  style={{fontFamily:"Mukta Malar" , backgroundColor:"#ffff"}}>
                <div className="closeingDate" ><p style={{ fontSize:"20px"}}>closing date:</p></div>
                <div className="CandidateApplicationHead">
                <img src="assets/imagas/uojLogo.png" alt="uoj logo"/>
                <div className="CandidateApplicationHeadP">
                <p>திறந்த மற்றும் தொலைக்கல்வி நிலையம்,யாழ்ப்பாணப் <br/> பல்கலைக்கழகம், இலங்கை<br/>
                CENTER FOR OPEN AND DISTANCE LEARNING (CODL)UNIVERSITY OF JAFFNA</p>
                </div>
                </div>
                <div className="Head1">
                     <p>கலைமாணி பட்டப்படிப்பு () (வெளிவாரி) புதிய அனுமதிக்கான தெரிவுப் பரீட்சைக்கான விண்ணப்பம்-
                    <br/>BACHLOR OF ARTS () SELECTION EXAM APPLICATION FOR NEW ADMISSION-</p>    
                </div>
                <div className="inputbox1">
                    
                    <p>Full Name(In Tamil):<br/>முழுப்பெயர்(தமிழில்):Malar</p>
                    
                    <p>Full Name(In English):<br/>முழுப்பெயர்(ஆங்கிலத்தில்):Malar</p>
                    
                    <p>NIC No:<br/>தே.அ.அ.இல:967323390v</p>
                    
          
                    <p >Address (In English) :<br/>(ஆங்கிலத்தில்):N0 10, Kandy Rode , Matale</p>
                    
                    <p>Telephone No:<br/>தொலைபேசி இல:0761234567</p>
                    
                     <p>Email:<br/>மின்னஞ்சல்:ranjithamalarselvakumar@gmail.com</p>
                    
                </div>
          
                <div className="inputbox2">
                    <div>
                    <h5>INFORMATION ABOUT EDUCATIONAL QUALIFICATION<br/>கல்வித் தகமை தொடர்பான விபரங்கள்</h5>
                    <p></p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                           <p> G.C.E.(A/L)<br/>க.பொ.த.உயர்தரம். year அல்லது அதற்கு முன்னர்முன்னர்</p>
                           <p>Year(வருடம்):2020<br/></p>
                           
                           <p>Section(பிரிவு):Arts<br/></p>
                           
                           <p>Result(பெறுபேறுகள்)<br/></p>
                           <table>
                                <thead>
                                   <tr>
                                    <td>Subjects(பாடங்கள்)</td>
                                    <td>Grades(தரம்)</td>
                                    </tr> 
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Tamil</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                <td>Logic</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                <td>History</td>
                                    <td>C</td>
                                       </tr>
                                <tr>
                                    <td><p>General English(பொது ஆங்கிலம்ம்)</p></td>
                                    <td >B</td>
                                </tr>
                                <tr>
                                    <td><p>Common General Test(பொது அறிவு)</p></td>
                                    <td> 72</td>
                                </tr>
                                </tbody>
                           </table>
          
                        </div>
                        <div className="col-5" >
                           <p>OTHER QUALIFICATIONS<br/>ஏனைய தகமைகள்</p>  
                             <p>qualification Name<br/>தகமையின்பெயர்</p><br/>
                            
                            <p>Provided Company<br/>வழங்கிய நிறுவனம்: -</p><br/>
                            
                            <p>The duration of the course<br/>கற்கை நெறியின் கால அளவு: -</p><br/>
                            
                            <p>Validity Date<br/>கற்கை நெறியின் செல்லுபடியாகும் திகதி:</p><br/>
                            
          
                        </div>
                        
                    </div>
                    <div className="inputbox3">
                        <h5>Information about career qualification<br/>தொழில் தகமைகள் தொடர்பான விபரங்கள்</h5>
                        <p>Position:<br/>பதவி:-</p>
                        
                        <p>Company:<br/>நிறுவனம்:-</p>
                        
                    </div>
                 <div className="imageUpload">
                 <p> இப்படிவத்தை சமர்ப்பித்த பின் உங்களால் இதனை 
                     பதிவிரக்கம் செய்ய முடியும். இப்படிவத்தை பிரதி எடுத்து கொடுப்பனவு சீட்டினை  இங்கே  ஒட்டவும், கீழே தரப்பட்ட உறுதியுரை வாசித்து, கையொப்பமிட்ட படிவத்தை கழே தரப்பட்ட 
                     முகவரிக்கு முடிவு திகதிக்கு முன் அனுப்பி வைக்கவும். </p>
          
                    </div>
                 <div className="signature" >
                    <h5>விண்ணப்பதாரின் உறுதியுரை</h5>
                    <p>இக்கற்கை நெறிக்கான, அனுமதிக்கான தகமை தொடர்பிலான நிபந்தனைகளை வாசித்து விழங்கிக் 
                        கொண்டுள்ளேன் என்பதனையும், இதற்குரிய ஆகக்குறைந்த தகமையை நான் கொண்டுள்ளேன் எனவும், அது தொடர்பாக
                        தேவையான விபரங்களை அளித்துள்ளேன் எனவும் உறுதிப் படுத்துகிறேன். தரப்பட்ட விபரங்களில் ஏதாவது தகவல்கள் 
                        பிழையானவை அல்லது தவறாக கொடுக்கப்பட்டவை என கண்டுபிடிக்கப்படுமிடத்து, எந்நேரத்திலும் பல்கலைகலகத்தால் 
                        எனது பதிவு இரத்து செய்யப்டுமெனவும், பல்கலைக்கழகத்திற்கு என்னால் செலுத்ப்பட்ட எந்தக் கொடுப்பனவும் மீள பெறுவத்ற்கு
                        தகுதியற்றவனாவேன் எனவும் இத்தால் உறுதிபடுத்துகிறேன்.
                    </p>
                    <div className="signature1">
                    <p>..................                                                           ...............................................</p>                                   
                    <p>     Date                                                                                   Applicant Signature              </p>
                    <p>     திகதி                                                                    விண்ணப்பதாரின் கையொப்பம்கையொப்பம்</p>
                    
                    </div>
                    </div>

                    <div>
                    
                    <p>Application should be return to the following address on or before closingdate.</p>
                    <p>
                        Deputy Registrar,</p>
                        <p>Center For Open and Distance Learning,</p>
                        <p>University of Jaffna,</p>
                       <p>Thirunelvely.</p>
                    
                </div>
                </div> 
                
                
              </div>
              
            </div>
            </div> 
            
          )
          
          }
        }

export default ComponentToPrint
