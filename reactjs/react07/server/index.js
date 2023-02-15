const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

// let users = {};
// let socketToRoom = {};
// const maximum = 4;
io.on('connection', (socket) => {
  console.log('connect server');
  // socket.onAny((event) => console.log(`Socket Event:${event}`));
  socket.on('join_room', (roomID) => {
    socket.join(roomID);
    // console.log(socket.rooms); // Set { socket.id, roomName}
    socket.to(roomID).emit('welcome');
  });
  socket.on('offer', (offer, roomID) => {
    socket.to(roomID).emit('offer', offer);
  });
  socket.on('disconnect', () => console.log('sever disconnect'));
});

http.listen(4000, () => console.log('4000 server running'));
