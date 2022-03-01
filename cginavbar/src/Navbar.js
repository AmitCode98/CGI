import React from 'react'
import './index.css';
import IMG from './component/logo.png'
import IMG1 from './component/email_campaign_monochromatic.svg';

// import IMG2 from './component/logo2.png'

export const Navbar = () => {
    return (
        <>
                             {/* navbar desigen */}
            <section className='navbar-bg gradient'>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <img src={IMG} class="img-fluid"></img>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link color" href="#">About</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link color" href="#">Services</a>
                                </li>
                                <li class="nav-item  targeT">
                                    <a class="nav-link color" href="#">FeedBack</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
                                <button class="btn  btn-style btn-style2" type="submit">Login</button>
                                {/* <button class="btn  btn-style btn-style2" type="submit">About</button> */}
                                <button class="btn  btn-style" type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
                       {/* box Animation */}
            <header className="page-header gradient">
            <div className="container">
                <div className="wrapper">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> 
                                 {/* landingpage desigen */}
                <div className="container pt-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6">
                            <h2><span className='C'>C</span><span>onfederation</span> <span>of</span> <span className='G'>G</span><span>lobal</span> <span className='I'>I</span>nnovators</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore minima, quisquam totam adipisci ab.</p>
                            {/* <button type="button" class="btn btn-outline-primary">Read More</button> */}
                            <button type="button" class="btn btn1 btn-outline-secondary">Read More</button>
                            <button type="button" class="btn btn2 btn-outline-warning ms-2">About</button>
                        </div>
                        <div className="col-md-5"><img src={IMG1} alt="Header Img"></img></div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,181.3C320,181,400,139,480,138.7C560,139,640,181,720,208C800,235,880,245,960,218.7C1040,192,1120,128,1200,106.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </header>
        </>

    )
}
export default Navbar;


                  






           






