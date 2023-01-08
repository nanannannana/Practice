import React, { useState } from 'react';

export default function FuncComponent() {
  const [text, setText] = useState('hello');
  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <p>{text}</p>
      <button onClick={() => setText('click!')}>클릭!</button>
    </div>
  );
}
