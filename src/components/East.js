import React, { Component } from "react";
import Nav from "./Nav";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import days from "./eastDays.js";
import { Element } from "react-scroll";

import returnImg from "../img/return.png";
import { Link } from "react-router-dom";
import eastMap from "../img/eastMap.JPG";

console.log(days);
for (var day = 1; day < days.length + 1; day++) {
  var organizer = 0;
  for (var i = 1; i < days[day - 1].captions.length + 1; i++) {
    days[day - 1].col[organizer].push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/q_auto:eco/v1/east/" +
        "day" +
        day +
        "-" +
        i +
        ".jpg"
    );
    days[day - 1].popUrl.push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/q_auto:eco/v1/east/" +
        "day" +
        day +
        "-" +
        i +
        ".jpg"
    );
    days[day - 1].ogUrl.push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/v1/east/" +
        "day" +
        day +
        "-" +
        i +
        ".jpg"
    );

    if (organizer === 2) {
      organizer = 0;
    } else {
      organizer++;
    }
  }
  console.log(days);
}

class East extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
      img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif",
      caption: "x",
      link: "x",
      width: window.innerWidth,
      height: window.innerHeight,
      popupStyle: {},
      popupO: 0,
      popupVis: "hidden",
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.handlePop = this.handlePop.bind(this);
    this.handlePopClose = this.handlePopClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this._executeAfterModalClose = this._executeAfterModalClose.bind(this);
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
    if (this.state.width < 460) {
      this.setState({
        popupStyle: {
          width: "80%",
          left: "50%",
          marginLeft: "-45%",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto",
        },
      });
    } else {
      this.setState({
        popupStyle: {
          width: "400px",
          left: "50%",
          marginLeft: "-216px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          minHeight: "auto",
        },
      });
    }
  }

  handleMenu(type) {
    this.setState({ filter: type });
    console.log(this.state);
  }
  handlePop(colNum, indexFull, index, dayIndex) {
    this.setState({
      img: days[dayIndex].popUrl[indexFull],
      link: days[dayIndex].col[colNum][index],
      caption: days[dayIndex].captions[indexFull],
      popupO: 1,
      popupVis: "visible",
    });
  }
  handlePopClose() {
    this.setState({
      img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif",
      link: "x",
      caption: "loading...",
      popupO: 0,
      popupVis: "hidden",
    });
  }
  // _executeAfterModalClose() {
  //   this.setState({
  //     img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif",
  //     link: "x"
  //   });
  // }

  render() {
    return (
      <div className="outerBikeDiv">
        <Nav days={days} />
        <div
          style={{
            visibility: this.state.popupVis,
          }}
          className="popupBackDiv"
        >
          <div
            className="popupOverlay"
            onClick={() => this.handlePopClose()}
          ></div>
          <div className="popDiv">
            <div className="popupImgDiv">
              <p className="absolCap">click to view raw img</p>
              <a
                href={this.state.link}
                target="_blank"
                rel="noopener noreferrer"
                className="popupLinkImg"
              >
                <img alt={"img"} src={this.state.img} className="imgPH " />
              </a>
            </div>
            <p className="popopCaption">
              <i>"{this.state.caption}"</i>
            </p>
          </div>
        </div>
        <div className="returnDiv">
          <Link to="/" className="linkStyle">
            <img src={returnImg} alt="return" className="returnIcon" />
          </Link>
        </div>
        <br />
        <p className="center bottomBord">
          <i>An impromptu adventure up the East Coast</i>
          <br />
          <i className="subtitle">Baltimore, MD to Boston, MA and back</i>
          <br />
          <br />
        </p>
        <div className="row bottomBord small">
          <div className="colStat">
            <p className="titleX">Stats</p>
            <p className="mediumSize">
              Total Miles: <i>≈405</i>
            </p>
            <p className="mediumSize">
              Time Elapsed: <i>4 days</i>
            </p>
            <p className="mediumSize">
              Start Date: <i>03/04/2019</i>
            </p>
            <p className="mediumSize">
              Completion Date: <i>03/06/2019</i>
            </p>

            <p className="mediumSize">
              Daily Avg: <i>135 miles</i>
            </p>
            <p className="mediumSize">
              Transportation used: <i>bike, longboard, train, bus, car, boat</i>
            </p>
          </div>
          <div className="colBack rightText">
            <p className="titleX">Background</p>
            <p className="mediumSize">
              Basically my goal for this trek was to visit a couple of friends
              in Boston/Princeton while attempting to train for my big bike
              trip. Because I work full time as an EMT and part time as a waiter
              I didn't really know how far I would get. I didn't have a plan
              besides trying to get as far as possible in a three days and to
              return to Baltimore by 5am by Wednesday 04/07/19 to clock into my
              12 hour EMT shift. Below are some braindumps from each day.
              <br />
            </p>
          </div>
          <div className="filmDiv">
            <br />
            <div className="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir/Baltimore,+Maryland,+USA/Harvard,+MA,+USA/@41.2876549,-77.6156479,6z/data=!4m19!4m18!1m10!1m1!1s0x89c803aed6f483b7:0x44896a84223e758!2m2!1d-76.6121893!2d39.2903848!3m4!1m2!1d-72.3084105!2d41.1437975!3s0x89e8a038418dfa0b:0x9332b2ad7b780dc0!1m5!1m1!1s0x89e3ecb80090cd81:0x4a92bb8ced93430c!2m2!1d-71.5828444!2d42.5000919!3e0"
              >
                <img className="goImg hover" src={eastMap} alt="gofund" />
              </a>
              <p className="center mediumSize">
                <i>General Route</i>
              </p>
            </div>
          </div>
          <br />
        </div>
        <br />
        <p className="center mediumSize">
          <i>
            For navigational ease between dates, click the menu toggle in the
            upper right hand corner.
          </i>
        </p>
        <br /> <br />
        {days.map((day, dayIndex) => {
          return (
            <Element name={day.day} className="dayDiv">
              <p className="center ">{day.day}</p>
              <div className="row center">
                <p className="menuBike">
                  {day.date} | {day.location} | {day.miles} miles
                </p>
              </div>
              <div className="outerBikeDiv">
                <p className="center  smallFont">{day.text}</p>
              </div>
              <div className="photoDiv">
                <div className="tri">
                  {day.col[0].map((address, index) => {
                    return (
                      // <LazyLoad height={200} once>
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(0, index + 2 * index, index, dayIndex)
                        }
                      />

                      // </LazyLoad>
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[1].map((address, index) => {
                    return (
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(
                            1,
                            index + 1 + 2 * index,
                            index,
                            dayIndex
                          )
                        }
                      />
                    );
                  })}
                </div>

                <div className="tri">
                  {day.col[2].map((address, index) => {
                    return (
                      <LazyLoadImage
                        visibleByDefault
                        alt={"img"}
                        effect="black-and-white"
                        placeholderSrc={address}
                        className="photo hover"
                        src={address}
                        onClick={() =>
                          this.handlePop(
                            2,
                            index + 2 + 2 * index,
                            index,
                            dayIndex
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </Element>
          );
        })}
      </div>
    );
  }
}
export default East;
