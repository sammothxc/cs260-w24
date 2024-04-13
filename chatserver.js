const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', { message: data.message, username: data.username });
  });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});