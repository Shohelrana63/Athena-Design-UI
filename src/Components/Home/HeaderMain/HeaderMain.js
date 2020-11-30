import React from 'react';
import header from "../../../image/images/header.png";
import "./HeaderMain.css";
const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row my-5 header-bg">
                <div className="col-md-6">
                    <h1 className="header-title">Floren agency</h1>
                    <p className="title-details">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="btn text-white font-weight-bold">See Pricing</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;