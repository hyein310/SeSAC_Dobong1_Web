const { Op } = require("sequelize")
const models = require("../models");
// const { User } = require("../models");


// GET /
exports.main = (req, res) => {
    if(!req.session.login){
        req.session.login = false
        req.session.idx = -1
    }
    res.render("index");
};
// POST /
exports.mainLogin = (req, res) => {
    res.render("index");
};

// GET /login
exports.getLogin = (req, res) => {
    console.log("로그인 요청입니다");
    res.render("login");
};

// GET /join
exports.getJoin = (req, res) => {
    res.render("join");
};

// POST /login
// {id,pw} = req.body
exports.postLogin = (req, res) => {

    let responseData;
    // if (req.body.id === models.User.id  && req.body.pw === models.User.pw) {
    //     req.session.login = req.body.id;
    // }
    models.User.findOne({
        where: {
            id: req.body.id,
            pw: req.body.pw,
        }
    })
    .then ((result) => {
        if (result) {
            console.log("로그인 성공창");
            res.send(true);
        }
        else {
            console.log("로그인 실패창");
            res.send(false);
        }
    })
};

// POST /join
exports.postJoin = (req, res) => {
    models.User.create({
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        nickname : req.body.nickname,
        email : req.body.email,
        phone : req.body.phone, 
    })
    .then((result) => {
        console.log("회원가입 완료", result.id);
        res.render("index");
    })
};
