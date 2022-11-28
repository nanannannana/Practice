var obj = {
    a: 1,
    b: {
        c: null,
        d: [1,2]
    }
};

var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};
//JSON.stringify 메소드에 의해 target 객체를 json문자열로 변환
//그 다음 JSON.parse 메소드를 통해 json문자열을 객체로 변환
//target 객체를 json문자열로 변환했다가 다시 객체로 변환하는 과정에서 기존의 참조가 끊기고 새로운 주소를 생성하게 됨
//따라서 복사의 기능을 가능케 함
//단점: function을 undifined로 처리함, httpRequest로 받은 데이터를 저장한 객체를 복사할 때 등 순수한 정보만 다룰 때 활용

var obj2 = copyObjectViaJSON(obj);
obj2.b.c = "안녕";
obj2.b.d[1] = 5;
console.log(obj2);
console.log(obj2.b.c);
console.log(obj2.b.d[1]);