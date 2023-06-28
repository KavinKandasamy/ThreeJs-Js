import ThreeDVisualizer from '../ThreeDVisualizer.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Peacock from './Peacock.js'
import Photo from './Photo.js'

export default class Display
{
    constructor()
    {
        this.threeDVisualizer = new ThreeDVisualizer()
        this.resources = this.threeDVisualizer.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            this.floor = new Floor(this.threeDVisualizer.mdPlaneRenderer)
            this.photo = new Photo(this.threeDVisualizer.angleViewRenderer)
            this.floor2 = new Floor(this.threeDVisualizer.depthViewRenderer)
            this.photo2 = new Photo(this.threeDVisualizer.unrolledViewRenderer)
            this.environment1 = new Environment(this.floor.scene)
            this.environment2 = new Environment(this.photo.scene)
            this.environment3 = new Environment(this.floor2.scene)
            this.environment4 = new Environment(this.photo2.scene)
        })
    }

    update()
    {
        //if(this.fox)
        //    this.fox.update()
    }
}