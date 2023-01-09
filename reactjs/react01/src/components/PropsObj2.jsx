import React from 'react';

export default function PropsObj2(props) {
  if (props.arrObj) {
    return (
      <div>
        {props.arrObj.map(({ shape, color, name }) => (
          <div key={shape}>
            <p style={{ color: `${color}`, fontWeight: 'bolder' }}>
              {color} {shape}
            </p>
            <p>{name}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>값이 없습니다.</div>;
  }
}
