import React from "react";
import './Login2.css'
import IMG1 from './component/new.jpg'
// import img from './component/logo2.png'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function Login2() {
    return (
        <>
            <section>
                <div className="imgBx"><img  src={IMG1} alt=""className="gradient" /></div>
                {/* <div className="imgBx"><section alt="" className="gradient" />
                    <div className="container">
                        <div className="wrapper">
                            <div></div>
                            <div></div>
                            <div></div> */}
                            {/* <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div> */}
                            {/* <div></div> */}
                        {/* </div>
                    </div>
                </div> */}



                <div className="contentBx">
                    <div className="fromBx">
                        <h2>Login</h2>
                        <form action="">
                            <div className="inputBx">
                                <span>Username</span>
                                <input type="email" />
                            </div>
                            <div className="inputBx">
                                <span>Password</span>
                                <input type="password" />
                            </div>
                            <div className="remember">
                                <label htmlFor=""><input type="checkbox" /> Remember me</label>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Signin" />
                            </div>
                            <div className="inputBx">
                                <p>Don't have an account?<a href="#"> Sign up</a></p>
                            </div>
                        </form>
                        <h3>Login with social media</h3>
                        <ul className="sci">
                            <li className="Instagram"><a href="#" className="Instagram1"><FaInstagram /></a></li>
                            <li className="Facebook"><a href="#" className="Facebook1" ><FaFacebookF /></a></li>
                            <li className="Twitter"><a href="#" className="Twitter1"><FaTwitter /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Login2;