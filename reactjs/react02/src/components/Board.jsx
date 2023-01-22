import React from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <>
      <h1>Board</h1>
      <Link to="1">
        <h3>Board 1</h3>
      </Link>
      <Link to="2">
        <h3>Board 2</h3>
      </Link>
    </>
  );
}
