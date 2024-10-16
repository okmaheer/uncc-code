const net =  require("net");
const readLine = require('readline/promises');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const socket = net.createConnection({host: "127.0.0.1", port:3008}, async () => {
    console.log('connected to the server');
    const message  = await rl.question("Enter your Message >");
    socket.write(message);

});

socket.on('data', (data)=>{
    console.log("Message: ", data.toString('utf-8'));
});

