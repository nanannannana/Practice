var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function(user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, "Yeji");
if (user !== user2) {
    console.log("사용자가 변경되었습니다");
}
console.log(user.name, user2.name);
console.log(user == user2);