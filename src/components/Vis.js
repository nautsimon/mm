import React, { Component } from "react";

import photo from "../img/picture.png";
import legacy from "../img/legacy.png";
import video from "../img/movie.png";
import SkyLight from "react-skylight";

import LazyLoad from "react-lazyload";
import original from "../img/original.png";
import returnImg from "../img/return.png";
import { Link } from "react-router-dom";
// var popupStyle = {
//   // height: "64vh"
//   // marginTop: "-300px",
//   // marginLeft: "-35%"
// };
var content = [
  {
    name: "photo",
    col: [[], [], []],
    url: [
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553831078,
      1553927855,
      1553831077
    ],
    captions: [
      "tokyo train",
      "visuals",
      "lights",
      "new london",
      "aye nuts",
      "orient point",
      "bro sending it",
      "ben",
      "ilia",
      "somewhere in the upper chesapeake",
      "bridge",
      "djaskdhj",
      "jumpin bike",
      "stanced up",
      "cool",
      "cool",
      "bro",
      "sky",
      "poo",
      "baltimore sky",
      "bro",
      "rip",
      "000 washington blvd",
      "goof",
      "cool",
      "fam",
      "jumpin",
      "aye dawg you looking real cute today",
      "nerd shit",
      "baltimore",
      "ambo",
      "fam",
      "snow",
      "nyc"
    ],
    length: 34
  },
  {
    name: "legacy",
    col: [[], [], []],
    url: [
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553935199,
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553934050,
      1553935199,
      1553934050,
      1553934050,
      1553934050,
      1553934050
    ],
    captions: [
      "pole",
      "sled",
      "ib",
      "dawg",
      "branch",
      "bros",
      "bros",
      "bros",
      "emt class",
      "gay",
      "tree",
      "snow",
      "gay",
      "rip",
      "hbd",
      "crabs",
      "dremmeling in the rain"
    ],
    length: 17
  },
  { name: "video", col: [[], [], []], length: 0 },
  {
    name: "homegrown",
    col: [[], [], []],
    url: [1553930821, 1553930822, 1553930821],
    captions: ["whip", "whip", "whip"],
    length: 3
  }
];
for (var type = 0; type < 4; type++) {
  var organizer = 0;
  for (var i = 0; i < content[type].length; i++) {
    content[type].col[organizer].push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/v" +
        content[type].url[i] +
        "/" +
        content[type].name +
        "/" +
        content[type].name +
        i +
        ".jpg"
    );
    console.log(content[type].col[organizer]);
    if (organizer === 2) {
      organizer = 0;
    } else {
      organizer++;
    }
  }
}
const align = -50;
class Vis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
      img: "x",
      caption: "x",
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();

    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeights },
      this.updateStyle()
    );
  }

  updateStyle() {
    console.log(this.state.width);
    if (this.state.width < 880) {
      this.setState({
        popupStyle: {
          width: "80%",
          marginLeft: "-42vw",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto",
          top: 0,
          marginTop: "15%"
        }
      });
    } else {
      this.setState({
        popupStyle: {
          width: "45%",
          marginLeft: "-24vw",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto",
          top: 0,
          marginTop: "5%"
        }
      });
    }
  }

  handleMenu(type) {
    this.setState({ filter: type });
    console.log(this.state);
  }
  handlePop(colNum, indexFull, index) {
    console.log("indexFull: ", indexFull);
    console.log("index: ", index);
    console.log("colNum: ", colNum);
    this.setState(
      {
        img: content[this.state.filter].col[colNum][index],
        caption: content[this.state.filter].captions[indexFull]
      },
      this.phoPop.show()
    );
  }
  render() {
    return (
      <div>
        <SkyLight
          closeButtonStyle={{ color: "#000" }}
          dialogStyles={this.state.popupStyle}
          hideOnOverlayClicked
          ref={ref => (this.phoPop = ref)}
        >
          <div className="popDiv">
            <div>
              <img src={this.state.img} alt="photo" className="photoF" />
              <p>
                <i>"{this.state.caption}"</i>
              </p>
            </div>
          </div>
        </SkyLight>

        <div className="returnDiv">
          <Link to="/" className="linkStyle">
            <img src={returnImg} alt="return" className="returnIcon" />
          </Link>
        </div>
        <br />
        <div className="topBar">
          <a className="subMenu">
            <img
              src={photo}
              alt="photo"
              className="menuIcon"
              onClick={() => this.handleMenu(0)}
            />
          </a>
          <a className="subMenu">
            <img
              src={legacy}
              alt="legacy"
              className="menuIcon"
              onClick={() => this.handleMenu(1)}
            />
          </a>
          <a className="subMenu">
            <img
              src={video}
              alt="video"
              className="menuIcon"
              onClick={() => this.handleMenu(2)}
            />
          </a>
          <a className="subMenu">
            <img
              src={original}
              alt="homegrown"
              className="menuIcon"
              onClick={() => this.handleMenu(3)}
            />
          </a>
        </div>
        <p className="center">
          <i>{content[this.state.filter].name}</i>
        </p>
        <div className="photoDiv">
          <div className="tri">
            {content[this.state.filter].col[0].map((address, index) => {
              return (
                <LazyLoad height={200} once>
                  <img
                    src={address}
                    onClick={() => this.handlePop(0, index + 2 * index, index)}
                    className="photo hover"
                  />
                </LazyLoad>
              );
            })}
          </div>

          <div className="tri">
            {content[this.state.filter].col[1].map((address, index) => {
              return (
                <LazyLoad height={200} once>
                  <img
                    src={address}
                    className="photo hover"
                    onClick={() =>
                      this.handlePop(1, index + 1 + 2 * index, index)
                    }
                  />
                </LazyLoad>
              );
            })}
          </div>

          <div className="tri">
            {content[this.state.filter].col[2].map((address, index) => {
              return (
                <LazyLoad height={200} once>
                  <img
                    src={address}
                    className="photo hover"
                    onClick={() =>
                      this.handlePop(2, index + 2 + 2 * index, index)
                    }
                  />
                </LazyLoad>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Vis;
