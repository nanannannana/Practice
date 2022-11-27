var obj = {
    name: "Yeji",
    age: 23,
    habbit: "listening to music"
};
var obj2 = ["name","age","habbit"]

for (var prop in obj) {
    console.log(prop,": ",obj[prop]);
}

for (var prop=0; prop<obj2.length ; prop++) {
    console.log(prop);
}