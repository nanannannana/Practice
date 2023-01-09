import React from 'react';
import PropsObj2 from './PropsObj2';
import PropsObj3 from './PropsObj3';

export default function PropsObj1() {
  const Obj = [
    {
      shape: 'circle',
      color: 'green',
      name: '초록색 공',
    },
    {
      shape: 'square',
      color: 'purple',
      name: '보라색 상자',
    },
    {
      shape: 'triangle',
      color: 'black',
      name: '검정색 꼬깔',
    },
  ];
  return (
    <div>
      <PropsObj3 arrObj={Obj} />
    </div>
  );
}
