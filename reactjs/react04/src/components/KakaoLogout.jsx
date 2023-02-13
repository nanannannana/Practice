import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);
  return <div>로그아웃 진행중</div>;
}
