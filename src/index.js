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

// import projectIcon from "./img/inspire.png";
import SceneAlt from "./components/ThreeRenderAlt";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact strict component={SceneAlt} />
          <Route path="/east" exact strict component={East} />
          <Route path="/roadtrip" exact strict component={Lucy} />
          <Route path="/about" exact strict component={About} />
          <Route path="/bike" exact strict component={Bike} />
        </div>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
