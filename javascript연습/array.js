var arr1 = [];
arr1.length = 3;
console.log(arr1);

var arr2 = new Array(3);
console.log(arr2);
console.log("=============")

var arr3 = [undefined,1];
var arr4 = [];
arr4[1] = 1;

//forEach(cb); -> 객체에서만 사용가능한 메소드; 배열의 요소들로 반복하여 작업을 수행
//cb(변수값, 인덱스값, 배열) -> 인수1과 2까지만 주로 사용
arr3.forEach(function(val,ind,arr) {
    console.log("val: ", val);
    console.log("ind: ", ind);
    console.log("arr: ", arr);
});
console.log("--------------")
arr4.forEach(function(val,ind) {
    console.log("val: ", val);
    console.log("ind: ", ind);
});
console.log("--------------")

//map(cb); -> 기존 배열 값으로 새로운 배열을 만드는 작업을 수행
//cb(변수값, 인덱스값, 배열)
arr3.map(function(val,ind){
    console.log(val+ind);
})  //NaN 2
console.log("--------------")
arr4.map(function(val,ind){
    console.log(val+ind);
})  //2
console.log("--------------")

arr3.filter(function(val) {
    console.log(!val);
})
console.log("--------------")
arr4.filter(function(val) {
    console.log(!val);
})
console.log("--------------")

//arr.reduce(cb) => 값을 누적하는 작업을 수행(더하기로 주로 사용됨)
//cb(누적값,현재값,인덱스,배열) { return 결과}, 초기값
//초기값을 입력하지 않으면 배열의 첫 번째 요소를 사용함
arr3.reduce(function(acc,cur,ind,arr){
    console.log(acc+cur+ind,arr);
    return acc+cur+ind;
}, ''); //undefined0 / undefined011
console.log("--------------")
arr4.reduce(function(acc,cur,ind,arr){
    console.log(acc+cur+ind,arr);
    return acc+cur+ind;
}, '');  // 11
