const obj = {
    key1: "value1",
    key2: "value2"
};
const {key1,key2,key3="value3"} = obj;
console.log(key1);
console.log(key2);
console.log(key3);
console.log("----------");

const obj2 = {
    a: "apple",
    b: "banana",
    c: "candy"
};
const { a, b:b2, c} = obj2;
console.log(a);
console.log(b2);
console.log(c);
console.log("------------");

const { b, ...rest} = obj2;
console.log(b);
console.log(rest);