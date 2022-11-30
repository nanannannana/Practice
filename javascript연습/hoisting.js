function a() {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b() {};
}
a();