import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  const params = useParams();
  console.log(params);
  const { boardID } = params;
  return (
    <>
      <h1>contents {boardID}</h1>
    </>
  );
}
