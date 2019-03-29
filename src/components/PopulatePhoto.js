import suit from "../img/suit.png";
import React, { Component } from "react";
import SkyLight from "react-skylight";

import pvis0 from "../img/photography/pvis1.JPG";
import pvis2 from "../img/photography/pvis2.JPG";
import pvis3 from "../img/photography/pvis3.JPG";
import pvis4 from "../img/photography/pvis4.JPG";
import pvis5 from "../img/photography/pvis5.JPG";
import pvis6 from "../img/photography/pvis6.JPG";
import pvis7 from "../img/photography/pvis7.JPG";
import pvis8 from "../img/photography/pvis8.JPG";
import pvis9 from "../img/photography/pvis9.JPG";
import pvis10 from "../img/photography/pvis10.JPG";
import pvis11 from "../img/photography/pvis11.JPG";
import pvis12 from "../img/photography/pvis12.JPG";
import pvis13 from "../img/photography/pvis13.JPG";
import pvis14 from "../img/photography/pvis14.JPG";
import pvis15 from "../img/photography/pvis15.JPG";
import pvis16 from "../img/photography/pvis16.JPG";
import pvis17 from "../img/photography/pvis17.JPG";
import pvis18 from "../img/photography/pvis18.jpg";
import pvis19 from "../img/photography/pvis19.JPG";
import pvis20 from "../img/photography/pvis20.JPG";
import pvis21 from "../img/photography/pvis21.JPG";
import pvis22 from "../img/photography/pvis22.jpg";
import pvis23 from "../img/photography/pvis23.JPG";
import pvis24 from "../img/photography/pvis24.JPG";
import pvis25 from "../img/photography/pvis25.JPG";
import pvis26 from "../img/photography/pvis26.JPG";
import pvis27 from "../img/photography/pvis28.JPG";
import pvis28 from "../img/photography/pvis29.JPG";

import lvis0 from "../img/legacyImg/lvis1.PNG";
import lvis1 from "../img/legacyImg/lvis2.PNG";
import lvis2 from "../img/legacyImg/lvis3.jpg";
import lvis3 from "../img/legacyImg/lvis4.jpeg";
import lvis4 from "../img/legacyImg/lvis5.jpg";
import lvis5 from "../img/legacyImg/lvis6.jpg";
import lvis6 from "../img/legacyImg/lvis7.PNG";
import lvis7 from "../img/legacyImg/lvis8.PNG";
import lvis8 from "../img/legacyImg/lvis9.jpg";
import lvis9 from "../img/legacyImg/lvis10.png";
import lvis10 from "../img/legacyImg/lvis11.PNG";
import lvis11 from "../img/legacyImg/lvis12.PNG";
import lvis12 from "../img/legacyImg/lvis13.jpg";
import lvis13 from "../img/legacyImg/lvis14.jpg";

const pvisLen = 28;
const lvisLen = 13;
// for (let i = 28; 1 >= 0; i--) {
//   console.log(i);
// }

