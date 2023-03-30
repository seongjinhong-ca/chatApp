const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>Welcome!</h1>');
})


server.listen(3001, '127.0.0.1', ()=>{
    console.log('Server running...');
});