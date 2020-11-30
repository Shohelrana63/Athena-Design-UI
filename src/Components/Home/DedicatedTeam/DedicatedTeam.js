import React from 'react'
import './DedicatedTeam.css';
function DedicatedTeam() {
  const teams = [
    {
      price: 199,
      title: "Basic",
      page: "No",
      day: 10,
    },
    {
      price: 399,
      title: "Preferred",
      page: "4",
      day: 20,
    },
    {
      price: 599,
      title: "Elite",
      page: "8",
      day: 30,
    }
  ];
  return (
    <div>
      <h2 className="mb-5 text-center" style={{ fontFamily: "Yeseva One", color: "#0D052E" }}>Choose Your Dedicated Team</h2>

      <div className="row">
        {
          teams.map((t) => (
            <div className="col-md-4 col-sm-6 col-xs-12 team-br team-text">
              <div className="team-border package-box m-3">
                <h3>${t.price}</h3>
                <small >For {t.title}</small>
                <div className="borders">
                  <p>Homepage</p>
                  <p>No Inner Page</p>
                  <p>Asset file</p>
                  <p>Source file</p>
                  <p>Free Stock Photos</p>
                  <p>{t.day} Days Free support</p>
                  <p>24/7 support</p>
                  <button className="hide-btn order btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DedicatedTeam
