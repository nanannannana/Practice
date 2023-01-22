import React from 'react';
import { useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  return (
    <>
      <h1>몸무게: {weight}</h1>
    </>
  );
}
