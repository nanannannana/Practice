import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function Test3({ socket }) {
  const { roomID } = useParams();
  const videoRef = useRef(null);
  const optionRef = useRef(null);

  // useState로 값을 줄 경우, 값이 바뀔 때마다 리렌더링
  // -> getVideoTracks메서드를 사용한 enabled/disabled불가능(muted, cameraOff)
  // 따라서, 변수로 값 지정
  let cameraOff = false;
  let muted = false;
  let myStream;

  // 화면 렌더링되면 메서드 실행
  useEffect(() => {
    const start = async () => {
      await getMedia();
      makeConnection();
    };
    start();
  });

  //진행중... 유저가 원하는 카메라로 전환할 수 있도록
  //   const getCameras = async () => {
  //     try {
  //       const devices = await navigator.mediaDevices.enumerateDevices();
  //       const cameras = devices.filter((device) => device.kind === 'videoinput');
  //       //   console.log(cameras);
  //       cameras.forEach((camera) => {
  //         optionRef.current.value = camera.deviceId;
  //         optionRef.current.innerText = camera.label;
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getCameras();

  // 내 매체(음성, 비디오)를 화면에 공유
  const getMedia = async () => {
    try {
      myStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      videoRef.current.srcObject = myStream;
    } catch (e) {
      console.log(e);
    }
  };
  //   getMedia();

  // RTC Connection
  let myPeerConnection;
  const makeConnection = async () => {
    // peerConnection을 각 브라우저에 생성(peer-to-peer 연결)
    myPeerConnection = new RTCPeerConnection();
    // 오디오,영상 데이터들을 peerConnection에 삽입
    // = 각 브라우저의 카메라와 마이크의 데이터 stream을 받아 연결 안에 삽입
    myStream
      .getTracks()
      .forEach((track) => myPeerConnection.addTrack(track, myStream));
  };

  const muteClick = () => {
    myStream
      .getAudioTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    !muted ? (muted = true) : (muted = false);
  };

  const cameraOffClick = () => {
    myStream
      .getVideoTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    !cameraOff ? (cameraOff = true) : (cameraOff = false);
  };

  useEffect(() => {
    // 누군가 room에 입장하면 찍히는 콘솔
    socket.on('welcome', async () => {
      // console.log('some joined')
      // peerA는 offer를 생성 -> peerB에게 offer를 전송(socket를 통해)
      const offer = await myPeerConnection.createOffer();
      myPeerConnection.setLocalDescription(offer);
      console.log('sent the offer');
      socket.emit('offer', offer, roomID);
    });

    // peerB는 peerA가 보낸 offer를 받음
    socket.on('offer', (offer) => {
      console.log(offer);
    });
  }, [socket]);

  return (
    <>
      <div>roomID: {roomID}</div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '400px', height: '400px' }}
      />
      <br />
      <button onClick={muteClick}>mute/unmute</button>
      <button onClick={cameraOffClick}>camera on/off</button>
      {/* <br />
      <select>
        <option ref={optionRef} />
      </select> */}
    </>
  );
}
