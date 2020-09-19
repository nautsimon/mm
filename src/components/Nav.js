import "./nav.css";

import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundC: "rgba(0, 0, 0, 0.0)", isOpen: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY < 75) {
      this.setState({ backgroundC: "rgba(0, 0, 0, 0.0)" });
    } else if (window.scrollY >= 75) {
      this.setState({ backgroundC: "rgba(0, 0, 0, 0.5)" });
    }
  }
  handleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleLink() {
    this.setState({ isOpen: false });
  }
  render() {
    const styles = {
      container: {
        position: "fixed",
        top: 0,
        right: this.state.isOpen ? "0px" : "-100%",
        width: "100%",
        height: "35%",
        display: "flex",
        flexDirection: "column",
        background: "#e7a2a4",
        transition: "right 0.3s ease",
        zIndex: 20,
      },
      overlay: {
        background: "#000000",
        opacity: 0.1,
        top: "35%",
        left: "0",
        position: "fixed",
        height: "100%",
        width: this.state.isOpen ? "100% " : "0px",
        zIndex: 50,
        transition: "width 0.3s ease",
      },
    };
    return (
      <div>
        <div style={styles.overlay} onClick={() => this.handleLink()} />
        <div style={styles.container} className="centerH">
          <div className="botMenu row centerH">
            {this.props.days.map((day) => {
              return (
                <ScrollLink
                  to={day.day}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="linky"
                >
                  <p className=" menuBike">[{day.day}]</p>
                </ScrollLink>
              );
            })}
          </div>
        </div>
        <div
          className="header"
          style={{ backgroundColor: this.state.backgroundC }}
        >
          <div className="menuImg">
            <HamburgerMenu
              isOpen={this.state.isOpen}
              menuClicked={this.handleOpen.bind(this)}
              width={15}
              height={20}
              rotate={0}
              color="black"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
