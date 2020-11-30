import React from 'react';
import contact from "../../../image/images/contact.png";
import "./Contact.css";
const Contact = () => {
    return (
        <div className=" container contact-section my-5 py-5">
            <div className="row ">
                <div className="col-md-6">
                    <img className="img-fluid" src={contact} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center p-5 running-project-desc">
                    <div className="">
                        <h2 className="contact-title">STAY RUNNING & Project</h2>
                        <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                        <button className="btn contact-btn">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;