import engine from 'engine'
import game from './game'

// define entities
import * as entity from './models/entities'
var camera, light, asteroid

/**
 *  Game entities and mechanics setup
 *    - attaches starting entities to game
 *    - attaches camera and light entities
 *    - sets camera in default position
 *    - sets lighting in default state
 */
export function create () {

  // create default entities
  // cube = new entity.Cube(),
  camera = new entity.Camera(),
  light = new entity.Light()

	// attach entities to screen
  // game.root.addChild(cube)
  game.root.addChild(camera)
  game.root.addChild(light)

  game.assets.loadFromUrl(entity.assets['asteroid_1'], 'model')
    .then(function (results) {
      asteroid = new entity.Asteroid(results.resource)
      game.root.addChild(asteroid)
    })

  // camera default position
  camera.setPosition(0, 0, 20)
  // lighting default setting
  light.setEulerAngles(45, 0, 0)

}

/**
 *  Game rendering loop
 *    - infinitely pans camera
 *    - infinitely rotates asteroid
 */
export function update (deltaTime) {

  camera.rotate(0, 3 * deltaTime, 30 * deltaTime)

  if (asteroid)
    asteroid.rotate(10 * deltaTime, 20 * deltaTime, 30 * deltaTime)

}
