import * as THREE from 'three'
import ThreeDVisualizer from './ThreeDVisualizer.js'

export default class Renderer
{
    constructor(_canvas, _scene, _camera, _width, _height, _pixelRatio)
    {
        this.threeDVisualizer = new ThreeDVisualizer()
        this.canvas = _canvas
        this.scene = _scene
        this.camera = _camera
        this.width = _width
        this.height = _height
        this.pixelRatio = _pixelRatio

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.width, this.height)
        this.instance.setPixelRatio(Math.min(this.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize(this.width, this.height)
        this.instance.setPixelRatio(Math.min(this.pixelRatio, 2))
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}