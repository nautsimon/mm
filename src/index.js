import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import Scene from "./components/ThreeRender";
import About from "./components/About";
// import Pro from "./components/Pro";
import Tex from "./components/Tex";
import Bike from "./components/Bike";
import Vis from "./components/Vis";
import aboutIcon from "./img/aboutIcon.png";
import bikeIcon from "./img/bikeIcon.png";
// import projectIcon from "./img/inspire.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
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
                    {/* <div className="aboutDiv">
                      <Link to="/pro" className="linkStyle">
                        <img
                          className="aboutIcon"
                          alt="aboutIco"
                          src={projectIcon}
                        />
                      </Link>
                    </div> */}
                    <div className="bikeDiv">
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
                    </div>
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/tex"
            exact
            strict
            render={() => {
              return <Tex />;
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
          <Route
            path="/vis"
            exact
            strict
            render={() => {
              return <Vis />;
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
