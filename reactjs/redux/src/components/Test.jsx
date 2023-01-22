import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>몸무게: {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        몸무게 증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        몸무게 감소
      </button>
    </>
  );
}
