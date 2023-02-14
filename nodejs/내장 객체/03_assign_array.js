const list =["안녕","반가워",2];
[item1,  item2, item3] = list;

console.log(item1);
console.log(item2);
console.log(item3);
console.log("--------------");

var a, b;
[a,b] = ["안녕", "반가워"];
console.log(a);
console.log(b);
console.log("--------------");

var c, d;
[c="하하하",d="히히히"] = ["신난다!"];
console.log(c);
console.log(d);
console.log("--------------");

[item1, item2, item3 = "hello", item4 = "hi"] = list;
console.log(item1);
console.log(item4);
console.log("--------------");

var e = "coffee";
var f = "juice";
// [e,f] = ["juice", "coffee"];
[e,f]=[f,e];
console.log(e);
console.log(f);