import React, { Component } from "react";
import * as THREE from "three";
var loader = new THREE.TextureLoader();

class SceneAlt extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const fogHex = 0x000000;
    const fogDensity = 0.001;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogHex, fogDensity);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    var material = new THREE.PointsMaterial({
      size: 2,
      map: loader.load(
        "//upload.wikimedia.org/wikipedia/commons/thumb/d/da/White_dot.svg/240px-White_dot.svg.png"
      ),
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });
    var geometry = new THREE.Geometry();
    const particleCount = 10000;
    for (let i = 0; i < particleCount; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = Math.random() * 2000 - 1000;

      geometry.vertices.push(vertex);
    }

    // const ma
    var pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    camera.position.z = 400;

    renderer.setClearColor("#000000");
    // renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = scene;
    this.camera = camera;

    this.renderer = renderer;
    this.material = material;
    this.pointCloud = pointCloud;
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
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      // update any render target sizes here
    }
  }
  animate() {
    this.pointCloud.rotation.x += -0.0005;
    this.pointCloud.rotation.y += -0.005;
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
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default SceneAlt;
