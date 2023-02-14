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

let users = {};
let socketToRoom = {};
const maximum = 4;
io.on('connection', (socket) => {
  console.log('connect server');
  socket.on('join_room', (data) => {
    //users[room]에는 room에 있는 사용자들이 배열 형태로 저장됨
    //1-1. room이 존재하는 경우, room 최대인원 확인 후 사용자 접속/미접속 판별
    //1-2. room이 존재하지 않는 경우, room 생성
    if (users[data.room]) {
      // 유저 수
      const length = users[data.room].length;
      // 방의 최대 인원을 충족시켰으면 더 이상 접속 불가
      if (length === maximum) {
        // 인원초과라면 룸이 다 찼다고 그 사용자에게 전달
        socket.to(socket.id).emit('room_full');
        return;
      }
      // 인원이 초대 인원보다 적으면 접속 가능
      users[data.room].push({ id: socket.id, email: data.email });
    } else {
      users[data.room] = [{ id: socket.id, email: data.email }];
    }

    // room 접속 시, 그 room명칭 저장
    socketToRoom[socket.id] = data.room;

    socket.join(data.room);
    console.log(`[${socketToRoom[socket.id]}]: ${socket.id} enter`);

    // 본인을 제외한 같은 room의 user array
    const usersInThisRoom = users[data.room].filter(
      (user) => user.id !== socket.id
    );
    console.log('usersInThisRoom: ', usersInThisRoom);

    // 본인에게 해당 user array를 전송
    // 새로 접속하는 user가 이미 방에 있는 user들에게 offer를 보내기 위해
    io.sockets.to(socket.id).emit('all_users', usersInThisRoom);
  });

  // 다른 user들에게 offer를 보냄(자신의 RTCSessionDescription)
  socket.on('offer', (data) => {
    socket.to(data.offerReceiveID).emit('getOffer', {
      sdp: data.sdp,
      offerSendID: data.offerSendID,
      offerSendEmail: data.offerSendEmail,
    });
  });

  // offer를 보낸 user에게 answer을 보냄 (자신의 RTCSessionDescription)
  socket.on('answer', (data) => {
    socket.to(data.answerReceiveID).emit('getOffer', {
      sdp: data.sdp,
      answerSendID: data.answerSendID,
    });
  });

  // 자신의 ICECandidate 정보를 signal(offer 또는 answer)을 주고 받은 상대에게 전달
  socket.on('candidate', (data) => {
    socket.to(data.candidateReceiveID).emit('getCandidate', {
      candidate: data.candidate,
      candidateSendID: data.candidateSendID,
    });
  });

  socket.on('disconnect', () => {
    console.log(`[${socketToRoom[socket.id]}]: ${socket.id} exit`);
    // disconnect한 user가 포함된 room명칭
    const roomID = socketToRoom[socket.id];
    // room에 포함된 유저
    let room = users[roomID];
    // user가 나가도 room 안에 다른 users가 있다면, romm에 user제외
    if (room) {
      room = room.filter((user) => user.id !== socket.id);
      users[roomID] = room;
    }
    // 어떤 user가 나갔는 지 room의 다른 user들에게 알림
    socket.broadcast.to(room).emit('user_exit', { id: socket.id });
    console.log(users);
  });
});

http.listen(4000, () => console.log('4000 server running'));
