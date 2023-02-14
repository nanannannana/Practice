var obj = {
    name: "yeji",
    age: 23,
    habbit: {
        first: "listening to music",
        second: "running"
    }
};

var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var obj2 = copyObject(obj);
obj2.name = "nana";
if (obj2.name !== obj.name) {
    console.log("이름이 바뀌었습니다.");
}
obj2.habbit.first = "meeting friends"
if (obj2.habbit.first !== obj.habbit.first) {
    console.log("첫 번째 취미가 바뀌었습니다.");
} else {
    console.log("첫 번째 취미가 바뀌지 않았습니다.")
}