import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Login extends Component {
    render() {
        return (
            <div>
                <div className='login'>
                <div className="close"><a href="/">x</a></div>
                <div className="loginForm">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="submit" value="LOGIN"></input>
                    </form>
                    <div className="bottom-text">
                        <input type="checkbox" name="remeber" defaultChecked="checked" />Remember me
                        <a href="#">Forgot Password ?</a>
                    </div>
                    <div className="regBtn"><a href="/register">Register</a></div>
                    {/* new */}
                    <div className="row">
                    <div className="col"><Link classname="login-page-link" to='/Login/Dashboard'>Admin Page</Link></div>
                    <div className="col"><Link to='/'>Lecturer Page</Link></div>
                    <div className="col"><Link to='/Student'>Student Page</Link></div> 
                    </div>

                </div>
                <img src="assets/imagas/degree.jpg" />
            </div>
            </div>
            
        )
    }
}

export default Login
