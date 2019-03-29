import React, { Component } from "react";
import suit from "../img/suit.png";
import all from "../img/all.png";
import legacy from "../img/legacy.png";
import video from "../img/movie.png";

import original from "../img/original.png";
import returnImg from "../img/return.png";
import { Link } from "react-router-dom";

// import pvis0 from "../img/photography/pvis1.JPG";
// import pvis2 from "../img/photography/pvis2.JPG";
// import pvis3 from "../img/photography/pvis3.JPG";
// import pvis4 from "../img/photography/pvis4.JPG";
// import pvis5 from "../img/photography/pvis5.JPG";
// import pvis6 from "../img/photography/pvis6.JPG";
// import pvis7 from "../img/photography/pvis7.JPG";
// import pvis8 from "../img/photography/pvis8.JPG";
// import pvis9 from "../img/photography/pvis9.JPG";
// import pvis10 from "../img/photography/pvis10.JPG";
// import pvis11 from "../img/photography/pvis11.JPG";
// import pvis12 from "../img/photography/pvis12.JPG";
// import pvis13 from "../img/photography/pvis13.JPG";
// import pvis14 from "../img/photography/pvis14.JPG";
// import pvis15 from "../img/photography/pvis15.JPG";
// import pvis16 from "../img/photography/pvis16.JPG";
// import pvis17 from "../img/photography/pvis17.JPG";
// import pvis18 from "../img/photography/pvis18.jpg";
// import pvis19 from "../img/photography/pvis19.JPG";
// import pvis20 from "../img/photography/pvis20.JPG"; https://res.cloudinary.com/dgmuzb9mm/image/upload/v1553831058/photo/photo0.jpg
// import pvis21 from "../img/photography/pvis21.JPG";
// import pvis22 from "../img/photography/pvis22.jpg";
// import pvis23 from "../img/photography/pvis23.JPG";
// import pvis24 from "../img/photography/pvis24.JPG";
// import pvis25 from "../img/photography/pvis25.JPG";
// import pvis26 from "../img/photography/pvis26.JPG";
// import pvis27 from "../img/photography/pvis28.JPG";
// import pvis28 from "../img/photography/pvis29.JPG";

// import lvis0 from "../img/legacyImg/lvis1.PNG";
// import lvis1 from "../img/legacyImg/lvis2.PNG";
// import lvis2 from "../img/legacyImg/lvis3.jpg";
// import lvis3 from "../img/legacyImg/lvis4.jpeg";
// import lvis4 from "../img/legacyImg/lvis5.jpg";
// import lvis5 from "../img/legacyImg/lvis6.jpg";
// import lvis6 from "../img/legacyImg/lvis7.PNG";
// import lvis7 from "../img/legacyImg/lvis8.PNG";
// import lvis8 from "../img/legacyImg/lvis9.jpg";
// import lvis9 from "../img/legacyImg/lvis10.png";
// import lvis10 from "../img/legacyImg/lvis11.PNG";
// import lvis11 from "../img/legacyImg/lvis12.PNG";
// import lvis12 from "../img/legacyImg/lvis13.jpg";
// import lvis13 from "../img/legacyImg/lvis14.jpg";

const content = [
  { name: "photo", col: [[], [], []], length: 26 },
  { name: "homegrown", col: [[], [], []], length: 22 },
  { name: "video", col1: [], col2: [], col3: [], length: 21 },
  { name: "legacy", col1: [], col2: [], col3: [], length: 20 }
];

for (var type = 0; type < 1; type++) {
  var organizer = 0;
  for (var i = 0; i < content[type].length; i++) {
    if (organizer === 2) {
      organizer = 0;
    } else {
      organizer++;
    }

    content[type].col[organizer].push(
      "https://res.cloudinary.com/dgmuzb9mm/image/upload/v1553831060/" +
        content[type].name +
        "/" +
        content[type].name +
        i +
        ".jpg"
    );
  }
}
class Vis extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 0 };
    this.handleMenu = this.handleMenu.bind(this);
    console.log(content[this.state.filter].col[0]);
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
        <p className="pageTitle">visuals</p>
        <div className="topBar">
          <a className="subMenu">
            <img
              src={all}
              alt="photo"
              className="menuIcon"
              onClick={() => this.handleMenu(1)}
            />
          </a>
          <a className="subMenu">
            <img
              src={legacy}
              alt="homegrown"
              className="menuIcon"
              onClick={() => this.handleMenu(2)}
            />
          </a>
          <a className="subMenu">
            <img
              src={"video"}
              alt="video"
              className="menuIcon"
              onClick={() => this.handleMenu(3)}
            />
          </a>
          <a className="subMenu">
            <img
              src={original}
              alt="legacy"
              className="menuIcon"
              onClick={() => this.handleMenu(4)}
            />
          </a>
        </div>
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            {content[this.state.filter].col[0].map((address, index) => {
              return <img src={address} className="photo" />;
            })}
          </div>

          <div data-aos="fade-up" className="tri">
            {content[this.state.filter].col[1].map(address => {
              return <img src={address} className="photo" />;
            })}
          </div>

          <div data-aos="fade-up" className="tri">
            {content[this.state.filter].col[2].map(address => {
              return <img src={address} className="photo" />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Vis;
