const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");
app.use('/static',express.static('static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req,res){
    res.render("06_fetch1");
})
//axios
app.get('/get', function(req,res) {
    console.log(req.query);
    if (req.query.id == "nana11" && req.query.pw == "1212" ) {
        res.send("로그인 성공");
    } else {
        res.send("다시 입력하세요");
    }
})
app.post('/post', function(req,res) {
    console.log(req.body);
    if (req.body.id == "nana11" && req.body.pw == "1212" ) {
        res.send("로그인 성공");
    } else {
        res.send("다시 입력하세요");
    }
})

//ajax
app.get('/get1', function(req,res) {
    console.log(req.query);
    if (req.query.id == "nana11" && req.query.pw == "1212" ) {
        res.send("로그인 성공");
    } else {
        res.send("다시 입력하세요");
    }
})
app.post('/post1', function(req,res) {
    console.log(req.body);
    if (req.body.id == "nana11" && req.body.pw == "1212" ) {
        res.send("로그인 성공");
    } else {
        res.send("다시 입력하세요");
    }
})

//fetch
app.get('/get2', function(req,res) {
    console.log(req.query);
    res.send(req.query);
})
app.post('/fetch2', function(req,res) {
    console.log(req.body);
    res.send(req.body);
})

app.listen(port,function() {
    console.log(port+"번 실행")
})