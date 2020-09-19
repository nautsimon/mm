import React, { Component } from "react";
import Nav from "./Nav";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import leg1 from "../img/leg1.png";
import leg2 from "../img/leg2.png";
import leg3 from "../img/leg3.png";
import leg4 from "../img/leg4.png";
import film from "../img/path.PNG";
// import comingSoon from "../img/comingSoon.png";
import days from "./days.js";
import { Element } from "react-scroll";

import returnImg from "../img/return.png";
import { Link } from "react-router-dom";
// var popupStyle = {
//   // height: "64vh"
//   // marginTop: "-300px",
//   // marginLeft: "-35%"
// };

for (var day = 0; day < days.length; day++) {
  var organizer = 0;
  for (var i = 0; i < days[day].captions.length; i++) {
    days[day].col[organizer].push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco/v1/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].popUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/q_auto:eco/v1/bike/" +
        days[day].day +
        "-" +
        i +
        ".jpg"
    );
    days[day].ogUrl.push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/v1/bike/" +
        days[day].day +
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
}

class Vis extends Component {
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
          <i>A Bike Trip to Alaska</i>
          <br />
          <i className="subtitle">Baltimore, MD to Anchorage, AK</i>
          <br />
          <br />
        </p>
        <div className="row bottomBord small">
          <div className="colStat">
            <p className="titleX">Stats</p>
            <p className="mediumSize">
              Total Miles: <i>≈ 4,500</i>
            </p>
            <p className="mediumSize">
              Miles Left: <i>0</i>
            </p>
            <p className="mediumSize">
              Time Elapsed: <i>74 days</i>
            </p>
            <p className="mediumSize">
              Start Date: <i>04/04/2019</i>
            </p>
            <p className="mediumSize">
              Completion Date: <i>06/16/2019</i>
            </p>

            <p className="mediumSize">
              Daily Avg: <i>91 miles</i>
            </p>
            <p className="mediumSize">
              Bike Model: <i>Fuji Touring</i>
            </p>
          </div>
          <div className="colBack rightText">
            <p className="titleX">Background/Cause</p>
            <p className="mediumSize">
              I was born and raised in Anchorage Alaska. When I was 15 my family
              packed up all of our belongings into a big uhaul and a van and
              drove down to Maryland. I drove for a portion of this trek, and
              while doing so I continuously noticed myself wanting to pull over
              and check out a mountain, a building, roadside attraction, etc. It
              was then when my idea to “Bike to Alaska” manifested. Initially a
              joke, I can remember telling friends about my “big plans”, of
              course no body believed me, even myself. However, when senior year
              drew to a close, I began investigating the options of doing a gap
              year. I felt as if this ethereal time between high school and
              college could be the perfect time, if not the only time, I could
              embark on such an adventure. So, when I was given an option to
              defer admission at the University of Chicago for a year and
              matriculate in the fall of 2019, I took it. <br /> <br />
              For the first 6 months of my gap year I lived alone in Baltimore
              as my parents and family moved to Tokyo last July. I worked as an
              EMT and a waiter in a Turkish restaurant (although I left my
              waiter job after a few months to just overtime at my EMT job) to
              pay bills, buy food, and most importantly, save for this bike
              ride. When April finally rolled around I sold all my furniture,
              packed my things, and hopped onto my bike.
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
                href="https://www.google.com/maps/dir/Baltimore,+Maryland,+USA/Frederick,+MD,+USA/University+of+Pittsburgh/Toledo,+OH,+USA/Case+Western+Reserve+University/Anchorage,+Alaska,+USA/@37.7607724,-135.8525419,3z/data=!4m73!4m72!1m5!1m1!1s0x89c803aed6f483b7:0x44896a84223e758!2m2!1d-76.6121893!2d39.2903848!1m5!1m1!1s0x89c9c50c8cbdaee3:0xda6247bdbd111c99!2m2!1d-77.4105409!2d39.4142688!1m10!1m1!1s0x8834f22bd95af11f:0x52e119b60d23ad0f!2m2!1d-79.960835!2d40.4443533!3m4!1m2!1d-81.581518!2d41.4949292!3s0x8830fc5fd406856b:0x15e566fbbe930950!1m5!1m1!1s0x883b872dfc1e4e79:0x7c3cc89f453ac345!2m2!1d-83.5378674!2d41.6528052!1m35!1m1!1s0x8830fb893658122d:0x719069e07bb00b91!2m2!1d-81.6083838!2d41.5043413!3m4!1m2!1d-83.6863709!2d41.6135828!3s0x883c7a24f4dc0923:0x500b5132b26ad611!3m4!1m2!1d-87.9112007!2d43.0165356!3s0x880519c10b344793:0xa160efb2fa1d13aa!3m4!1m2!1d-104.6008943!2d50.4283093!3s0x531c1e273d08c553:0x6939227b89497181!3m4!1m2!1d-112.7955365!2d53.5702992!3s0x53a0660563de91bf:0x28de672ad7e866b3!3m4!1m2!1d-113.4944769!2d53.5111432!3s0x53a022078d62a593:0x665000730891a69f!3m4!1m2!1d-118.7949125!2d55.1864713!3s0x539096aa32802681:0xf51b77c1af8da478!1m5!1m1!1s0x56c8917604b33f41:0x257dba5aa78468e3!2m2!1d-149.9002778!2d61.2180556!3e1"
              >
                <img className="goImg hover" src={film} alt="gofund" />
              </a>
              <p className="center mediumSize">
                <i>The Approximate Route</i>
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
        <p className="center">Short Videos</p>
        <div className="row bottomBord small">
          <div className="quad center">
            <p className="titleL">First leg</p>
            <i className="mediumSize">Baltimore - Chicago | 821 miles</i>
            <a href="https://youtu.be/7C-V3sWZqw0">
              <img src={leg1} alt="leg1" className="img hover" />
            </a>
          </div>
          <div className="quad center">
            <p className="titleL">Second leg</p>
            <i className="mediumSize">Chicago - Regina | 1,221 miles</i>
            <a href="https://www.youtube.com/watch?v=8377CK2pmo8">
              <img src={leg2} alt="leg2" className="img hover" />
            </a>
          </div>
          <div className="quad center">
            <p className="titleL">Third leg</p>
            <i className="mediumSize">Regina - Tok | 2,106 miles</i>
            <a href="https://www.youtube.com/watch?v=WC2nxfuN5_o">
              <img src={leg3} alt="leg3" className="img hover" />
            </a>
          </div>
          <div className="quad center">
            <p className="titleL">Fourth leg</p>
            <i className="mediumSize">Tok - Anchorage | 323 miles</i>
            <a href="https://www.youtube.com/watch?v=WC2nxfuN5_o">
              <img src={leg4} alt="leg4" className="img hover" />
            </a>
          </div>
        </div>
        <br />{" "}
        <p className="center mediumSize">
          <i>
            Below are my daily logs for my trip. These logs are written as
            "braindumps" and with much haste so I guarantee they are fraught
            with grammatical errors. For navigational ease between dates, click
            the menu toggle in the upper right hand corner.
          </i>
        </p>
        <br /> <br />
        {days.map((day, dayIndex) => {
          return (
            <Element name={day.day} className="dayDiv">
              <p className="center ">{day.day}</p>
              <div className="row center">
                <p className="menuBike">
                  {day.date} | {day.location} | {day.miles} miles | {day.money}{" "}
                  dollars spent
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
export default Vis;
