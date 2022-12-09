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
            res.send(true);
        } else {
            res.send(false);
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

exports.login = function(req,res) {
    res.render("login");
}
exports.login_suc = async function(req,res) {
    const errors = validationResult(req);
    if (errors.errors.length==0) {
        let result = await User.findAll({
            where: {id: req.body.id }
        });
        if (result.length==1) {
            res.send(true);
        }
    } else {
        if (errors.errors[0].param=="id") {
            res.send("err_id");
        } else if (errors.errors[0].param=="pw") {
            res.send("err_pw");
        }
    }
}


exports.info_modify = async function(req,res) {
    let data = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name
    };
    let result = await User.findAll({
        where: {id: req.body.id}
    })
    console.log(result[0]);
    if (result.length !== 0) res.render("modify", { info: result[0]});
}

//수정 전
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
exports.info_del = async function(req,res) {
    await User.destroy({
        where: {id: req.body.id}
    });
    res.send(true);
}