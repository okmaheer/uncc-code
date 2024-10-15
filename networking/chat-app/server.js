const net = require('node:net');
const port = 3008;
const address = '127.0.0.1';
const server = net.createServer();
server.on('connection',(socket)=>{
    console.log('A new connection is made to the server');
});
server.listen(port,address,()=>{
    console.log("Server is running at",server.address());
});