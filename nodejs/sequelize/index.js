const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/static",express.static("/static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use("/",router);
app.get("*",function(req,res) {
    res.send("없는 주소 입니다.");
})

app.listen(port, function() {
    console.log(port,"번 열기");
})