const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('reponse', ()=>{
  console.log(`Data Received`)
})  //listens to an event

customEmitter.emit('response')
console.log('done')