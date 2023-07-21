import React from "react";
import Banner from "../../assets/AboutUs/Banner.jpg";
import Quote from "../../assets/AboutUs/Quotes.png";
import Img1 from "../../assets/AboutUs/Img-1.png";
import { GrLinkNext } from "react-icons/gr";
import Img2 from "../../assets/AboutUs/Img-2.png";
import Team1 from "../../assets/AboutUs/Team-1.png";
import Team2 from "../../assets/AboutUs/Team-2.png";
import Team3 from "../../assets/AboutUs/Team-3.png";
import Team4 from "../../assets/AboutUs/Team-4.png";

import "../../styles/AboutUs.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const AboutUs = () => {
  {
    document.title = "About Us";
  }
  return (
    <div>
      {/* <Header /> */}
      <img src={Banner} className="img-fluid "></img>
      <div className="container-fluid bg-white">
        <div className="row my-5 py-5">
          <div className="col-3"></div>
          <div className="col-6">
            <img src={Quote} className="img-fluid"></img>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <p className="aboutUS-content-head">What We Do</p>
            <p className="aboutUS-content py-1">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button className="btn btn-warning btn-txt p-3">
              Our Concept <GrLinkNext />
            </button>
          </div>
          <div className="col-4">
            <img src={Img1} alt="" className="img-fluid" />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4 py-5 my-3">
            <img src={Img2} alt="" className="img-fluid" />
          </div>
          <div className="col-4 py-5 my-3 px-4">
            <p className="aboutUS-content-head">The End Result</p>
            <p className="aboutUS-content py-1">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button className="btn btn-warning btn-txt p-3">
              Our Concept <GrLinkNext />
            </button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="team">
        <div className="container-fluid bg-ash text-center">
          <div className="row row-gap-3">&nbsp;</div>
          <div className="row justify-content-center pt-5 mt-5 row-gap-3">
            <div className="col-4">
              <p className="aboutUS-content-head">
                What the People Thinks About Us
              </p>
            </div>
          </div>
          <div className="row ">&nbsp;</div>

          <div className="d-flex justify-content-center column-gap-3 flex-wrap">
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
          <div className="row ">&nbsp;</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
