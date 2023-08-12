import React from "react";
import * as Icon from "react-bootstrap-icons";
import Team1 from "../../assets/AboutUs/Team-1.png";
import Team2 from "../../assets/AboutUs/Team-2.png";
import Team3 from "../../assets/AboutUs/Team-3.png";
import Team4 from "../../assets/AboutUs/Team-4.png";

import '../../styles/team.css';

const MyTeam = () => (
    <>
        <div className="d-flex team-pic justify-content-center">
            <div className="d-flex col-lg-3 flex-column bg-white dialog-div rounded-top-4">
                <p
                    className="lower-banner-title mt-4"
                    style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
                >
                    Our Professional
                </p>
                <p className="text-primary jost-text" style={{ lineHeight: "0rem" }}>
                    Home / Team
                </p>
            </div>
        </div>
        <div className="d-flex flex-column row-gap-5">
        <div className="d-flex justify-content-center column-gap-3 flex-wrap mt-5">
            <img
              src={Team1}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team2}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team3}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team4}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />
          </div> 
          <div className="d-flex justify-content-center column-gap-3 flex-wrap mb-5">
            <img
              src={Team1}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team2}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team3}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />

            <img
              src={Team4}
              className="img-fluid img-con rounded-4"
              alt="Team Member"
            />
          </div>     
        </div>
        
    </>
)

export default MyTeam;