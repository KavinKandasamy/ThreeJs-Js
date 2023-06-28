import * as THREE from 'three'
import ThreeDVisualizer from '../ThreeDVisualizer.js'

export default class BasicBox
{
    constructor()
    {
        this.threeDVisualizer = new ThreeDVisualizer()
        this.scene = this.threeDVisualizer.scene
        this.resources = this.threeDVisualizer.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {

        this.geometry = new THREE.BoxGeometry();
    }

    
    setTextures()
    {
    }

    setMaterial() {
        //this.material = new THREE.MeshPhongMaterial({ color: 0x0000FF });
    }

    setMesh()
    {
        //const cube = new THREE.Mesh(geometry, cubeMaterial);
        //cube.position.x = -1;
        //cube.castShadow = true;
        //this.scene.add(cube);
        this.scene.add(this.geometry);
    }

}