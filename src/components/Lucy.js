import React, { Component } from "react";
import Nav from "./Nav";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import film from "../img/lucnsi.jpg";
// import comingSoon from "../img/comingSoon.png";
import days from "./roadDay.js";
import { Element } from "react-scroll";

import returnImg from "../img/return.png";
import { Link } from "react-router-dom";
// var popupStyle = {
//   // height: "64vh"
//   // marginTop: "-300px",
//   // marginLeft: "-35%"
// };

console.log(days);
for (var day = 1; day < days.length + 1; day++) {
  var organizer = 0;
  for (var i = 1; i < days[day - 1].captions.length + 1; i++) {
    days[day - 1].col[organizer].push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/q_auto:eco/v1/road/" +
        "day" +
        day +
        "-" +
        i +
        ".jpg"
    );
    days[day - 1].popUrl.push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/q_auto:eco/v1/road/" +
        "day" +
        day +
        "-" +
        i +
        ".jpg"
    );
    days[day - 1].ogUrl.push(
      "https://res.cloudinary.com/dxd8gebv1/image/upload/v1/road/" +
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

class Lucy extends Component {
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
          <i>A Road Trip with Lucy</i>
          <br />
          <i className="subtitle">Seattle, WA to Frederick, MD and more</i>
          <br />
          <br />
        </p>
        <div className="row bottomBord small">
          <div className="colStat">
            <p className="titleX">Stats</p>
            <p className="mediumSize">
              Total Miles: <i>≈ 7,500</i>
            </p>
            <p className="mediumSize">
              Time Elapsed: <i>15 days</i>
            </p>
            <p className="mediumSize">
              Start Date: <i>07/24/2020</i>
            </p>
            <p className="mediumSize">
              Completion Date: <i>08/16/2020</i>
            </p>

            <p className="mediumSize">
              Daily Avg: <i>320 miles</i>
            </p>
            <p className="mediumSize">
              Car Model: <i>Honda Accord LX 1996</i>
            </p>
          </div>
          <div className="colBack rightText">
            <p className="titleX">Background</p>
            <p className="mediumSize">
              Basically, Lucy and I, with the help of her mother and friends,
              got a car from facebook market place for about 1500$. This car was
              purchased in Seattle about two weeks before the start of our trip.
              This car, Ron (its green and has no AC, so we call it serrano
              (like serrano peppers) but ron for short), helped us travel a few
              thousand miles across and around the continental US. Also, this
              car has a manual transmission, so Lucy and I learned how to drive
              stick the day before we left RIP clutch. Below are some pic and
              things.
              <br />
              {/* <br />
              <i>
                Edit (7/31/2019): I still cannot believe that I completed this
                trip. It is still so surreal. I can;t even begin to describe how
                amazing it was to finally be back in Alaska and see all of my
                friends again. I'm just so thankful.
              </i> */}
            </p>
          </div>
          <div className="filmDiv">
            <br />
            <div className="center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="www.cookedcorn.casa"
              >
                <img className="goImg hover" src={film} alt="gofund" />
              </a>
              <p className="center mediumSize">
                <i>^vid recap of the trip (coming soon)^</i>
              </p>
            </div>
            {/* <embed
              height="500px"
              width="100%"
              src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=stem-education-for-ghanaian-students&image=1&coinfo=1&preview=1"
              type="text/html"
            /> */}
          </div>
          <br />
        </div>
        <br />{" "}
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
export default Lucy;
