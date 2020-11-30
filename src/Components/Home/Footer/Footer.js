import React from 'react';
import logo from "../../../image/images/logo.png";
import facebook from "../../../image/images/facebook.png";
import twitter from "../../../image/images/twitter.png";
import linkedin from "../../../image/images/linkedin.png";
import dribble from "../../../image/images/dribbble.png";
import beicon from "../../../image/images/beicon.png";


import "./Footer.css";
const Footer = () => {
    return (
        // <div className="container footer">
        //     <div className="row ">
        //         <div className="col-md-6 ">
        //             <img style={{ height: "117px", width: "171px" }} src={logo} alt="" />
        //             <div className="mt-4 mb-4 icon d-flex justify-content-center ">
        //                 <img className="mr-5" src={facebook} alt="" />
        //                 <img className="mr-5" src={twitter} alt="" />
        //                 <img className="mr-5" src={linkedin} alt="" />
        //                 <img className="mr-5" src={dribble} alt="" />
        //                 <img className="mr-5" src={beicon} alt="" />
        //             </div>
        //         </div>

        //         <div className="col-md-2 mt-4 text-center  ">
        //             <p>Features</p>
        //             <p>Enterprise</p>
        //             <p>Pricing</p>
        //         </div>
        //         <div className="col-md-2 mt-4 text-center ">
        //             <p>Blog</p>
        //             <p>Help Center</p>
        //             <p>Contact Us</p>
        //             <p>Status</p>
        //         </div>
        //         <div className="col-md-2 mt-4 text-center ">
        //             <p>About Us</p>
        //             <p>Terms of Service</p>
        //             <p>Security</p>
        //             <p>Login</p>
        //         </div>
        //     </div>

        // </div>
        <footer className="row bd-highlight" id="footer">
            <div className="col-md-5">
                <div className="d-flex bd-highlight d-flex justify-content-center Milions mb-4">
                    <img alt="img" className="foterLogo" src={logo}></img>
                </div>
                <div className="footer-list-icon d-flex justify-content-center">
                    <li><img src={facebook} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={twitter} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={linkedin} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={dribble} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={beicon} alt="img" className="icon facebook_Icon" /></li>
                </div>
            </div>
            <div className="col-md-7 bd-highlight meno-link p-5">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Features</a><br />
                        <a className="" href="/">Enterprise</a><br />
                        <a className="" href="/">Pricing</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Blog</a><br />
                        <a className="" href="/">Help Center</a><br />
                        <a className="" href="/">Contact Us</a><br />
                        <a className="" href="/">Status</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">About Us</a><br />
                        <a className="" href="/">Terms of Service</a><br />
                        <a className="" href="/">Security</a><br />
                        <a className="" href="/">Login</a><br />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;