import React from 'react';

export default function PropsArr2(props) {
  return (
    <div>
      {props.arr.map((el, index) => {
        console.log(el);
        return (
          <div key={index}>
            <p>{el}</p>
          </div>
        );
      })}
    </div>
  );
}
