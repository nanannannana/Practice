import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

// 소켓 연결
// const socket = io.connect('http://localhost:4000');
// // pc_config: RTCPeerConnection을 생성할 때의 config
// const pc_config = {
//   iceServers: [
//     {
//       urls: 'stun:stun.l.google.com:19302',
//     },
//   ],
// };
// const newPC = new RTCPeerConnection(pc_config);
// let localStream = MediaStream;

export default function Test2() {
  //   // pc: RTCPeerConnetion
  //   const [pc, setPc] = useState('');
  //   // socket: Signaling Server와 통신할 socket
  //   const [socket, setSocket] = useState('');

  //   // localVideoRef: 본인의 video, audio를 재생할 video 태그의 ref
  //   let localVideoRef = useRef(null);
  //   // remoteVideoRef: 상대방의 video, audio를 재생할 video 태그의 ref
  //   let remoteVideoRef = useRef(null);

  //   socket.on('all_users', (allUsers) => {
  //     // 자신을 제외한 같은 방의 모든 user목록을 받아옴
  //     let len = allUsers.length;
  //     for (let i = 0; i<len; i++) {
  //         createPeerConnection(
  //             allUsers[i].id,
  //             allUsers[i].email,
  //             socket,
  //             localStream,
  //         )
  //     }
  //   })

  return <div>ff</div>;
}
