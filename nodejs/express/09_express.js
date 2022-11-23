const express = require("express");
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/static',express.static('static'));

app.get('/', function(req,res) {
    res.send("<h1>반갑습니다!</h1>");
})
app.get('/study1', function(req,res) {
    res.sendFile(__dirname+"/views/01_index1.html");
})
app.get('/study2', function(req,res) {
    res.render('02_ejs_template1');
})
app.get('/study3', function(req,res) {
    res.render('02_ejs_template2', {
        title: 'study3',
        data: ['안녕','반가워','정말로']
    });
})
app.get('/get', function(req,res) {
    res.render('03_form_get');
})
app.get('/getForm',function(req,res) {
    console.log(req.query);
    res.send('<h1>get 전송 완료!</h1>');
})
app.get('/post', function(req,res) {
    res.render('03_form_post');
})
app.post('/postForm', function(req,res) {
    console.log(req.body);
    res.render('03_form_post2', {data: req.body});
})

app.listen(port, function(req,res) {
    console.log(port+"번 포트 열기");
})