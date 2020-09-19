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
          <div className="aboutDivOut">
            <div className="aboutDivIn">
              <a className="aboutLink" href="https://simonmahns.tech">
                [my actual website]
              </a>
              <a className="aboutLink" href="https://instagram.com/simonmahns">
                [instagram]
              </a>
              <a className="aboutLink" href="https://github.com/simonmahns/mm">
                [code for this site]
              </a>
            </div>
          </div>
          {/* <img className="aboutPhoto" src={simonDumb} alt="simonDumb" />
          <p className="aboutText">
            <b>welcome to my site</b>
          </p>

          <p className="aboutText">
            <b>
              <a className="aboutLink" href="https://instagram.com/simonmahns/">
                [insta 1]
              </a>
              <a className="aboutLink" href="https://simonmahns.tech">
                [my actual website]
              </a>
              <a className="aboutLink" href="https://github.com/simonmahns/mm">
                [code for this site]
              </a>
            </b>
          </p> */}
        </div>
      </div>
    );
  }
}
export default PopulateText;
