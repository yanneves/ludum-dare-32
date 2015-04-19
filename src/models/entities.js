import engine from 'engine'

// assets paths config
export const assets = {
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
  light.addComponent('light')

  return light
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
