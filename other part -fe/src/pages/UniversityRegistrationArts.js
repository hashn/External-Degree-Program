import React, { Component } from 'react'
import './Pagess Css/University_Registration_Arts.css';
import PhoneInput from 'react-phone-number-input/input';
import Email from 'react-email-autocomplete';
import DatePicker from 'react-date-picker';
 class UniversityRegistrationArts extends Component {
    render() {
        return (
            <div className="University_Registration_Arts_">
                <div className="University_Registration_Head">
                <img src="assets/imagas/uojLogo.png" alt="uoj logo"/>
                <div  className="University_Registration_P">

                <p>திறந்த மற்றும் தொலைக்கல்வி நிலையம்,யாழ்ப்பாணப் <br/> பல்கலைக்கழகம், இலங்கை<br/>
                CENTER FOR OPEN AND DISTANCE LEARNING (CODL)UNIVERSITY OF JAFFNA
                <br/>கலைமாணிணி பட்டப்படிப்பு ( YEAR) மாணவர்களை பதிவு செய்வதற்கான படிவம் 
                <br/> FORM FOR REGISTERING BACHLOR OF ARTS (YEAR) STUDENTS</p>   
               </div>
             </div>
             <b>(இறுதிப்பக்கதில் கொடுக்கப்பட்டுள்ள அறிவுறுத்தல்களை வாசித்த பின் இப்படிவத்தை பூரணப்படுத்தவும்)<br/>
             (Please complete the form after reading the instruction given on the last page)</b>
             <div className="URForm">
            <ol>
              <li><label>Full Name : <br/>முழுப்பெயர் (தமிழில் பிறப்புச் சான்றிதழில் உள்ளவாறு) :</label> 
              <input type="text" className="textInput"></input><br/>
              </li><li><label>full Name (in English)<br/>முழுப்பெயர் (ஆங்கிலத்தில்):</label>
               <input type="text" className="textInput"></input><br/>
               </li><li><label>Address :<br/>முகவரி :</label> 
               <input type="text" className="textInput"></input><br/>
               </li><li> <label>Telephone No:<br/>தொலைபேசி இல:</label>
                 <PhoneInput/><br/>
                 <label>Other Telephone No:<br/>ஏனைய தொலைபேசி இல:</label>
                 <PhoneInput/><br/>
                <label>Email ID :<br/>மின்னஞ்சல் முகவரி:</label> 
                 <Email placeholder="Enter email"/><br/>
                 </li><li> <label>NIC No:<br/>தேசிய அடையாள அட்டை இலக்கம் :</label>
                    <input type="text" maxLength="14" className="NIC"></input><br/>
                    </li><li><label>Date Of Birth <br/>பிறந்த திகதி :</label> 
               <DatePicker/><br/>
               </li><li><label>Age as on dd/mm/yyyy <br/>dd/mm/yyyy திகதியன்று வயது :</label> <input type="number"></input>  years (வருடங்கள் )
               </li><li> <label>Currently Residing Divisional Secretary Category: <br/>தற்போது வசிக்கும் பிரதேச செயலர் பிரிவு :</label>
               <input type="text"></input><br/>
               </li><li> <label>National Race:<br/>தேசிய இனம்:</label> 
               <input type="text"></input><br/>
               </li><li> <label>Civil Status (married / Unmarried)<br/>விவாக நிலை(விவாகமானவர் / விவாகமாகாதவர்):</label>
               </li><li> <label>கல்வித்தகமை <br/>
                  என்ன தகமையின் அடிப்படையில் நீர் உமது பதிவைக் கோருகிறீர் : </label><input type="text"></input><br/>
                  மேற்படி வினாவுக்கான விடை க.பொ.த (உயர்தரம்) எனின் (அ) பகுதியையும் வேறு யாதும் எனின் (ஆ) பகுதியையும் நிரப்பவும்
                  (அ) க.பொ.த உயர்தர பரீட்சையின் பெறுபேறுகள் 
                  <label>மூன்று பாடங்கள் ஒரே தடவையில் சித்தியடைந்த வருடம்: </label>
                  <input type="number"></input><br/>
                  <label>Index No: <br/>சுட்டிலக்கம்:</label>
                  <input type="number"></input><br/>
                  <table>
                     <tr>
                         <th></th>
                         <th>Subject(பாடங்கள்)</th>
                         <th>Grad(தரம்)</th>
                     </tr> 
                     <tr>
                         <td>1.</td>
                         <td><input type="text"/></td>
                         <td><input type="text"/></td>
                     </tr>
                     <tr>
                         <td>2.</td>
                         <td><input type="text"/></td>
                         <td><input type="text"/></td>
                     </tr>
                     <tr>
                         <td>3.</td>
                         <td><input type="text"/></td>
                         <td><input type="text"/></td>
                     </tr>
                     <tr>
                         <td>4.</td>
                         <td><input type="text"/></td>
                         <td><input type="text"/></td>
                     </tr>
                  </table>
                 
                  (ஆ) பதிவு கோறுவது தொழிற்தகமை அல்லது வேறுதகைதகைமை \ பரீட்சையின் மூலமெனின் 
                  அதனைக் குறிப்பிடவும்
                 <ul><li><label><br/>Qualification / Exam Name:<br/>தகைகைமை / பரீட்சையின் பெயர் :</label><input type="text"></input>
                 </li><li> <label><br/>Name of the educational institution: <br/>கல்வி நிறுவனத்தின் பெயர் :</label><input type="text"></input>
                 </li><li><label><br/>படித்த பாடநெறியின் கால அளவு :</label><input type="text"></input>
                 </li><li><label><br/>பரீட்சையின் சுட்டிலக்கம் அல்லது சான்றிதல் இல (இருப்பின்):</label><input type="text"></input>
                 </li><li><label><br/>சான்றிதல் செல்லுபடியாகும் திகதி :</label><DatePicker/></li></ul> 

                </li><li> தொழில் நிலை (தொழில் புரிபவர்\தொழிலற்றவர்) :
                  தொழில் புரிபவராயின் அது தொடர்பான விபரங்கள்
                  <ul><li><label><br/>பதவி :</label>
                  </li><li><label><br/>தொழில் தருனர் :</label>
                  </li><li> <label><br/>முகவரி :</label>
                  </li><li><label><br/>சேவைக்காலம் :</label></li></ul>

                   இவ்விண்ணப்பத்தில் கொடுக்கப்பட்ட விபரங்கள் யாவும் உண்மையானதும், சரியானதும் எனவும், நான் 
                   இப்பொழுது இலங்கை அல்லது வெளிநாட்டு பல்கலைக்கழகத்துடன் தொடர்புபடுத்தப்பட்ட  கல்வி நிலையங்களில் 
                   உள்நிலை மாணவராகவோ அல்லது வெளிநிலைத் தேர்வு நாடியாகவோ பதிவு செய்யவில்லை எனவும், இதன் மூலம் உறுதிப்படுத்துகிறேன்.
                   பதிவு செய்வதற்கான எனது விண்ணப்பம் ஏற்றுக்கொள்ளப்படுமிடத்து, இப்பல்கலைக்கழகத்தின் வெளிநிலை மாணவருக்கான ஒழுங்கு விதிகளுக்கு கட்டுப்படுவேன் எனவும்
                   உறுதிப்படுத்துகிறேன். 
                   1.இப்பல்கலைக்கழகத்தின் வெளிநிலை மாணவராக இருக்கும் வரை இப்பல்கலைக்கழகத்தினதோ,
                   வேறு பல்கலைக்கழகத்தினதோ மற்றொரு பட்டப் பரீட்சைக்கு பதிவு செய்து கொள்ளவோ, அமரவோ 
                    அல்லது இலங்கைப் பல்கலைகழக அனுமதி பெறும் நோக்குடன் க.பொ.த உயர்தரப் பரீட்சைக்கு 
                    தோற்றவோ முடியாதென்பதற்கும்,
                    2.பல்கலைக்கழகம் எனது பதிவை என்நேரத்திலும் இரத்து செய்ய அதிகாரம் உடையது என்பதற்கும்
                    இணங்குகிறேன்.
                    திகதி:.......................                                .......................................
                                                                                  விண்ணப்பதாரியின் கையொப்பம
                  </li><li>  உறுதிப்படுத்தல் எனது பாடசாலையில் பழைய மாணவரும் / ஆசிரியரும் / என் அலுவலகத்தில்
                  உத்தியோகத்தரும் / தனிப்பட்ட முறையில் தெரிந்தவரும் ஆகிய மேற்குறிப்பிட்ட பெயருடைய 
                  தேர்வு நாடி இன்று என் முன்னிலையில் கையெழுத்திட்டார் உறுதிப்படுத்துகிறேன் . 
                  உறுதிப்படுத்துபவரின் கையொப்பம் உறுதிப்படுத்துபவரின் பெயர் தொழில் , தராதரம் , 
                  முகவரி அலுவலக முத்திரையுடன் 14. கொடுப்பனவு தொடர்பான விபரம் - கொடுப்பனவு 
                  வழிமுறை : வங்கியாணை | காசு கொடுப்பனவுத் திகதி தொகை ( இலக்கத்தில் ) 
                  : Rs . 18000.00 தொகை ( எழுத்தில் ) : -Eighteen thousand only வங்கிப் பற்றுச்சீட்டு இலக்கம் :
                   வங்கியின் பெயர் , கிளை என்பன தொடர்பான விபரங்களைத் தெளிவாகக் குறிப்பிடவும் .
                   </li>
                   <hr/>
                   </ol>
                  <b>அறிவுறுத்தல்கள்</b><br/>
                  <ul></ul>
                  <li>( கூடு 1 , 2 ) உங்கள் கல்வித்தகமை சான்றிதழ்களில் கொடுக்கப்பட்டுள்ள
                    பெயருக்கும் விண்ணப்பபடிவத்தின் 1ம் , 2ம் கூடுகளில் கொடுக்கப்பட்டுள்ள
                    பெயருக்கும் முரண்பாடுகள இருப்பின் அப்பெயர்கள் அனைத்தும் விண்ணப்பதாரியையே
                    குறிக்கின்றன என்பதற்கு சத்தியக் கடதாசி ஒன்றை விண்ணப்பப்படிவத்துடன் இணைத்தல்
                    வேண்டும். இப்பெயர்களும் பிறப்புச் சான்றிதழில் கொடுக்கப்பட்டுள்ள பெயரும் வேறுபட்டால் ,
                    திருத்தப்பட்ட பிறப்புச் சான்றிதழை அனுப்பி வைக்க வேண்டும் . 
                    திருமணத்தின் காரணமாக பெயர் வேறுபட்டிருப்பின் திருமணச்சான்றிதழின் 
                    அத்தாட்சிப்படுத்தப்பட்ட பிரதியை அனுப்பி வைக்கவேண்டும்.<br/><br/>
        </li><li>  ( கூடு 4 ) மின்னஞ்சல் முகவரி தெளிவாகக் குறிப்பிடப்படல் வேண்டும் . 
                   மின்னஞ்சல் முகவரி இல்லாதோர் புதிதாக உருவாக்கி , விண்ணப்பத்தில் குறிப்பிடல் வேண்டும். <br/><br/>
        </li><li>  ( கூடு 11 ) பதிவுக்கு தேவைப்படும் கல்வித்தகமையைப் பரீசீலிப்பதற்கு பரீட்சை 
                   ஆணையாளரினால் நடாத்தப்பட்ட பரீட்சைகளுக்கு பரீட்சை ஆணையாளராலும் ,
                   வேறு பரீட்சைகளானால் பரீட்சை அதிகாரிகளாலும் வழங்கப்பட்ட சான்றிதழ்களின் மூலப்பிரதி மட்டுமே 
                   ஏற்றுக்கொள்ளப்படும் . விசேட ஏற்பாடுகள் செய்யப்பட்டிருந்தாலன்றி வேறு சான்றிதழ்கள் 
                   ஏற்றுக்கொள்ளப்படமாட்டாது. <br/> <br/>
        </li><li>  ( கூடு-13) விண்ணப்பதாரியின் கையொப்பம் , அரசாங்க கல்வியதிகாரியின் முகாமைக்குட்பட்ட அல்லது
                    அங்கீகாரம் பெற்ற பாடசாலை அதிபர் அல்லது அத்தகைய பாடசாலையின் ஓய்வு பெற்ற அதிபர் ,
                    உமது பகுதியின் கிராம சேவகர் , சமாதான நீதவான் , சத்தியப்பிரமாண அதிகாரி , சட்டத்தரணி அல்லது நொத்தாரிசு ,
                    மத பீடங்களுக்கு  பொறுப்புள்ள மத குருமார் ,  மதிப்புக்குரிய வேறு சமயப் பெரியோர் ஆகியோரில் 
                    யாரேனும் ஒருவரால் உறுதிப்படுத்தப்பட வேண்டும் <br/><br/>
                          
        </li><li>  ( கூடு 14 ) பதிவு செய்கையில் செலுத்தப்பட வேண்டிய முழுக்கட்டணமும் செலுத்திய உறுதிச்சீட்டு
                     விண்ணப்பபடிவத்துடன் இணைக்கப்படல் வேண்டும் . உறுதிச்சீட்டு இணைக்கப்படாத
                     விண்ணப்பப்படிவம் நிராகரிக்கப்படும்.</li>
                                                               

                     </div>   
                     <div className="button_">
                <button className="button_Print">Print</button>
                <button className="button_Download">Download</button>
                <button className="button_Submit">Submit</button> 

                
             </div>
            </div>
        )
    }
}

export default UniversityRegistrationArts
