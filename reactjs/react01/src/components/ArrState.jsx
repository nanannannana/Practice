import React, { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([1, 2, 3]);
  return (
    <div>
      <p>{state[0]}</p>
      <button
        onClick={() => {
          state[0] = 5;
          const copyState = [...state];
          setState(copyState);
        }}
      >
        클릭
      </button>
    </div>
  );
}
