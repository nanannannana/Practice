import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function Test3({ socket }) {
  const { roomID } = useParams();
  const videoRef = useRef(null);
  const otherVideoRef = useRef(null);
  const connectionRef = useRef(null);
  //   const optionRef = useRef(null);

  // useState로 값을 줄 경우, 값이 바뀔 때마다 리렌더링
  // -> getVideoTracks메서드를 사용한 enabled/disabled불가능(muted, cameraOff)
  // 따라서, 변수로 값 지정
  let cameraOff = false;
  let muted = false;

  useEffect(() => {
    // * RTC Connection
    // peerConnection을 각 브라우저에 생성(peer-to-peer 연결)
    connectionRef.current = new RTCPeerConnection();
    getMedia();

    // socket - offer&answer
    socket.on('welcome', (users) => {
      if (users.length > 0) createOffer();
    });
    socket.on('offer', (offer) => createAnswer(offer));
    socket.on('answer', (answer) => getAnswer(answer));

    // socket - iceCandidate
    socket.on('ice', (ice) => {
      if (!connectionRef.current) return;
      console.log('received candidate');
      connectionRef.current.addIceCandidate(ice);
    });
  }, []);

  //1. 내 매체(음성, 비디오)를 화면에 공유 설정
  const getMedia = async () => {
    try {
      const myStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      videoRef.current.srcObject = myStream;

      // 오디오,영상 데이터들을 peerConnection에 삽입
      // = 각 브라우저의 카메라와 마이크의 데이터 stream을 받아 연결 안에 삽입
      myStream.getTracks().forEach((track) => {
        if (!connectionRef.current) return;
        connectionRef.current.addTrack(track, myStream);
      });

      // * IceCandidate
      // 인터넷 연결 생성(브라우저 서로 소통)
      // webRTC에 필요한 프로토콜, 멀리 떨어진 장치와 소통할 수 있게 하기 위함
      connectionRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          console.log('sent candidate');
          socket.emit('ice', e.candidate, roomID);
        }
      };

      // * 구add Stream 현track Stream
      connectionRef.current.ontrack = (e) => {
        // otherVideoRef.current.srcObject = e.streams[0];
        console.log("Peer's Stream: ", e.streams[0]);
        console.log('My Stream: ', videoRef.current.srcObject);
      };
    } catch (e) {
      console.log(e);
    }
  };

  // 2. offer&answer
  const createOffer = async () => {
    if (!connectionRef.current) return;
    try {
      // peerA는 offer를 생성 -> peerB에게 offer를 전송(socket를 통해)
      const offer = await connectionRef.current.createOffer();
      connectionRef.current.setLocalDescription(offer);
      console.log('sent the offer');
      socket.emit('offer', offer, roomID);
    } catch (e) {
      console.log(e);
    }
  };

  const createAnswer = async (offer) => {
    if (!connectionRef.current) return;
    try {
      console.log('recived the offer');
      console.log('sent the answer');
      // peerA에 관한 offer description받아 peerB에서 그 description 세팅
      connectionRef.current.setRemoteDescription(offer);
      const answer = await connectionRef.current.createAnswer();
      connectionRef.current.setLocalDescription(answer);
      console.log(connectionRef.current);
      // offer에 관한 answer를 보냄
      socket.emit('answer', answer, roomID);
    } catch (e) {
      console.log(e);
    }
  };

  const getAnswer = (answer) => {
    if (!connectionRef.current) return;
    try {
      console.log('recived the answer');
      // peerB가 peerA에게 전송한 answer description을 세팅
      connectionRef.current.setRemoteDescription(answer);
      console.log('current : ', connectionRef.current);
    } catch (e) {
      console.log(e);
    }
  };

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

  const muteClick = () => {
    videoRef.current.srcObject
      .getAudioTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    !muted ? (muted = true) : (muted = false);
  };

  const cameraOffClick = () => {
    videoRef.current.srcObject
      .getVideoTracks()
      .forEach((track) => (track.enabled = !track.enabled));
    !cameraOff ? (cameraOff = true) : (cameraOff = false);
  };

  return (
    <>
      <div>roomID: {roomID}</div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '400px', height: '400px' }}
      />
      <video
        ref={otherVideoRef}
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
