const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        console.log(buffer, buffer.toString());
        socket.write('hi, client');
    })
});

server.listen(4000);