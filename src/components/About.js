import simonDumb from "../img/simonDumb.JPG";
import returnImg from "../img/return.png";
import "./about.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PopulateText extends Component {
  render() {
    return (
      <div className="aboutPageBack">
        <div className="aboutMain">
          <div clasName="center">
            <div className="returnDivAbout">
              <Link to="/" className="linkStyle">
                <img src={returnImg} alt="return" className="returnIconAbout" />
              </Link>
            </div>
          </div>
          <img className="aboutPhoto" src={simonDumb} alt="simonDumb" />
          <p className="aboutText">
            <b>name:</b> simon
          </p>
          <p className="aboutText">
            <b>sex:</b> egg
          </p>
          <p className="aboutText">
            <b>interests:</b> Rotisserie Chicken
          </p>
          <p className="aboutText">
            <b>vertical jump:</b> 5 meters
          </p>
          <p className="aboutText">
            <b>height:</b> 1cm
          </p>
          <p className="aboutText">
            <b>shoe size:</b> 9.5US
          </p>

          <b className="aboutLink">PROJECTS (coming soon eventually)</b>

          <p className="aboutText">
            <b>
              <a className="aboutLink" href="https://instagram.com/simonmahns/">
                insta 1
              </a>{" "}
              |{" "}
              <a
                className="aboutLink"
                href="https://www.instagram.com/simonononononon/"
              >
                insta 2
              </a>{" "}
              |{" "}
              <a className="aboutLink" href="https://twitter.com/907simon">
                twitter
              </a>{" "}
              |{" "}
              <a
                className="aboutLink"
                href="https://github.com/simonmahns/muse"
              >
                code for this site
              </a>
            </b>
          </p>
        </div>
      </div>
    );
  }
}
export default PopulateText;
