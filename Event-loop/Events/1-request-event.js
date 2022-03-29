const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`Data Received from ${name}, ${id}`)
})  //listens to an event

customEmitter.on('response', () => {
    console.log(`Some logic here`)
  })  //listens to an event
  

customEmitter.emit('response', 'john', 34) //Emit an evnt
//you first listen to an event then you emit the event
console.log('done')