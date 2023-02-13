import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function KakaoLogin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  let code = search.replace('?code=', '');

  useEffect(() => {
    if (!code) return;
    async function fetchData() {
      await axios
        .post('http://localhost:4000/access', { code: code })
        .then((res) => {
          localStorage.setItem('token', res.data);
          navigate('/');
        });
    }
    fetchData();
  });

  return <div>로그인 중</div>;
}
