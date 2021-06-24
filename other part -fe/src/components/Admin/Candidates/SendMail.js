import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { useParams } from 'react-router-dom';
function SendMail() {
  const {id}=useParams();
 
  
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_cwukbg1', 'template_yyr5t7z', ".contact-form", 'user_wqX9ZhYMW0pgUk9kz4HmO')
          .then((result) => {
            alert("Mali Status"+result.text);
          }, (error) => {
            alert("Mali Status"+error.text);
          });
      }
    
      return (
        <div className="contaniner border"
        style={{
          margin:"50px",
          marginLeft:"300px",
          width:"50%",
          backgroundColor:"#D5DBDB ",
          backgroundPosition:"center",
          backgroundSize:"cover"
        }} >
        <h1 style={{marginTop:"25px", alignItems:"center",marginLeft:"30px" ,fontSize:"25px"}}>SEND EMAIL TO  CANDIDATES</h1>
        <form className="contact-form"  style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label style={{marginLeft:"50px"}}>Name:Center For Open And Distance Learning</label>
            <input type="hidden" name="name" value="Center For Open And Distance Learning" /><br/>
            <label style={{marginLeft:"50px"}} >Email:{id}</label>
            <input type="hidden" name="email" value={id} /><br/>
            <label style={{marginLeft:"150px"}} > Enter Message</label>
            <textarea name="message"  className="form-control"/>
            <input type="submit" style={{margin:"10px",marginLeft:"100px",backgroundColor:"#1B4F72",color:"#ffff", width:"200px",borderRadius:"25px"}} value="Send" />
        </form>

        </div>
      );
}

export default SendMail
