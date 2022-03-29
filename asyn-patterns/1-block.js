const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        //BLOCKING CODE
        for(let i = 0; i<10; i++){
            for(let j = 0; j <10; j++ ){
                console.log(`${i} ${j}`)
            }
        }
        res.end('Welcome to our aboutpage')
    }
    res.end(`
    <h1>Ooops!!</h1>
    <p>we cant find the page you're loooking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000, () => { //the process stays alive because listen is asynchronous
    console.log('Server is listening to port 5000')
})

