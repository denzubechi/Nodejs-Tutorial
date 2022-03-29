const res = require('express/lib/response')
const http = require('http')

const server = http.createServer((req, res) =>{
    console.log('Request Event') 
    res.end("Hello World")
})
server.listen(5000, () => { //the process stays alive because listen is asynchronous
    console.log('Server is listening to port 5000')
})

