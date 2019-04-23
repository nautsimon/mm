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
//   width: "400px",
//   left: "50%",
//   marginLeft: "-216px",
//   textAlign: "center",
//   backgroundColor: "#ffffff",
//   minHeight: "auto"
// };
var content = [
  {
    name: "photo",
    popUrl: [],
    ogUrl: [],
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
    ogUrl: [],
    popUrl: [],
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
  {
    name: "video",
    col: [[], [], []],

    url: [
      "D4pTO071HWY",
      "O6o3W5Y0VBs",
      "fy8_rat_1po",
      "quxjxidM46E",
      "OYtsxw30PQ4",
      "ittkUn-sTXY",
      "3tgVEHaQYWM",
      "mFr0CZzlSxM",
      "RYAuXpsukJQ",
      "-3CjvaFNjJA",
      "CrDblBx0zUA",
      "6IPcP1-vj-g",
      "OZI_YA_zy9E",
      "y17Ts5t2PxQ",
      "5EENGXp9eMU"
    ],
    length: 15
  },
  {
    name: "homegrown",
    popUrl: [],
    ogUrl: [],
    col: [[], [], []],
    url: [1553930821, 1553930822, 1553930821],
    captions: ["whip", "whip", "whip"],
    length: 3
  }
];
for (var type = 0; type < 4; type++) {
  var organizer = 0;
  if (type == 2) {
    for (var i = 0; i < content[type].url.length; i++) {
      content[type].col[organizer].push(
        "https://www.youtube.com/embed/" +
          content[type].url[i] +
          "?modestbranding=1&rel=0"
      );

      if (organizer === 2) {
        organizer = 0;
      } else {
        organizer++;
      }
    }
  } else {
    for (var i = 0; i < content[type].captions.length; i++) {
      content[type].col[organizer].push(
        "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco/v" +
          content[type].url[i] +
          "/" +
          content[type].name +
          "/" +
          content[type].name +
          i +
          ".jpg"
      );
      content[type].popUrl.push(
        "https://res.cloudinary.com/dgmuzb9mm/image/upload/" +
          "q_auto:eco,w_400,c_fill,ar_4:3/v" +
          content[type].url[i] +
          "/" +
          content[type].name +
          "/" +
          content[type].name +
          i +
          ".jpg"
      );
      content[type].ogUrl.push(
        "https://res.cloudinary.com/dgmuzb9mm/image/upload/v" +
          content[type].url[i] +
          "/" +
          content[type].name +
          "/" +
          content[type].name +
          i +
          ".jpg"
      );

      if (organizer === 2) {
        organizer = 0;
      } else {
        organizer++;
      }
    }
  }
}

class Vis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
      img: "x",
      caption: "x",
      link: "x",
      width: window.innerWidth,
      height: window.innerHeight,
      popupStyle: {}
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
    if (this.state.width < 460) {
      this.setState({
        popupStyle: {
          width: "80%",
          left: "50%",
          marginLeft: "-45%",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto"
        }
      });
    } else {
      this.setState({
        popupStyle: {
          width: "400px",
          left: "50%",
          marginLeft: "-216px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto"
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
        img: content[this.state.filter].popUrl[indexFull],
        link: content[this.state.filter].ogUrl[indexFull],
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
              <p className="absol">click to view raw img</p>
              <a href={this.state.link}>
                <img src={this.state.img} alt="photo" className="photoF" />
              </a>
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
          <div className="subMenu">
            <img
              src={photo}
              alt="phot"
              className="menuIcon"
              onClick={() => this.handleMenu(0)}
            />
          </div>
          <div className="subMenu">
            <img
              src={legacy}
              alt="legac"
              className="menuIcon"
              onClick={() => this.handleMenu(1)}
            />
          </div>
          <div className="subMenu">
            <img
              src={video}
              alt="vide"
              className="menuIcon"
              onClick={() => this.handleMenu(2)}
            />
          </div>
          <div className="subMenu">
            <img
              src={original}
              alt="homegrow"
              className="menuIcon"
              onClick={() => this.handleMenu(3)}
            />
          </div>
        </div>
        <p className="center">
          <i>{content[this.state.filter].name}</i>
        </p>
        <div className="photoDiv">
          <div className="tri">
            {content[this.state.filter].col[0].map((address, index) => {
              if (this.state.filter === 2) {
                return (
                  <LazyLoad height={200} once>
                    <iframe
                      title="yt"
                      className="yt"
                      width="100%"
                      height="300px"
                      src={address}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </LazyLoad>
                );
              } else {
                return (
                  <LazyLoad height={200} once>
                    <img
                      src={address}
                      alt="img"
                      onClick={() =>
                        this.handlePop(0, index + 2 * index, index)
                      }
                      className="photo hover"
                    />
                  </LazyLoad>
                );
              }
            })}
          </div>

          <div className="tri">
            {content[this.state.filter].col[1].map((address, index) => {
              if (this.state.filter === 2) {
                return (
                  <LazyLoad height={200} once>
                    <iframe
                      title="yt"
                      className="yt"
                      width="100%"
                      height="300px"
                      src={address}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </LazyLoad>
                );
              } else {
                return (
                  <LazyLoad height={200} once>
                    <img
                      src={address}
                      alt="img"
                      className="photo hover"
                      onClick={() =>
                        this.handlePop(1, index + 1 + 2 * index, index)
                      }
                    />
                  </LazyLoad>
                );
              }
            })}
          </div>

          <div className="tri">
            {content[this.state.filter].col[2].map((address, index) => {
              if (this.state.filter === 2) {
                return (
                  <LazyLoad height={200} once>
                    <iframe
                      title="yt"
                      className="yt"
                      width="100%"
                      height="300px"
                      src={address}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </LazyLoad>
                );
              } else {
                return (
                  <LazyLoad height={200} once>
                    <img
                      src={address}
                      alt="img"
                      className="photo hover"
                      onClick={() =>
                        this.handlePop(2, index + 2 + 2 * index, index)
                      }
                    />
                  </LazyLoad>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Vis;
