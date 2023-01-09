import React from 'react';
import PropsArr2 from './PropsArr2';

export default function PropsArr1() {
  const Arr = ['yellow', 'circle', '노란색 공'];
  return (
    <div>
      <PropsArr2 arr={Arr} />
    </div>
  );
}
