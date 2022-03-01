import React from "react";
import './Signup.css';

function Signup(){
    return(
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
                        <div className="form ">
                            <h2>Sign up</h2>
                            <p className="requ">Please sign up to continue</p>
                            <form>
                                <div className="input__box">
                                    {/* <label htmlFor="name"><i class="zmdi zmdi-account"></i></label> */}
                                    <i class="zmdi zmdi-account "></i>
                                    {/* <i class="zmdi zmdi-flower-alt zmdi-hc-2x"></i>  */}
                                    <input  type="text" name="name" placeholder="Your Name" autoComplete="off" required data-validation-required-message="Please enter your name."/>
                                </div>
                                <div className="input__box">
                                <i class="zmdi zmdi-email"></i>
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="input__box">
                                <i class="zmdi zmdi-phone-in-talk"></i>
                                    <input type="text" placeholder="Mobile Number" autoComplete="off" />
                                </div>
                                <div className="input__box">
                                <i class="zmdi zmdi-slideshow"></i>
                                    <input type="text" placeholder="Your Profession" />
                                </div>
                                {/* <div className="input__box">
                                <i class="zmdi zmdi-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input__box">
                                <i class="zmdi zmdi-lock-outline"></i>
                                    <input type="password" placeholder="Confirm your password" />
                                </div> */}
                                <div className="input__box">
                                    <input type="submit" value="Register" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    );
}
export default Signup;