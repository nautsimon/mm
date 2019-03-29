import React, { Component } from "react";
import * as THREE from "three";

class Scene extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setClearColor("#000000");
    // 0x17293a
    renderer.setSize(width, height);

    const planeGeometry = new THREE.PlaneGeometry(800, 100, 100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x45bebf,
      wireframe: true
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = 0.4 * Math.PI;

    plane.position.set(0, 0, 0);

    scene.add(plane);
    camera.position.z = 400;
    // camera.position.set(0, 50, 30);
    // camera.lookAt(scene.position);
    this.scene = scene;
    this.camera = camera;
    this.plane = plane;
    this.renderer = renderer;
    this.material = planeMaterial;
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
    this.camera.updateProjectionMatrix();
    this.resizeCanvasToDisplaySize();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <canvas
        className="three"
        // style={{ height: "110vh", width: "10%" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
