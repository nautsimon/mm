import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import Scene from "./components/ThreeRender";
import About from "./components/About";
// import Pro from "./components/Pro";
import East from "./components/East";
import Bike from "./components/Bike";
//import Vis from "./components/Vis";
import Lucy from "./components/Lucy";

import aboutIcon from "./img/aboutIcon.png";

// import projectIcon from "./img/inspire.png";
import SceneAlt from "./components/ThreeRenderAlt";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: "0xA244F0",
      time: 0,
      back1: 0,
      back2: 1,
      back3: 0,
      dis1: "hidden",
      dis2: "visible",
      dis3: "hidden",
    };
    this.handleClick = this.handleClick.bind(this);
    this.video1 = React.createRef();
    this.video2 = React.createRef();
    this.video3 = React.createRef();
  }
  handleLeave() {
    this.setState((state) => ({
      time: Date.now(),
    }));
  }
  handleClick(button) {
    if (button === 1) {
      this.setState((state) => ({
        hex: "0x45C6EE",
        back1: 1,
        back2: 0,
        back3: 0,
        dis1: "visible",
        dis2: "hidden",
        dis3: "hidden",
      }));
    }
    if (button === 2) {
      this.setState((state) => ({
        hex: "0xA244F0",
        back1: 0,
        back2: 1,
        back3: 0,
        dis1: "hidden",
        dis2: "visible",
        dis3: "hidden",
      }));
    }
    if (button === 3) {
      this.setState((state) => ({
        hex: "0xEE9C45",
        back1: 0,
        back2: 0,
        back3: 1,
        dis1: "hidden",
        dis2: "hidden",
        dis3: "visible",
      }));
    }
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  <div className="landing">
                    <SceneAlt hex={this.state.hex} />
                    <div className="displayVidOut fade">
                      <Link
                        to="/east"
                        style={{
                          visibility: this.state.dis1,
                          opacity: this.state.back1,
                          transition: "all 1s",
                        }}
                        className="linkStyle displayVid"
                      >
                        <video
                          ref={this.video1}
                          muted
                          playsInline
                          loop
                          id="myVideo"
                          className="vidColor1"
                        >
                          <source
                            src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1600057068/eastt_1_o6luaa.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </Link>
                      <Link
                        to="/bike"
                        style={{
                          visibility: this.state.dis2,
                          opacity: this.state.back2,
                          transition: "all 1s",
                        }}
                        className="displayVid"
                      >
                        <video
                          autoPlay
                          ref={this.video2}
                          muted
                          playsInline
                          loop
                          id="myVideo"
                          className="vidColor2"
                        >
                          <source
                            src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1600129829/dasdasdas_bcbtpx.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </Link>
                      <Link
                        to="/roadtrip"
                        style={{
                          visibility: this.state.dis3,
                          opacity: this.state.back3,
                          transition: "all 1s",
                        }}
                        className="displayVid"
                      >
                        <video
                          ref={this.video3}
                          muted
                          playsInline
                          loop
                          id="myVideo"
                          className="vidColor3"
                        >
                          <source
                            src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1600057063/lluuuuu_jmzsli.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </Link>
                    </div>

                    <div className="menuOut fade">
                      <div className="menuIn">
                        <li className="menuLi">
                          <span
                            onMouseEnter={() => {
                              this.handleClick(1);
                              this.video1.current.play();
                              this.video2.current.pause();
                              this.video3.current.pause();
                            }}
                            className="menuText"
                          >
                            EAST COAST TREK
                          </span>
                          <span
                            style={{
                              opacity: this.state.back1,
                              transition: "all 1s",
                            }}
                            className="borderStrike"
                          ></span>
                        </li>

                        <li className="menuLi">
                          <span
                            onMouseEnter={() => {
                              this.handleClick(2);
                              this.video2.current.play();
                              this.video1.current.pause();
                              this.video3.current.pause();
                            }}
                            className="menuText"
                          >
                            BIKING TO ALASKA
                          </span>
                          <span
                            style={{
                              opacity: this.state.back2,
                              transition: "all 1s",
                            }}
                            className="borderStrike"
                          ></span>
                        </li>

                        <li className="menuLi">
                          <span
                            onMouseEnter={() => {
                              this.handleClick(3);
                              this.video3.current.play();
                              this.video1.current.pause();
                              this.video2.current.pause();
                            }}
                            className="menuText"
                          >
                            ROAD TRIP WITH LUCY
                          </span>
                          <span
                            style={{
                              opacity: this.state.back3,
                              transition: "all 1s",
                            }}
                            className="borderStrike"
                          ></span>
                        </li>
                      </div>
                    </div>
                    <div className="logoDiv fade">
                      <Link
                        to="/about"
                        style={{ margin: "0px", padding: "0px" }}
                      >
                        <img src={aboutIcon} alt="logo" className="logoImg" />
                      </Link>
                    </div>
                    {/* <div className="aboutDiv">
                      <Link to="/pro" className="linkStyle">
                        <img
                          className="aboutIcon"
                          alt="aboutIco"
                          src={projectIcon}
                        />
                      </Link>
                    </div> */}
                    {/* <div className="bikeDiv">
                      <Link to="/bike" className="linkStyle">
                        <img
                          className="bikeIcon"
                          alt="bikeIco"
                          src={bikeIcon}
                        />
                      </Link>
                    </div>
                    <div className="aboutDiv">
                      <Link to="/about" className="linkStyle">
                        <img
                          className="aboutIcon"
                          alt="aboutIco"
                          src={aboutIcon}
                        />
                      </Link>
                    </div>

                    <div className="landLeft">
                      <SceneAlt />
                      <Link to="/vis" className="linkStyle">
                        <div className="titleTextDiv">
                          <p className="titleText">VISUALS</p>
                        </div>
                      </Link>
                    </div>
                    <div className="landRight">
                      <Link to="/tex" className="linkStyle">
                        <div className="titleTextDiv">
                          <p className="titleText">TEXT</p>
                        </div>
                      </Link>
                    </div> */}
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/east"
            exact
            strict
            render={() => {
              return <East />;
            }}
          />
          {/* <Route
            path="/projects"
            exact
            strict
            render={() => {
              return <Pro />;
            }}
          /> */}
          {/* <Route
            path="/vis"
            exact
            strict
            render={() => {
              return <Vis />;
            }}
          />{" "} */}
          <Route
            path="/roadtrip"
            exact
            strict
            render={() => {
              return <Lucy />;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <About />;
            }}
          />
          <Route
            path="/bike"
            exact
            strict
            render={() => {
              return <Bike />;
            }}
          />
          {/* <Route
            path="/pro"
            exact
            strict
            render={() => {
              return <Pro />;
            }}
          /> */}
        </div>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
