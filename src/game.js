// import Phaser from 'phaser'

import preload from './loader'
import { create, update } from './renderer'

console.log('Hello, world!')

preload()
create()
update()

document.write('Hello, wii!')

// export default new Phaser.Game(800, 600, Phaser.AUTO, 'ludum-dare-32', {
// 	preload: preload,
// 	create: create,
// 	update: update
// })
