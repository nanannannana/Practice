import React from 'react';
import { useEffect } from 'react';

export default function Test() {
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://service.iamport.kr/js/iamport.payment-1.2.0.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    // return () => {
    //   document.head.removeChild(jquery);
    //   document.head.removeChild(jquery);
    // };
  }, []);

  const Test = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init(`${process.env.REACT_APP_IMP}`);
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: new Date().getTime(),
        name: '요가하기',
        amount: 500,
        buyer_email: 'hello12@naver.com',
        buyer_name: '홍길동',
        buyer_tel: '010-7777-7777',
      },
      function (rsp) {
        if (rsp.success) {
          console.log(rsp);
        } else {
          console.log(rsp);
        }
      }
    );
  };
  return (
    <div>
      <button onClick={Test}>결제모듈 테스트</button>
    </div>
  );
}
