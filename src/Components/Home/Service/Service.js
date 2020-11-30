import React from 'react';
import experience from "../../../image/images/experience.png";
import interface1 from "../../../image/images/interface.png";
import prototyping from "../../../image/images/prototyping.png";
import illustration from "../../../image/images/illustration.png";
import "./Service.css";
const Service = () => {
    const servicesData = [
        {
            title: "Experience Design",
            description: "The point of using Experience Design is that it has a more-orless normal. Grab it with free of 30% discount.",
            img: experience,
            id: 1,
        },
        {
            title: "Interface Design",
            description: "We are always dedicated to out interface design. feel free to know any kind of specification.",
            img: interface1,
            id: 2,
        },
        {
            title: "Prototyping",
            description: "We are always dedicated to out prototyping Agent. feel free to know any kind of specification.",
            img: prototyping,
            id: 3,
        },
        {
            title: "Illustration",
            description: "We are always dedicated to out illustration Agent. feel free to know any kind of specification.",
            img: illustration,
            id: 4,
        }
    ]
    return (
        <div className="container service my-5">
            <div className="service-title text-center my-5">
                <h3>What we do</h3>
                <p>Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our Strength.</p>
            </div>
            <div className="row text-center service-bg">
                {
                    servicesData.map(Service =>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2" >
                            <div className="service-card">
                                <img src={Service.img} className="card-img-top" style={{ width: '30%' }} alt="..." />
                                <div className="service-description">
                                    <h5 className="">{Service.title}</h5>
                                    <p className="">{Service.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Service;