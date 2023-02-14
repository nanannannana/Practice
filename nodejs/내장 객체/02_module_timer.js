const func1 = setTimeout(function() {
    console.log("setTimeout/1.5초 후 실행");
},1500);
const func2 = setInterval(function() {
    console.log("setInterval/1초마다 실행");
},1000);
const func3 = setImmediate(function() {
    console.log("setImmediate/즉시 실행");
});
const func4 = setImmediate(function() {
    console.timeLog("setImmediate/즉시실행2");
});
setTimeout(function() {
    clearTimeout(func1);
    clearInterval(func2);
},3000);
clearImmediate(func4);

