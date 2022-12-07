const { User } = require("../model");
const { validationResult } = require("express-validator");

exports.main = function(req,res) {
    res.render("index");
}
exports.signup_ing = function(req,res) {
    res.render("signup");
}
exports.id_dupl = async function(req,res) {
    var dupl_flag = true;
    let result = await User.findAll({
        where: { id: req.body.id }
    });
    if (result.length==0) dupl_flag = false;
    res.send(dupl_flag);
}
exports.signup_suc = async function(req,res) {
    const errors = validationResult(req);
    console.log(errors.errors[0]);
    if (errors.errors.length==0) {
        var signup_flag = true;
        let result = await User.findAll({
            where: {id: req.body.id}
        });
        if (result.length==0) {
            let data = {
                id: req.body.id,
                pw: req.body.pw,
                name: req.body.name
            }
            await User.create(data);
            res.send(signup_flag);
        } else {
            res.send(signup_flag==false);
        }
    } else {
        if (errors.errors[0].param=="id") {
            res.send("err_id");
        } else if (errors.errors[0].param=="pw") {
            res.send("err_pw");
        } else if (errors.errors[0].param=="name") {
            res.send("err_name");
        }
    }
}
//         res.send(errors);


exports.login = function(req,res) {
    res.render("login");
}
exports.login_suc = async function(req,res) {
    const errors = validationResult(req);
    if (errors.errors[0].param=="id") {
        res.send("err_id");
    } else if (errors.errors[0].param=="pw"){
        res.send("err_pw");
    } else {
        let result = await User.findAll({
            where: { 
                id: req.body.id,
                pw: req.body.pw
            }
        });
        if (result.length>=1) {
            res.send(true);
        }
    }
}


exports.info_modify = function(req,res) {
    user.info_modify(req.body, function(rows) {
        if (rows.length>=1) res.render("modify", { info: rows[0] });
    })
}
exports.info_modify_suc = function(req,res) {
    const errors = validationResult(req);
    if (errors.errors.length==0) {
        user.info_modify_suc(req.body, function() {
            res.send(true);
        })
    } else {
        res.send(errors);
    }

}
exports.info_del = function(req,res) {
    user.info_del(req.body, function(result) {
        del_flag=false;
        if (result==1) del_falg = true;
        res.send(del_flag);
    })
}