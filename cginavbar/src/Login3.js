import React from "react";
import './Login3.css'
import { FaInstagram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Login3() {
    return (
        <>

            <section className="gradient" >
                <div className="colour "></div>
                <div className="colour"></div>
                <div className="colour"></div>
                <div class="box">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="container">
                        <div className="form">
                            <h2>Login</h2>
                            <p className="requ">Please sign in to continue</p>
                            <form>
                                <div className="input__box">
                                <i class="zmdi zmdi-account"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input__box">
                                <i class="zmdi zmdi-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input__box">
                                    <input type="submit" value="Login" />
                                </div>
                                {/* <h3>Login with social media</h3>
                                <ul className="sci">
                                    <li className="Linkedin"><a href="https:/linkedin.com" className="Linkedin1" target="_blank"><FaLinkedin/></a></li>
                                    <li className="Facebook"><a href="https:/facebook.com" className="Facebook1"target="_blank" ><FaFacebookF /></a></li>
                                    <li className="Instagram"><a href="https:/instagram.com" className="Instagram1"target="_blank"><FaInstagram /></a></li>
                                    <li className="Twitter"><a href="https:/twitter.com" className="Twitter1"target="_blank"><FaTwitter /></a></li>
                                </ul>
                                <p className="forget FoP">Forgot Password? <a href="#"> Click Here</a></p>
                                <p className="forget FoP1">Don't have an account? <a href="#"> Sign Up</a></p>  */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
export default Login3;