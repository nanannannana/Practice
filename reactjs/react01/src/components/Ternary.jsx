import React, { useState } from 'react';

export default function Ternary() {
  const [emoji, setEmoji] = useState(true);
  console.log(emoji);
  return (
    <div>
      <p>{emoji ? '🖤' : '🤍'}</p>
      <button onClick={() => setEmoji(!emoji)}>클릭!</button>
    </div>
  );
}
