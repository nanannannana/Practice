const express = require("express");
const app = express();
const port = 8080;
const multer = require("multer");
const path = require("path");

app.set("view engine","ejs");
app.use("/uploads",express.static("uploads"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//파일 저장 경로 및 이름 변경(multer 미들웨어 사용)
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done) {
            done(null, 'uploads');
        },
        filename(req,file,done) {
            const ext = path.extname(file.originalname);
            const filename = req.body.filename + ext;
            done(null,filename);
        }
    })
})

app.get('/', function(req,res) {
    res.send("hello");
})
//http모듈로 file업로드하기
app.get('/file', function(req,res) {
    res.render("07_file1");
})
app.post('/file-single',upload.single('userfile'),function(req,res) {
    console.log(req.file);
    console.log(req.body);
    res.render("07_file2", {
        filename: req.file.filename
    });
})

//axios모듈로 file업로드하기
app.get('/file2', function(req,res) {
    res.render("07_file3");
})
app.post("/file_axios", upload.single("userfile"),function(req,res) {
    console.log(req.body);
    console.log(req.file);
    res.send(req.file.filename);
})
app.listen(port,function(req,res) {
    console.log(port,"번 열기");
})