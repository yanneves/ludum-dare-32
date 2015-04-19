import engine from 'engine'
import game from './game'

// define entities
import * as entity from './models/entities'
var camera, light, player, asteroid,
  radius = 20,
  height = 5,
  angle = 0

/**
 *  Game entities and mechanics setup
 *    - attaches starting entities to game
 *    - attaches camera and light entities
 *    - sets camera in default position
 *    - sets lighting in default state
 */
export function create () {

  // create default entities
  camera = new entity.Camera(),
  light = new entity.Light()

	// attach entities to screen
  game.root.addChild(camera)
  game.root.addChild(light)

  game.assets.loadFromUrl(entity.assets['shwip'], 'model')
    .then(function (results) {
      player = new entity.Player(results.resource)
      game.root.addChild(player)
    })

  game.assets.loadFromUrl(entity.assets['asteroid_1'], 'model')
    .then(function (results) {
      asteroid = new entity.Asteroid(results.resource)
      game.root.addChild(asteroid)
      asteroid.setPosition(10, 0, 0)
    })

  // camera default position
  camera.setPosition(0, 0, 30)

  // lighting default setting
  // light.setEulerAngles(45, 0, 0)

}

/**
 *  Game rendering loop
 *    - infinitely pans camera
 *    - infinitely rotates asteroid
 */
export function update (deltaTime) {

  // camera.rotateLocal(0, 3 * deltaTime, 30 * deltaTime)

  if (player) {
    light.lookAt(player.getPosition())
    camera.lookAt(player.getPosition())
    player.rotate(10 * deltaTime, 20 * deltaTime, 30 * deltaTime)
  }

  if (asteroid)
    asteroid.rotate(30 * deltaTime, 40 * deltaTime, 50 * deltaTime)

  angle = angle > 360 ? angle - 360 : angle + 20 * deltaTime
  light.rotateLocal(90, 0, 0)
  light.setLocalPosition(
    radius * Math.sin(angle*pc.math.DEG_TO_RAD),
    height,
    radius * Math.cos(angle*pc.math.DEG_TO_RAD)
  )

}
