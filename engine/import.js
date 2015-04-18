// TODO: would love for this to work without import script
console.info && console.info('PlayCanvas engine imported!')

// ES6 module loader wrapper,
// for pre-built PlayCanvas Engine
const engine = pc
export { engine as default }
