var obj = {
    name: "yeji",
    age: 23,
    habbit: {
        first: "listening to music",
        second: "running"
    }
};

//중첩된 객체에 관한 깊은 복사
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
obj2.habbit = copyObject(obj.habbit);
obj2.habbit.first = "meeting friends"
if (obj2.habbit.first !== obj.habbit.first) {
    console.log("첫 번째 취미가 바뀌었습니다.");
} else {
    console.log("첫 번째 취미가 바뀌지 않았습니다.")
}
console.log("-------------------");

var OBJ = {
    name: "yeji",
    age: 23,
    habbit: {
        first: "listening to music",
        second: "running"
    }
};

//객체의 깊은 복사를 수행하는 범용 함수
var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) { 
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]); //OBJ객체 안의 habbit객체의 프로퍼티를 복제하기 위해
        }
    }// } else {
    //     result = target; //target이 object type이 아닐 경우, target의 값을 바로 받음
    // }
    return result;
}
//target == null를 붙인 이유: typeof 명령어가 null값에 대해서도 object를 반환하기 때문

var OBJ2 = copyObjectDeep(OBJ);
OBJ2.name = "NANA";
if (OBJ2.name !== OBJ.name) {
    console.log("이름이 바뀌었습니다.2");
}
OBJ2.habbit.first = "MEETING FRIENDS";
if (OBJ2.habbit.first !== OBJ.habbit.first) {
    console.log("첫 번째 취미가 바뀌었습니다.2")
}