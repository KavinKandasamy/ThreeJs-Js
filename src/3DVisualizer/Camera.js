import * as THREE from 'three'
import ThreeDVisualizer from './ThreeDVisualizer.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Camera
{
    constructor(_scene, _canvas)
    {
        this.threeDVisualizer = new ThreeDVisualizer()
        this.sizes = this.threeDVisualizer.sizes
        this.scene = _scene
        this.canvas = _canvas

        this.setInstance()
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}