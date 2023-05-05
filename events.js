const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third)=>{
    console.log(`Message is: ${data}`)
    console.log(`Second arg is: ${second}`)
    console.log(`Third arg is: ${third}`)
})

const MESSAGE = process.env.MESSAGE || ''

if(MESSAGE){
    emitter.emit('message', MESSAGE, 123)
}else{
    emitter.emit('message', 'Message isnt exist')
}