import _ from 'underscore'

console.log('Hello, world!')

import engine from '../engine/import'

console.dir(engine)

engine.prop = 'changed'

console.log(engine.prop)

import preload from './loader'
import { create, update } from './renderer'

preload()
create()
update()

document.write('Hello, PlayCanvas!')
