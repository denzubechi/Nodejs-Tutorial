const http =require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('Welcome to our homepage')
}
if(req.url === '/about'){
    res.end('Welcome to our aboutpage')
}
res.end(`
<h1>Ooops!!</h1>
<p>we cant find the page you're loooking for</p>
<a href="/">back home</a>
`)
})
server.listen(5000)