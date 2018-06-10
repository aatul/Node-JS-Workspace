const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,"Server Created");
    res.end("OK");
});

// Listening Server Port 
server.listen(3000,()=>{
    console.log('Listening on port 3000');
});