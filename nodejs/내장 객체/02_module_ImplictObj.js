// console.log(global);
// console.log(console);

console.time("시간");
console.time("시간2");
console.log("안녕");
console.log("반가워");
console.timeEnd("시간2");
console.timeEnd("시간");
console.table({a:1, b:2});
console.table([{a:1, b:2}]);
console.table([{a:2},{a:4},{b:3}]);

const obj = {
    out : {
        in : {
            key : "value"
        }
    }
};
console.dir(obj,{color:true,depth:0});
console.dir(obj,{color:true,depth:1});
console.dir(obj,{color:true,depth:2});