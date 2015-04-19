import engine from 'engine'
import game from './game'

/**
 *  Game environment prepare steps
 *    - sets canvas screen dimensions
 *    - sets canvas screen resolution
 *    - handle window responsiveness
 */
export default function () {

  // prepare canvas screen
  game.setCanvasFillMode(engine.FILLMODE_FILL_WINDOW)
  game.setCanvasResolution(engine.RESOLUTION_AUTO)

  // handle window resize
  engine.events.attach(window)
  // throttle resize event to reduce lag
  window.addEventListener('resize', function () {
    // propagate
    window.fire('resize')
    // recalculate game canvas on window resize
    game.resizeCanvas(game.canvas.width, game.canvas.height);
  })

}
