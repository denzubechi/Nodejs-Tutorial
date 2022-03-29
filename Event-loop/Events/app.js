const http = require('http');

const server = http.createServer()


//listens to an events
//Using the events emitter API
server.on('request',(req, res)=>{
    res.end('Welcome')
})
server.listen(5000)