import React from 'react';
import KAKAO_AUTH_URL from '../services/Login';
import LOGOUT_URL from '../services/Logout';
import axios from 'axios';

export default function Main() {
  const Logout = () => {
    window.location.href = LOGOUT_URL;
    localStorage.removeItem('token');
  };
  const Unlink = () => {
    axios
      .post('http://localhost:4000/unlink', {
        data: localStorage.getItem('token'),
      })
      .then(() => {
        localStorage.removeItem('token');
        alert('회원탈퇴 완료!');
      });
  };

  return (
    <>
      <button onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        카카오 로그인
      </button>
      <button onClick={Logout}>카카오 로그아웃</button>
      <button onClick={Unlink}>카카오 탈퇴</button>
    </>
  );
}
