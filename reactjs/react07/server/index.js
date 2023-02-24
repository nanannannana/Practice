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
const fs = require('fs');

app.use(cors());

let users = {};
let socketToRoom = {};
const maximum = 2;
io.on('connection', (socket) => {
  console.log('connect server');
  // socket.onAny((event) => console.log(`Socket Event:${event}`));
  socket.on('join_room', (roomID) => {
    // 1-1.기존에 roomID번방이 있는 경우,
    if (users[roomID]) {
      // 현재 roomID번방의 인원 수
      const currentRoomLength = users[roomID].length;
      // 인원 초과 -> room_full이벤트 보냄
      // 자리 有 => 해당 방 배열에 사용자ID 추가
      currentRoomLength === maximum
        ? socket.to(socket.id).emit('room_full')
        : (users[roomID] = [...users[roomID], { userID: socket.id }]);
    } else {
      // 1-2.기존에 roomID번 방이 없는 경우, 방 생성 -> 사용자ID 추가
      users[roomID] = [{ userID: socket.id }];
    }

    // 2. 생성된 방 입장
    socket.join(roomID);
    // console.log(socket.rooms); // Set { socket.id, roomName}

    // 3. offer-answer를 위해, 방의 인원 수(자기 외) 프론트소켓에 전달
    const others = users[roomID].filter((user) => user.userID !== socket.id);
    socket.to(roomID).emit('welcome', others);
  });
  socket.on('offer', (offer, roomID) => {
    // console.log(offer, roomID);
    socket.to(roomID).emit('offer', offer);
  });
  socket.on('answer', (answer, roomID) => {
    socket.to(roomID).emit('answer', answer);
  });
  socket.on('ice', (ice, roomID) => {
    socket.to(roomID).emit('ice', ice);
  });
  socket.on('disconnect', () => console.log('sever disconnect'));
});

app.get('/delete', (req, res) => {
  // console.log(req.query);
  fs.unlinkSync(`../public/img/${req.query.filename}`);
  console.log('File is deleted');
  res.send(true);
});

http.listen(4000, () => console.log('4000 server running'));
