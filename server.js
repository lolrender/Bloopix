// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an express app and server
const app = express();
const server = http.createServer(app);

// Create a new instance of socket.io for real-time communication
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle message from the client
    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('chat message', msg);  // Broadcast the message to all clients
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
