const http = require('http');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    res.writeHead(200, {'ContentType': 'text/html; charset=utf-8'})
    if(req.url === '/users'){
        return res.end('Users list!')
    }
    if(req.url === '/posts'){
        return res.end('Posts list!')
    }
    res.end('Server works!')
})

server.listen(port, ()=> console.log('Server starts successfully'))