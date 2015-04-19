import engine from 'engine'
import preload from './loader'
import { create, update } from './renderer'

var canvas, game

// read canvas element from index
canvas = document.getElementById('screen')
// create instance of engine as framework
game = new engine.Application(canvas, {})

// bootstrap
game.start()
// bootstrap canvas
game.canvas = canvas
console.info && console.info('Bootstrap of game completed!')

// prep
preload()
console.info && console.info('Prepared game environment!')

// setup
create()
console.info && console.info('Set up game entities!')

// render
game.on('update', update)
console.info && console.info('Game rendering started!')

// export bootstrapped game
export { game as default }
