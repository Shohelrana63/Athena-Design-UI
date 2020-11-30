import React from 'react';
import "./Mailbox.css";

const Mailbox = () => {
    return (
        <div className="mailbox container text-center my-5">
            <div className="mail-title">
                <h2>Get your design right, right now</h2>
                <p> Be the first know our latest offers and updates!</p>
            </div>
            <div className=" row mail-field  mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-8 col-6 pl-5 ">
                    <input type="email" class="form-control border-0 shadow-none" placeholder="Enter your email address"></input>
                </div>
                <div className="col-md-4 col-6">
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>
        </div>

        // </div>
    );
};

export default Mailbox;