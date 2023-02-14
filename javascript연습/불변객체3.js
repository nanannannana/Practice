var user = {
    name: 'Jaenam',
    gender: 'male'
};

var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    //for in 문법을 이용하여 result객체에 target객체의 프로퍼티들을 복사
    return result;
}
var user2 = copyObject(user);
user2.name = "Yeji"

if (user !== user2) {
    console.log("사용자가 변경되었습니다");
}
console.log(user.name, user2.name);
console.log(user == user2);
console.log(user2.gender);