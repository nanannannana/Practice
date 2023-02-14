const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "12123",
    database: "db"
})

cnn.query("select * from user", function(err,result) {
    if (err) throw err;
    console.log(result);
    // res.render("mysql",{rows:result});
})