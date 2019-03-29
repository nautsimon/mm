import React, { Component } from "react";
import suit from "../img/suit.png";
import original from "../img/original.png";
import all from "../img/all.png";
import inspire from "../img/inspire.png";
import returnImg from "../img/return.png";
import PopulateText from "./PopulateText";
import { Link } from "react-router-dom";

class Tex extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 0 };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu(type) {
    this.setState({ filter: type });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="returnDiv">
          <Link to="/" className="linkStyle">
            <img src={returnImg} alt="return" className="returnIcon" />
          </Link>
        </div>
        <p className="pageTitle">text</p>
        <div className="topBar">
          <img
            src={all}
            alt="all"
            className="menuIcon"
            onClick={() => this.handleMenu(0)}
          />
          <a className="subMenu">
            <img
              src={original}
              alt="original"
              class="menuIcon"
              onClick={() => this.handleMenu(1)}
            />
          </a>
          <a className="subMenu">
            <img
              src={inspire}
              alt="inspire"
              class="menuIcon"
              onClick={() => this.handleMenu(2)}
            />
          </a>
        </div>
        <PopulateText filter={this.state.filter} />
      </div>
    );
  }
}
export default Tex;
