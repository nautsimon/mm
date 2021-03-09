import returnImg from "../img/return.png";
import "./about.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PopulateText extends Component {
  render() {
    return (
      <div className="aboutPageBack">
        <div className="aboutMain">
          <div className="center">
            <div className="returnDivAbout">
              <Link to="/" className="linkStyle">
                <img src={returnImg} alt="return" className="returnIconAbout" />
              </Link>
            </div>
          </div>
          <div className="aboutDivOut">
            <div className="aboutDivIn">
              <a className="aboutLink" href="https://www.linkedin.com/in/simonmahns/">
                [linkedin]
              </a>
              <a className="aboutLink" href="https://instagram.com/simonmahns">
                [instagram]
              </a>
              <a className="aboutLink" href="https://github.com/simonmahns/mm">
                [code for this site]
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PopulateText;
