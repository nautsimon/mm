import React, { Component } from "react";
import smokeTex from "./smoke-1.png";
// import gal from "./space-2.jpg";
import * as THREE from "three"; //how i usually import three
import aboutIcon from "../img/aboutIcon.png";
import leftArr from "../img/leftArr.png";
import rightArr from "../img/rightArr.png";
import { Link } from "react-router-dom";
var hslH = 0.56;
class SceneAlt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: "0xA244F0",

      time: 0,
      back1: 0,
      back2: 0.7,
      back3: 0,
      dis1: "hidden",
      dis2: "visible",
      dis3: "hidden",
      exiting: false,
      contentOpacity: 0,
      contentVis: "hidden",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.video1 = React.createRef();
    this.video2 = React.createRef();
    this.video3 = React.createRef();

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    var counter = 0;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    counter = 0;
    camera.position.z = -90;
    camera.position.y = -20;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    var stColor = new THREE.Color("hsl(201.6, 50%, 50%)");
    renderer.setClearColor(0x111111);
    var orangeLight = new THREE.PointLight(stColor, 50, 450, 2);
    orangeLight.position.set(200, 300, 100);
    scene.add(orangeLight);
    var redLight = new THREE.PointLight(stColor, 50, 450, 2);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);
    var blueLight = new THREE.PointLight(stColor, 50, 450, 6);
    blueLight.position.set(0, 300, 300);
    scene.add(blueLight);
    var greenLight = new THREE.PointLight(stColor, 50, 450, 2);
    greenLight.position.set(200, 300, -300);
    scene.add(greenLight);
    var cloudParticles = [];
    let loader = new THREE.TextureLoader();
    loader.load(smokeTex, function (texture) {
      var cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
      var cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        size: 0.2,
      });
      for (let p = 0; p < 50; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 500 - 250,
          0,
          Math.random() * 600 - 700
        );
        cloud.rotation.x = 0.02;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.55;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });
    // var tubePoints = [];
    // var incrm = 0;
    // for (var i = 0; i < 5; i += 1) {
    //   var xC = 4 - i;
    //   incrm = xC * xC - xC;
    //   tubePoints.push(new THREE.Vector3(0, incrm / 3, 3 * (i / 4)));
    // }
    // var curve = new THREE.CatmullRomCurve3(tubePoints);
    // curve.type = "catmullrom";
    // var tubeGeo = new THREE.Geometry();
    // tubeGeo.vertices = curve.getPoints(70);
    // var tubeTex = loader.load(gal, function (tubeTex) {
    //   tubeTex.wrapS = THREE.MirroredRepeatWrapping;
    //   tubeTex.wrapT = THREE.MirroredRepeatWrapping;
    //   tubeTex.repeat.set(2, 2);
    // });
    // var tubeMaterial = new THREE.MeshBasicMaterial({
    //   side: THREE.BackSide,
    //   map: tubeTex,
    //   transparent: true,
    //   opacity: 1,
    // });
    // var tubeGeometry = new THREE.TubeGeometry(curve, 70, 0.3, 30, false);
    // tubeGeometry.verticesNeedUpdate = true;
    // tubeGeometry.dynamic = true;
    // var tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    // scene.add(tubeMesh);
    // tubeMesh.position.z = 96.9;
    // scene.add(tubeMesh);
    // var speedMat = -0.001;
    //this.speedMat = speedMat;
    //this.tubeMesh = tubeMesh;
    // this.tubeGeometry = tubeGeometry;
    // this.tubeMaterial = tubeMaterial;
    this.counter = counter;
    this.scene = scene;
    this.camera = camera;
    this.cloudParticles = cloudParticles;
    this.renderer = renderer;
    this.blueLight = blueLight;
    this.redLight = redLight;
    this.orangeLight = orangeLight;
    this.greenLight = greenLight;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId);
  }
  resizeCanvasToDisplaySize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }
  handleContent() {
    this.setState({ contentOpacity: 1, contentVis: "visible" });
  }

  handleClick(isRight) {
    if (isRight) {
      if (this.state.back3 === 0.7) {
        this.video1.current.play();
        this.video3.current.pause();
        this.setState((state) => ({
          hex: "0x45C6EE",
          back1: 0.7,
          back2: 0,
          back3: 0,
          dis1: "visible",
          dis2: "hidden",
          dis3: "hidden",
        }));
      }
      if (this.state.back1 === 0.7) {
        this.video2.current.play();
        this.video1.current.pause();
        this.setState((state) => ({
          hex: "0xA244F0",
          back1: 0,
          back2: 0.7,
          back3: 0,
          dis1: "hidden",
          dis2: "visible",
          dis3: "hidden",
        }));
      }
      if (this.state.back2 === 0.7) {
        this.video3.current.play();
        this.video2.current.pause();
        this.setState((state) => ({
          hex: "0xEE9C45",
          back1: 0,
          back2: 0,
          back3: 0.7,
          dis1: "hidden",
          dis2: "hidden",
          dis3: "visible",
        }));
      }
    } else {
      if (this.state.back2 === 0.7) {
        this.video1.current.play();
        this.video2.current.pause();
        this.setState((state) => ({
          hex: "0x45C6EE",
          back1: 0.7,
          back2: 0,
          back3: 0,
          dis1: "visible",
          dis2: "hidden",
          dis3: "hidden",
        }));
      }
      if (this.state.back3 === 0.7) {
        this.video2.current.play();
        this.video3.current.pause();
        this.setState((state) => ({
          hex: "0xA244F0",
          back1: 0,
          back2: 0.7,
          back3: 0,
          dis1: "hidden",
          dis2: "visible",
          dis3: "hidden",
        }));
      }
      if (this.state.back1 === 0.7) {
        this.video3.current.play();
        this.video1.current.pause();
        this.setState((state) => ({
          hex: "0xEE9C45",
          back1: 0,
          back2: 0,
          back3: 0.7,
          dis1: "hidden",
          dis2: "hidden",
          dis3: "visible",
        }));
      }
    }
  }
  animate() {
    this.cloudParticles.forEach((p) => {
      p.rotation.z -= 0.004;
    });
    this.counter += 0.1;
    // console.log(
    //   this.camera.position.x,
    //   this.camera.position.y,
    //   this.camera.position.z
    // );

    if (this.counter < 20.05) {
      this.camera.position.z -=
        (-this.counter * this.counter * 0.05 + this.counter) * 0.35;
      this.camera.position.y +=
        (-this.counter * this.counter * 0.05 + this.counter) * 0.37;
    }
    if (this.counter > 20.05 && this.counter < 20.3) {
      this.handleContent();
    }

    if (this.state.hex === "0x45C6EE") {
      if (hslH < 0.46) {
        hslH += 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        // this.renderer.setClearColor.color.setHSL(hslH, 0.2, 0.2);
      }
      if (hslH > 0.46) {
        hslH -= 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        // this.renderer.setClearColor.color.setHSL(hslH, 0.2, 0.2);
      }
    }
    if (this.state.hex === "0xA244F0") {
      if (hslH < 0.56) {
        hslH += 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        //this.renderer.setClearColorHSL(hslH, 0.2, 0.2);
      }
      if (hslH > 0.56) {
        hslH -= 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        // this.renderer.setClearColorHSL(hslH, 0.2, 0.2);
      }
    }
    if (this.state.hex === "0xEE9C45") {
      if (hslH < 0.95) {
        hslH += 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        //this.renderer.color.setHSL(hslH, 0.2, 0.2);
      }
      if (hslH > 0.95) {
        hslH -= 0.003;
        this.redLight.color.setHSL(hslH, 0.5, 0.5);
        this.blueLight.color.setHSL(hslH, 0.5, 0.5);
        this.orangeLight.color.setHSL(hslH, 0.5, 0.5);
        this.greenLight.color.setHSL(hslH, 0.5, 0.5);
        //this.renderer.color.setHSL(hslH, 0.2, 0.2);
      }
    }
    // this.redLight.color.setRGB(this.props.hex);
    // this.blueLight.color.setHex(this.props.hex);
    // this.orangeLight.color.setHex(this.props.hex);
    var tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov) / 2);
    var windowHeight = window.innerHeight;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.fov =
      (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / windowHeight));
    this.camera.updateProjectionMatrix();
    this.resizeCanvasToDisplaySize();

    // this.renderer.setSize(window.innerWidth - 18, window.innerHeight);
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        className="three"
        // style={{ height: "110vh", width: "10%" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      >
        <div className="landing">
          <div className="displayVidOut fade">
            <Link
              to={{
                pathname: "/east",
              }}
              className="linkStyle displayVid"
              onClick={() => this.handleExitNav}
            >
              <video
                style={{
                  visibility: this.state.dis1,
                  opacity: this.state.back1,
                  transition: "all 1s",
                }}
                ref={this.video1}
                muted
                playsInline
                loop
                id="myVideo"
                className="vidColor1"
              >
                <source
                  src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1601083061/east_kl3khp.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="subtitleDiv">
                <p
                  style={{
                    visibility: this.state.dis1,
                    opacity: this.state.back1,
                    transition: "all 0.2s",
                    transitionDelay: this.state.back1.toString() + "s",
                  }}
                  className="subtitleSpecs"
                >
                  [3 days by misc.]
                </p>
                <p
                  style={{
                    visibility: this.state.dis1,
                    opacity: this.state.back1,
                    transition: "all 0.6s",
                    transitionDelay: this.state.back1.toString() + "s",
                  }}
                  className="subtitleOrg"
                >
                  [39.2904°N 76.6122°W] [Baltimore]
                </p>
                <p
                  style={{
                    visibility: this.state.dis1,
                    opacity: this.state.back1,
                    transition: "all 1s",
                    transitionDelay: this.state.back1.toString() + "s",
                  }}
                  className="subtitleDes"
                >
                  [42.3601°N 71.0589°W] [Boston]
                </p>
                <p
                  style={{
                    visibility: this.state.dis1,
                    opacity: this.state.back1,
                    transition: "all 1.4s",
                    transitionDelay: this.state.back1.toString() + "s",
                  }}
                  className="subtitleMain"
                >
                  EAST COAST TREK
                </p>
              </div>
            </Link>
            <Link
              to={{
                pathname: "/bike",
              }}
              className="displayVid"
              onClick={() => this.handleExitNav}
            >
              <video
                style={{
                  visibility: this.state.dis2,
                  opacity: this.state.back2,
                  transition: "all 1s",
                }}
                autoPlay
                ref={this.video2}
                muted
                playsInline
                loop
                id="myVideo"
                className="vidColor2"
              >
                <source
                  src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1601083075/bike_z5qdy6.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="subtitleDiv">
                <p
                  style={{
                    visibility: this.state.dis2,
                    opacity: this.state.back2,
                    transition: "all 0.2s",
                    transitionDelay: this.state.back2.toString() + "s",
                  }}
                  className="subtitleSpecs"
                >
                  [74 days by bike]
                </p>
                <p
                  style={{
                    visibility: this.state.dis2,
                    opacity: this.state.back2,
                    transition: "all 0.6s",
                    transitionDelay: this.state.back2.toString() + "s",
                  }}
                  className="subtitleOrg"
                >
                  [39.2904°N 76.6122°W] [Baltimore]
                </p>
                <p
                  style={{
                    visibility: this.state.dis2,
                    opacity: this.state.back2,
                    transition: "all 1s",
                    transitionDelay: this.state.back2.toString() + "s",
                  }}
                  className="subtitleDes"
                >
                  [61.2181°N 149.900°W] [Anchorage]
                </p>
                <p
                  style={{
                    visibility: this.state.dis2,
                    opacity: this.state.back2,
                    transition: "all 1.4s",
                    transitionDelay: this.state.back2.toString() + "s",
                  }}
                  className="subtitleMain"
                >
                  BIKING TO ALASKA
                </p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/roadtrip" }}
              className="displayVid"
              onClick={() => this.handleExitNav}
            >
              <video
                style={{
                  visibility: this.state.dis3,
                  opacity: this.state.back3,
                  transition: "all 1s",
                }}
                ref={this.video3}
                muted
                playsInline
                loop
                id="myVideo"
                className="vidColor3"
              >
                <source
                  src="https://res.cloudinary.com/dxd8gebv1/video/upload/v1601083054/lucy_ysjant.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="subtitleDiv">
                <p
                  style={{
                    visibility: this.state.dis3,
                    opacity: this.state.back3,
                    transition: "all 0.2s",
                    transitionDelay: this.state.back3.toString() + "s",
                  }}
                  className="subtitleSpecs"
                >
                  [15 days by car]
                </p>
                <p
                  style={{
                    visibility: this.state.dis3,
                    opacity: this.state.back3,
                    transition: "all 0.6s",
                    transitionDelay: this.state.back3.toString() + "s",
                  }}
                  className="subtitleOrg"
                >
                  [47.6062°N 122.332°W] [Seattle]
                </p>
                <p
                  style={{
                    visibility: this.state.dis3,
                    opacity: this.state.back3,
                    transition: "all 1s",
                    transitionDelay: this.state.back3.toString() + "s",
                  }}
                  className="subtitleDes"
                >
                  [39.4143°N 77.4105°W] [Frederick]
                </p>
                <p
                  style={{
                    visibility: this.state.dis3,
                    opacity: this.state.back3,
                    transition: "all 1.4s",
                    transitionDelay: this.state.back3.toString() + "s",
                  }}
                  className="subtitleMain"
                >
                  ROAD TRIP WITH LUCY
                </p>
              </div>
            </Link>
          </div>

          <div className="logoDiv fade">
            <Link to="/about" style={{ margin: "0px", padding: "0px" }}>
              <img src={aboutIcon} alt="logo" className="logoImg" />
            </Link>
          </div>
          <div className="navArrs fade">
            <div className="navArrsRow">
              <img
                onClick={() => {
                  this.handleClick(false);
                }}
                src={leftArr}
                alt="logo"
                className="navArrsImg"
              />
              <img
                onClick={() => {
                  this.handleClick(true);
                }}
                src={rightArr}
                alt="logo"
                className="navArrsImg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SceneAlt;
