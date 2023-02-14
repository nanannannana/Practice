import React, { useState } from 'react';

export default function PropsObj3(props) {
  const [index, setState] = useState(0);
  const arr = props.arrObj[index];
  const Click = () => {
    if (index === props.arrObj.length - 1) return setState(0);
    return setState(index + 1);
  };
  return (
    <div>
      <p style={{ color: `${arr.color}`, fontWeight: 'bold' }}>
        {arr.color} {arr.shape}
      </p>
      <p>{arr.name}</p>
      <button onClick={Click}>클릭!</button>
    </div>
  );
}
