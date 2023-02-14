import React from 'react';

export default function Props({ dataArr }) {
  return (
    <div>
      {dataArr.map((el, index) => (
        <div key={index}>
          <p style={{ fontWeight: 'bold' }}>
            {el.color} {el.shape}
          </p>
          <div>{el.name}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}
