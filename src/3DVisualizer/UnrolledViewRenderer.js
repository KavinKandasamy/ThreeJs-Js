import * as THREE from 'three'
import Camera from "./Camera"

export default class UnrolledViewRenderer {

  constructor(_canvas, _threeDVisualizer) {

    this.canvas = _canvas;
    this.threeDVisualizer = _threeDVisualizer;
    this.scene = new THREE.Scene();
    this.camera = new Camera(this.scene, this.canvas);

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.physicallyCorrectLights = true;
    this.instance.outputColorSpace = THREE.SRGBColorSpace;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#211d20");
    this.instance.setSize(
      this.threeDVisualizer.sizes.width / 3,
      this.threeDVisualizer.sizes.height / 2
    );
    this.instance.setPixelRatio(Math.min(this.threeDVisualizer.sizes.pixelRatio, 2));
  }

  resize() {
    this.camera.resize();
    this.instance.setSize(
      this.threeDVisualizer.sizes.width / 3,
      this.threeDVisualizer.sizes.height / 2
    );
    this.instance.setPixelRatio(Math.min(this.threeDVisualizer.sizes.pixelRatio, 2));
  }

  update() {
    this.camera.update();
    this.threeDVisualizer.display.update();
    this.instance.render(this.scene, this.camera.instance);
  }
}