const popupStyle = {
  backgroundColor: "#ffffff",
  minHeight: "200px"
};
class PopulatePhoto extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }
  handlePop(i) {
    var caption = i;
    this.visPop.show(caption);
  }
  handleFilter(filter) {
    //originals
    if (filter === 4) {
      return (
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            <img
              src={suit}
              alt="visual_000"
              className="photo"
              onClick={() => this.visPop.show()}
            />
            <img src={suit} alt="visual_003" className="photo" />
            <img src={suit} alt="visual_006" className="photo" />
            <img src={suit} alt="visual_009" className="photo" />
            <img src={suit} alt="visual_012" className="photo" />
            <img src={suit} alt="visual_015" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_001" className="photo" />
            <img src={suit} alt="visual_004" className="photo" />
            <img src={suit} alt="visual_007" className="photo" />
            <img src={suit} alt="visual_010" className="photo" />
            <img src={suit} alt="visual_013" className="photo" />
            <img src={suit} alt="visual_016" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_002" className="photo" />
            <img src={suit} alt="visual_005" className="photo" />
            <img src={suit} alt="visual_008" className="photo" />
            <img src={suit} alt="visual_011" className="photo" />
            <img src={suit} alt="visual_014" className="photo" />
            <img src={suit} alt="visual_017" className="photo" />
          </div>
        </div>
      );
    }
    //media
    if (filter === 3) {
      return (
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            <img
              name="captions.photo[1]"
              src={suit}
              alt="visual_000"
              className="photo"
              onClick={() => this.handelPop()}
            />
            <img
              src={suit}
              alt="visual_003"
              className="photo"
              onClick={() => this.visPop.show()}
            />
            <img src={suit} alt="visual_006" className="photo" />
            <img src={suit} alt="visual_009" className="photo" />
            <img src={suit} alt="visual_012" className="photo" />
            <img src={suit} alt="visual_015" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_001" className="photo" />
            <img src={suit} alt="visual_004" className="photo" />
            <img src={suit} alt="visual_007" className="photo" />
            <img src={suit} alt="visual_010" className="photo" />
            <img src={suit} alt="visual_013" className="photo" />
            <img src={suit} alt="visual_016" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_002" className="photo" />
            <img src={suit} alt="visual_005" className="photo" />
            <img src={suit} alt="visual_008" className="photo" />
            <img src={suit} alt="visual_011" className="photo" />
            <img src={suit} alt="visual_014" className="photo" />
            <img src={suit} alt="visual_017" className="photo" />
          </div>
        </div>
      );
    }
    //legacy
    if (filter === 2) {
      return (
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_000" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img
              src={suit}
              alt="visual_001"
              className="photo"
              onClick={() => this.visPop.show()}
            />
            <img src={suit} alt="visual_004" className="photo" />
            <img src={suit} alt="visual_007" className="photo" />
            <img src={suit} alt="visual_010" className="photo" />
            <img src={suit} alt="visual_013" className="photo" />
            <img src={suit} alt="visual_016" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_002" className="photo" />
            <img src={suit} alt="visual_005" className="photo" />
            <img src={suit} alt="visual_008" className="photo" />
            <img src={suit} alt="visual_011" className="photo" />
            <img src={suit} alt="visual_014" className="photo" />
            <img src={suit} alt="visual_017" className="photo" />
          </div>
        </div>
      );
    }
    //photography
    if (filter === 1) {
      return (
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_000" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_001" className="photo" />
            <img src={suit} alt="visual_004" className="photo" />
            <img src={suit} alt="visual_007" className="photo" />
            <img src={suit} alt="visual_010" className="photo" />
            <img src={suit} alt="visual_013" className="photo" />
            <img src={suit} alt="visual_016" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_002" className="photo" />
            <img src={suit} alt="visual_005" className="photo" />
            <img src={suit} alt="visual_008" className="photo" />
            <img src={suit} alt="visual_011" className="photo" />
            <img src={suit} alt="visual_014" className="photo" />
            <img src={suit} alt="visual_017" className="photo" />
          </div>
        </div>
      );
      //all
    } else {
      return (
        <div className="photoDiv">
          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_000" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_001" className="photo" />
            <img src={suit} alt="visual_004" className="photo" />
            <img src={suit} alt="visual_007" className="photo" />
            <img src={suit} alt="visual_010" className="photo" />
            <img src={suit} alt="visual_013" className="photo" />
            <img src={suit} alt="visual_016" className="photo" />
          </div>

          <div data-aos="fade-up" className="tri">
            <img src={suit} alt="visual_002" className="photo" />
            <img src={suit} alt="visual_005" className="photo" />
            <img src={suit} alt="visual_008" className="photo" />
            <img src={suit} alt="visual_011" className="photo" />
            <img src={suit} alt="visual_014" className="photo" />
            <img src={suit} alt="visual_017" className="photo" />
          </div>
        </div>
      );
    }
  }
  render() {
    var filter = this.props.filter;
    var output = this.handleFilter(filter);
    return (
      <div>
        <SkyLight
          closeButtonStyle={{ color: "#000" }}
          dialogStyles={popupStyle}
          hideOnOverlayClicked
          ref={ref => (this.visPop = ref)}
          title="Current KH Value"
        >
          This value displays the number of Keyholders present at F[Space].
          F[Space] is open whenever a Keyholder is present. To view the
          Keyholder schedule view our{" "}
          <a
            className="links"
            href="https://calendar.google.com/calendar/embed?src=7ifqcofr70ldeg1308b7aq4j30%40group.calendar.google.com&ctz=America%2FNew_York"
          >
            Google Calendar
          </a>
          . To find out more about each keyholder, view the Keyholder section on
          the homepage.
        </SkyLight>
        {output}
      </div>
    );
  }
}
export default PopulatePhoto;
