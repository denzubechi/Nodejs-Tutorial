const http = require("http");
const { readFileSync} = require("fs")


//get all files
const homePage = readFileSync('./Express/index.html')
const homeStyle = readFileSync('./Express/bootstrap.css')
const homeJs = readFileSync('./Express/jquery.js')
const BootJS = readFileSync('./Express/bootstrap.js')



const server = http.createServer((req, res)=>{
    //const url = req.method
    const url = req.url
   if(url === '/'){
    console.log(req.url)
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write(homePage)
    res.end()
   }
   else if(url === '/about'){
    console.log(req.url)
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('<h1>This is my aboutpage</>')
    res.end()
   }
   else if(url === '/bootstrap.css'){
    console.log(req.url)
    res.writeHead(200, { 'content-type': 'text/css'})
    res.write(homeStyle)
    res.end()
   }
   else if(url === '/bootstrap.js'){
    console.log(req.url)
    res.writeHead(200, { 'content-type': 'text/js'})
    res.write(BootJS)
    res.end()
   }
   else if(url === '/jquery.js'){
    console.log(req.url)
    res.writeHead(200, { 'content-type': 'text/js'})
    res.write(homeJs)
    res.end()
   }
   else{
    console.log(req.url)
    res.writeHead(404, { 'content-type': 'text/html'})
    res.write(`
    <h1>Ooops!!</h1>
    <p>we cant find the page you're loooking for</p>
    <a href="/">back home</a>
    `)
    res.end()
   }
})
server.listen(5000)
console.log("port the server is listening to the prt 5000")