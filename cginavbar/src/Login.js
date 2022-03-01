import React from "react";
import './Login.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Login() {
    return (
       <>
       
        <div className="containers" id="containers">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href=""className="social"><i><FaInstagram/></i></a>
                        <a href=""className="social"><i><FaFacebookF/></i></a>
                        <a href=""className="social"><i><FaTwitter/></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text"placeholder="Name"></input>
                    <input type="email"placeholder="email"></input>
                    <input type="password"placeholder="password"></input>
                    <button>Singn Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
            <form action="#">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href=""className="social"><i><FaInstagram/></i></a>
                        <a href=""className="social"><i><FaFacebookF/></i></a>
                        <a href=""className="social"><i><FaTwitter/></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email"placeholder="email"></input>
                    <input type="password"placeholder="password"></input>
                    <a href="Forget your Password"></a>
                    <button>Singn In</button>
                </form>

            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome to CGI</h1>
                        <p>Lorem ipsum dolor sit amet elit.  cum accusamus suscipit!</p>
                        <button className="press" id="signIn">Sigen in</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome to CGIIIIIIIIIIIIIIII</h1>
                        <p> AmitLorem ipsum dolor sit amet consectetur adipisicing elit.  cum accusamus suscipit!</p>
                        <button className="press" id="signUp">Sigen in</button>
                    </div>
                </div>
            </div>
        </div>

        
            
        
        
        </> 
                    
            
          
    );
}
export default Login;