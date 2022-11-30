const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "12123",
    database: "db"
})

app.set("view engine","ejs");
app.get("/",function(req,res) {
    cnn.query("select * from user", function(err,result) {
        if (err) throw err;
        console.log(result);
        res.render("mysql",{rows:result});
    })
})
app.listen(port, function(req,res) {
    console.log(port,"번 실행");
})
