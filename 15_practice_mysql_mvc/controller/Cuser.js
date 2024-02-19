// TODO: 컨트롤러 코드
const User = require("../model/User");

// GET /user
exports.main = (req, res) => {
    res.render("index");
};
// GET /user/signin
exports.get_signin = (req, res) => {
    res.render("signin");
};
// GET /user/signup
exports.get_signup = (req, res) => {
    res.render("signup");
};



// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
    console.log("controller",req.body); //{userid, pw, name}
    User.post_signup(req.body, () => {
        res.end();
    });
};
// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
    console.log("controller",req.body); //{userid, pw}
    User.post_signin(req.body, (result) => {
        console.log("여기는 controller 입니다.", result);

        // 로그인 성공시, true
        // 로그인 실패시, false
        if (result.length > 0 ) {
            res.send(true);
            // res.send({isLogin:true, userInfo:result:[0]});
        }

        else { res.send(false) };
    });
};

exports.post_profile = (req, res) => {
    console.log("req.body",req.body); //{userid}
    User.post_profile(req.body.userid, (result) => {
        console.log(result); // {id, userid, name pw}
        res.render("profile", { data: result });  //{} 배열이 아닌 객체 형태
    });
};

// 회원 정보 수정
exports.edit_profile = (req, res) => {
    console.log("edit controller",req.body); // {id, pw, name}
    User.edit_profile(req.body, () => {
        res.end();
    });
};

// 회원 정보 삭제
exports.delete_profile = (req, res) => {
    console.log("delete controller",req.body); // {id: form.id.value}
    User.delete_profile(req.body.id, () => {
        res.end();
    });
};