import React, { Component } from "react";

import returnImg from "../img/return.png";

import { Link } from "react-router-dom";
const musings = [
  {
    musing:
      "whip and nasdial jd asjd lasjd sj lsjlkasjd lasjkdlkasjkld ajslkd aslkd jasldjasdslajalkj lae",
    date: "09/24/1999"
  },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" },
  { musing: "whip and nae", date: "09/24/1999" }
];
const inspiringTexts = [
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // }
];
const homegrownTexts = [
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // },
  // {
  //   name1: "pale blue dot | Carl Sagan",
  //   address1:
  //     "https://drive.google.com/file/d/1UeqA_Bh-PrfNNOmcVyrWtt2Qf8qRdIfR/view?usp=sharing",
  //   name2: "edgy commentary on war | Von Moltke",
  //   address2:
  //     "https://drive.google.com/file/d/1u1-m3eazPqeyYfMsTPUNjuT9hkEJWjho/view?usp=sharing"
  // }
];
class Tex extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 0 };
    this.handleMenu = this.handleMenu.bind(this);
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
        <p className="center"> under construction my g</p>
        <div className="textDiv">
          <div className="originalTex center">
            <p>
              <i>homegrown poop</i>
            </p>
            <div className="texIn center">
              {homegrownTexts.map(row => {
                return (
                  <div className="textRowDiv">
                    <div className="textCol">
                      <a
                        href={row.address1}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="textSquare hover">
                          <div className="textSquareIn">
                            <p className="textTileText">{row.name1}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="textCol">
                      <a
                        href={row.address1}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="textSquare hover">
                          <div className="textSquareIn">
                            <p className="textTileText">{row.name2}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inspireTex center">
            <p>
              <i>inspirations</i>
            </p>
            <div className="texIn center">
              {inspiringTexts.map(row => {
                return (
                  <div className="textRowDiv">
                    <div className="textCol">
                      <a
                        href={row.address1}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="textSquare hover">
                          <div className="textSquareIn">
                            <p className="textTileText">{row.name1}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="textCol">
                      <a
                        href={row.address1}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="textSquare hover">
                          <div className="textSquareIn">
                            <p className="textTileText">{row.name2}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mmTex center">
            <p>
              <i>mediocre musings</i>
            </p>
            <div className="mmTexIn texIn center">
              {musings.map(muse => {
                return (
                  <div className="museDiv">
                    <div className="inMuseDiv">
                      <i className="museText">"{muse.musing}"</i>
                      <p className="dateText">{muse.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tex;
