import React from "react";
import "./Achievements.css";
import Happy from "../../../image/images/happy.png";
import champ from "../../../image/images/champion.png";
import crazy from "../../../image/images/crazy.png";
import running from "../../../image/images/running.png";

const Achievement = () => {
  const achievements = [
    {
      img: Happy,
      title: "700+",
      text: "Happy Clients",
    },
    {
      img: champ,
      title: "140+",
      text: "Projects Completed",
    },
    {
      img: crazy,
      title: "25+",
      text: "Crazy Minds",
    },
    {
      img: running,
      title: "75+",
      text: "Running Projects",
    },
  ];
  return (
    <div className="container">
      <div>
        <div className="row ">
          <div className="col-md-5 achievement-title">
            <h2>Our Achievements</h2>
            <p className="text-muted achievement-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.{" "}
            </p>
          </div>
          <div className="col-md-7 mt-3 mb-5">
            <div className="row achievement-section">
              {achievements.map((ach) => (
                <div className="col-6">
                  <div className="d-flex achievement-btn m-3 ">
                    <div className="img m-3">
                      <img src={ach.img} alt="" />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <h3>{ach.title}</h3>
                      <p>{ach.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
