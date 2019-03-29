import suit from "../img/suit.png";
import React, { Component } from "react";
class PopulateText extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === 1) {
      return <div>sadjas</div>;
    }
    if (filter === 2) {
      return <div>sadjas</div>;
    } else {
      return (
        <div class="photoDiv">
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
    return <div>{output}</div>;
  }
}
export default PopulateText;
