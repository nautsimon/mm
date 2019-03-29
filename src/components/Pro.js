import React, { Component } from "react";
import SkyLight from "react-skylight";
const popupStyle = {
  backgroundColor: "#ffffff",
  minHeight: "200px"
};
projects[
  ({
    name: "Cadet Competition",
    notes:
      "This was one of the few projects that had an proportionate output to the work that I put in. Led the Frederick Composite Squadron Cadet Competition team to First in State, Second in the region, Qualify for nationals (the first MD team to do so in 17 years), and bring home five first place trophies. I received the top overall physical score along with the most pushups recorded at the event in the past few years. There was so much grinding involved. From putting together study guides to intense workouts, I gave this team my all and it surprisingly worked lmao.  *i was initially not the commander but was promoted to commander after regionals",
    link: "https://remind",
    linkName: "award photo"
  },
  {
    name: "Mandelbrot renderer",
    notes:
      "learned python in three days and made a mandelbrot renderer thats sick af",
    link: "https://github.com/simonmahnd/repo/fractal",
    linkName: "github"
  },
  {
    name: "ORION",
    notes:
      "sighhhh, a high school passion project. a small 501c3 nonprofit which is the medium in which i completed a couple other project on here. currently winding the nonprofit down. aiming to dissolve in 1-2 years so I can fully take advantage of all the oppurtunites in college. not a 'success' bc of the nerd drama that occurred in senior year and the fact that more than 50% of the members are tailcoat riders who just used this nonprofit as a resume beefer thus greatly skewing the workload distribution, operating in Ghana, the Dominican republic. board members from in Princeton, columbia, MIT, and Uchicago",
    link: "https://omnified.org",
    linkName: "orion website"
  },
  {
    name: "ORION",
    notes:
      "sighhhh, a high school passion project. a small 501c3 nonprofit which is the medium in which i completed a couple other project on here. currently winding the nonprofit down. aiming to dissolve in 1-2 years so I can fully take advantage of all the oppurtunites in college. not a 'success' bc of the nerd drama that occurred in senior year and the fact that more than 50% of the members are tailcoat riders who just used this nonprofit as a resume beefer thus greatly skewing the workload distribution, operating in Ghana, the Dominican republic. board members from in Princeton, columbia, MIT, and Uchicago",
    link: "https://omnified.org",
    linkName: "orion website"
  },
  {
    name: "ORION",
    notes:
      "sighhhh, a high school passion project. a small 501c3 nonprofit which is the medium in which i completed a couple other project on here. currently winding the nonprofit down. aiming to dissolve in 1-2 years so I can fully take advantage of all the oppurtunites in college. not a 'success' bc of the nerd drama that occurred in senior year and the fact that more than 50% of the members are tailcoat riders who just used this nonprofit as a resume beefer thus greatly skewing the workload distribution, operating in Ghana, the Dominican republic. board members from in Princeton, columbia, MIT, and Uchicago",
    link: "https://omnified.org",
    linkName: "orion website"
  },
  {
    name: "ORION",
    notes:
      "sighhhh, a high school passion project. a small 501c3 nonprofit which is the medium in which i completed a couple other project on here. currently winding the nonprofit down. aiming to dissolve in 1-2 years so I can fully take advantage of all the oppurtunites in college. not a 'success' bc of the nerd drama that occurred in senior year and the fact that more than 50% of the members are tailcoat riders who just used this nonprofit as a resume beefer thus greatly skewing the workload distribution, operating in Ghana, the Dominican republic. board members from in Princeton, columbia, MIT, and Uchicago",
    link: "https://omnified.org",
    linkName: "orion website"
  },
  {
    name: "ORION",
    notes:
      "sighhhh, a high school passion project. a small 501c3 nonprofit which is the medium in which i completed a couple other project on here. currently winding the nonprofit down. aiming to dissolve in 1-2 years so I can fully take advantage of all the oppurtunites in college. not a 'success' bc of the nerd drama that occurred in senior year and the fact that more than 50% of the members are tailcoat riders who just used this nonprofit as a resume beefer thus greatly skewing the workload distribution, operating in Ghana, the Dominican republic. board members from in Princeton, columbia, MIT, and Uchicago",
    link: "https://omnified.org",
    linkName: "orion website"
  })
];
class Pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "null",
      notes: "null",
      linkName: "null",
      link: "null"
    };
    this.handleMenu = this.handlePop.bind(this);
  }
  handlePop(val) {
    this.setState(
      {
        title: projects[val].name,
        notes: projects[val].notes,
        linkName: projects[val].linkName,
        link: projects[val].link
      },
      this.locPop.show()
    );
  }
  render() {
    return (
      <div>
        <SkyLight
          closeButtonStyle={{ color: "#000" }}
          dialogStyles={popupStyle}
          hideOnOverlayClicked
          ref={ref => (this.locPop = ref)}
          title={this.state.title}
        >
          <p>
            Notes:
            {this.state.notes}
          </p>
          <p>Links:</p>
          <a href={this.state.link}>{this.state.linkName}</a>
        </SkyLight>

        <div className="mainDiv center">
          <h1>Projects</h1>
          <div className="row">
            <div className="tri left">
              <h3>successes</h3>
              <p>projects that had an objectively successful outcome</p>
              <li>Cadet Competition</li>
              <li>Mandelbrot renderer</li>
            </div>
            <div className="tri left">
              <h3>completed</h3>
              <p>
                projects have been completed but aren't too outstanding to be a
                "success"/bad enough to be a "flop"
              </p>
              <li>ORION</li>
              <li>Fspace</li>
              <li>array of highschool clubs</li>
            </div>
            <div className="tri left">
              <h3>pending</h3>
              <p>projects im actively working on</p>
              <li onClick={() => this.handlePop(1)}>Ghana</li>
              <li>Voyage</li>
              <li>Alaska Bike trip</li>
            </div>
            <div className="tri">
              <h3>shelfed</h3>
              <p>
                projects that had to be shelved due to a lack of money,
                resources, or time
              </p>
              <li>Root/strange dreams</li>
              <li>studying analysis tool</li>
              <li>Mandelbrot in C</li>
              <li>Drone</li>
              <li>
                data mining/tensorflow to determine the best naming convention
                for soundcloud rappers
              </li>
            </div>
            <div className="tri right">
              <h3>flops</h3>
              <p>painful failures that have chipped my shoulder</p>
              <li>The Mandelbots</li>
              <li>The College Communique</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pro;
