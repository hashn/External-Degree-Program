import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Notice from './Notice'; 
import './AdminCSS/Dashboard.css';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
     
    render() {
        return (
            
                <div className="wrapper_1">
                    <div>
                    <Sidebar/>
                    </div>
                   
                   <div className="container mt-4 border"
                   style={{
                       margin:"100px",
                       width:"600px",
                       textAlign:"center",
                       backgroundColor:"#F0FFF0"
                       
                       
                   }}>
                   <Notice/>
                   </div>
                  
                    <div className=" mt-4 d-flex align-items-end flex-column">
                            
                           <Link to='/OpenAndCloseApplicationForm'><button type="button" className="btn btn-info">OPEN AND CLOSE APPLICATIONS</button></Link>
                    </div>
                </div>
             
        )
    }
}

export default Dashboard
