const path = require('path');
const file = __filename;
console.log("path.sep: ", path.sep);
console.log("path.delimiter: ", path.delimiter);
console.log("path.dirname(): ", path.dirname(file));
console.log("path.extname(): ", path.extname(file));
console.log("path.basename(): ", path.basename(file));
console.log("path.parse(): ", path.parse(file));

const url = require('url');
console.log("url: ",url); //url 모듈 함수 확인
console.log("url.parse: ",url.parse);  // [Function: urlParse]
var obj = url.parse("https://shopping.naver.com/hotdeal/p/luckto/index.naver?id=3750201&cat=1064&sort=pplr");
console.log("obj: ",obj);
console.log("url.format(): ",url.format(obj));
console.log("protocol: ",obj.protocol);
console.log("--------------------------------");

console.log("url.URL: ", url.URL); // [class URL]
// URL생성자는 new를 사용하여 호출
var obj2 = new url.URL("https://shopping.naver.com/hotdeal/p/luckto/index.naver?id=3750201&cat=1064&sort=pplr");
console.log("searchParams: ", obj2.searchParams); //?(물음표) 뒤 부분의 처리를 도와주는 모듈
console.log("searchParams.getAll(): ", obj2.searchParams.getAll('id')); //key에 대한 값을 보여줌
console.log("searchParams.keys: ",obj2.searchParams.keys()); // 전체 key값 보여줌
console.log("searchParams.has: ", obj2.searchParams.has("cat")); // cat이라는 key의 존재 여부 확인(true/false)
console.log("searchParams.keys: ",obj2.searchParams.values()); // 전체 value값 보여줌
console.log("--------------------------------");
obj2.searchParams.append('puppy','cute'); // puppy라는 key추가, 값은 cute
console.log("puppy check: ", obj2.searchParams.has("puppy")); // 잘 들어갔는지 확인