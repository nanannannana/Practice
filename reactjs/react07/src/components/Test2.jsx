import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Test2({ socket }) {
  const navigate = useNavigate();
  const inputValue = useRef(null);
  const handleRoomSubmit = () => {
    socket.emit('join_room', inputValue.current.value);
    navigate(`/test2/${inputValue.current.value}`);
  };

  return (
    <>
      <form>
        <input ref={inputValue} placeholder="room name" required type="text" />
        <button onClick={handleRoomSubmit}>Enter Room</button>
      </form>
    </>
  );
}
