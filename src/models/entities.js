import engine from 'engine'

// assets paths config
export const assets = {
  'shwip': 'assets/player/shwip/shwip.json',
  'asteroid_1': 'assets/asteroids/asteroid_1/asteroid_1.json'
}

/**
 *  Default camera entity
 */
export function Camera () {
  var camera = new engine.Entity()

  camera.addComponent('camera', {
    clearColor: new engine.Color(0.1, 0.1, 0.1)
  })

  return camera
}

/**
 *  Default lighting entity
 */
export function Light () {
  var light = new engine.Entity()
  light.addComponent("light", {
    type: "spot",
    color: new engine.Color(1, 1, 1),
    outerConeAngle: 60,
    innerConeAngle: 40,
    range: 100,
    intensity: 1,
    castShadows: true,
    shadowBias: 0.005,
    shadowResolution: 2048
  })

  return light
}

/**
 *  Player entity
 *  @params resource
 */
export function Player (resource) {
  var player = new engine.Entity()
  player.addComponent('model')
  player.model.model = resource

  return player
}

/**
 *  Asteroid entity
 *  @params resource
 */
export function Asteroid (resource) {
  var asteroid = new engine.Entity()
  asteroid.addComponent('model')
  asteroid.model.model = resource

  return asteroid
}
