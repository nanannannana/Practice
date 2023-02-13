import React from 'react';
import KAKAO_AUTH_URL from '../services/Login';
import LOGOUT_URL from '../services/Logout';

export default function Main() {
  return (
    <>
      <button onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        카카오 로그인
      </button>
      <button onClick={() => (window.location.href = LOGOUT_URL)}>
        카카오 로그아웃
      </button>
    </>
  );
}
