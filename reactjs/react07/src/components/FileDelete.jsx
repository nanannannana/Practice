import React from 'react';
import axios from 'axios';

export default function FileDelete() {
  const fileDelete = () => {
    axios.get('http://localhost:4000/delete', {
      params: { filename: 'exercise_icon.png' },
    });
  };

  return (
    <div>
      FileDelete
      <button onClick={fileDelete}>삭제</button>
    </div>
  );
}
