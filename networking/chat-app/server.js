const net = require('node:net');
const port = 3008;
const address = '127.0.0.1';
const server = net.createServer();
const clients = [];
server.on('connection',(socket)=>{
    console.log('A new connection is made to the server');
    socket.on('data', (data)=>{
        console.log("Message from User: ", data.toString('utf-8'));
        clients.map((s) => {
            s.write(data);
        });
    });
    
    clients.push(socket);
});
server.listen(port,address,()=>{
    console.log("Server is running at",server.address());
});