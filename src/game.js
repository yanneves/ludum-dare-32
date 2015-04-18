import engine from '../engine/import'
import preload from './loader'
import { create, update } from './renderer'

console.log('Hello, world!')

var canvas = document.getElementById('screen'),
  game = new engine.Application(canvas, {})

// TODO: boostrap?
game.start()

// TODO: preloader?
game.setCanvasFillMode(engine.FILLMODE_FILL_WINDOW)
game.setCanvasResolution(engine.RESOLUTION_AUTO)

// TODO: create?
var cube = new engine.Entity()
cube.addComponent('model', { type: 'box' })

// TODO: create.camera?
var camera = new engine.Entity()
camera.addComponent('camera', {
  clearColor: new engine.Color(0.1, 0.1, 0.1)
})

// TODO: create.lighting?
var light = new engine.Entity()
light.addComponent('light')

game.root.addChild(cube)
game.root.addChild(camera)
game.root.addChild(light)

camera.setPosition(0, 0, 3)
light.setEulerAngles(45, 0, 0)

// TODO: update?
game.on('update', function (deltaTime) {
  cube.rotate(10 * deltaTime, 20 * deltaTime, 30 * deltaTime)
})

// TODO: update?
window.addEventListener('resize', function () {
  // recalculate game canvas on window resize
  game.resizeCanvas(canvas.width, canvas.height);
})

preload()
create()
update()
