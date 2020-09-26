import React, { Component } from "react";
import smokeTex from "./smoke-1.png";
import gal from "./space-2.jpg";
import * as THREE from "three";

// import { EffectComposer } from "./jsm/postprocessing/EffectComposer.js";
// import { RenderPass } from "./jsm/postprocessing/RenderPass.js";
// import { UnrealBloomPass } from "./jsm/postprocessing/UnrealBloomPass.js";

var counter = 0;
var hslH = 0.56;
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

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03544e, 0.001);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    counter = 0;
    camera.position.z = -16;
    //camera.position.y = -20;

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
    // var light = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light);
    // Smoke Loaders
    let loader = new THREE.TextureLoader();
    loader.load(smokeTex, function (texture) {
      var cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
      var cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        size: 0.2,
      });

      for (let p = 0; p < 40; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 600 - 300,
          0,
          Math.random() * 300 - 600
        );
        cloud.rotation.x = 0.02;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.55;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });
    var tubePoints = [];

    var incrm = 0;
    for (var i = 0; i < 5; i += 1) {
      var xC = 4 - i;
      incrm = xC * xC - xC;
      tubePoints.push(new THREE.Vector3(0, incrm / 3, 3 * (i / 4)));
    }

    var curve = new THREE.CatmullRomCurve3(tubePoints);
    curve.type = "catmullrom";

    var tubeGeo = new THREE.Geometry();
    tubeGeo.vertices = curve.getPoints(70);
    //var splineMesh = new THREE.Line(tubeGeo, new THREE.LineBasicMaterial());
    var tubeTex = loader.load(gal, function (tubeTex) {
      tubeTex.wrapS = THREE.MirroredRepeatWrapping;
      tubeTex.wrapT = THREE.MirroredRepeatWrapping;
      tubeTex.repeat.set(2, 2);
    });
    var tubeMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      map: tubeTex,
    });

    var tubeGeometry = new THREE.TubeGeometry(curve, 70, 0.3, 30, false);
    var tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tubeMesh);

    // tubeMesh.position.x = 0.8;
    // tubeMesh.position.y = -0.6;
    tubeMesh.position.z = -618.8;

    // tubeMesh.rotation.x = -0.15;
    // tubeMesh.rotation.y = -0.25;
    //tubeMesh.rotation.z = -0.57;
    // Add the tube into the scene
    scene.add(tubeMesh);
    this.scene = scene;
    this.camera = camera;
    this.cloudParticles = cloudParticles;
    this.tubeMaterial = tubeMaterial;
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
    this.cloudParticles.forEach((p) => {
      p.rotation.z -= 0.004;
    });
    counter += 0.1;
    console.log(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z
    );
    this.tubeMaterial.map.offset.x -= 0.03;
    // this.camera.rotation.y += 0.01;
    // this.camera.rotation.x += 0.01;
    //this.camera.rotation.x += 0.01;
    if (counter <= 20) {
      this.camera.position.z -= (-counter * counter * 0.05 + counter) * 0.9;
    }
    //   // this.camera.rotation.z +=
    //   //   (-counter * counter + 21 * counter - 20) * 0.00006;
    // }
    if (this.props.hex === "0x45C6EE") {
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
    if (this.props.hex === "0xA244F0") {
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
    if (this.props.hex === "0xEE9C45") {
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
      />
    );
  }
}

export default SceneAlt;
