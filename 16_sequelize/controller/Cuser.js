// TODO: 컨트롤러 코드
const models = require("../models");

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
    // console.log("controller",req.body); //{userid, pw, name}
    // User.post_signup(req.body, () => {
    //     res.end();
    // });

    models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    })
        .then((result) => {
            // console.log("회원가입 요청", result);
            console.log(result.id);
            res.end();
        })
};
// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
    // console.log("controller",req.body); //{userid, pw}
    // User.post_signin(req.body, (result) => {
    //     console.log("여기는 controller 입니다.", result);

    //     // 로그인 성공시, true
    //     // 로그인 실패시, false
    //     if (result.length > 0 ) {
    //         res.send(true);
    //         // res.send({isLogin:true, userInfo:result:[0]});
    //     }

    //     else { res.send(false) };
    // });

    // [ sequelize 적용 ]
    // findOne은 LIMIT 없어도 ok
    models.User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw,
        }
    })
        .then((result) => {
            // result: findOne을 이용해서 찾은 결과를 반환 or 데이터를 못찾았다면 null 반환
            console.log("로그인 요청", result); //findOne 이기 때문에 객체 하나만 찾아옴..findAll일경우 배열로 반환
            if (result) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        })
        ;
};

exports.post_profile = (req, res) => {
    // console.log("req.body",req.body); //{userid}
    // User.post_profile(req.body.userid, (result) => {
    //     console.log(result); // {id, userid, name pw}
    //     res.render("profile", { data: result });  //{} 배열이 아닌 객체 형태
    // });

    // [ sequelize 적용 ]
    models.User.findOne({
        where: {
            userid: req.body.userid,
        },
    })
        .then((result) => {
            console.log("프로필 페이지 요청", result);
            res.render("profile", { data: result });
        })
};

// 회원 정보 수정
exports.edit_profile = (req, res) => {
    // console.log("edit controller",req.body); // {id, pw, name}
    // User.edit_profile(req.body, () => {
    //     res.end();
    // });

    // [ sequelize 적용 ]
    models.User.update({
        name: req.body.name,
        pw: req.body.pw,
    },
    {
        where: {
            id: req.body.id,
        }
    })
    .then((result) => {
        // [1] or [0] : 성공 or 실패
        // where조건에 해당하는 레코드를 못찾았을 때 실패
        console.log("회원 정보 수정", result);
        res.end();
    })
};

// 회원 정보 삭제
exports.delete_profile = (req, res) => {
    // console.log("delete controller",req.body); // {id: form.id.value}
    // User.delete_profile(req.body.id, () => {
    //     res.end();
    // });

    // [ sequelize 적용 ]
    // destroy는 where절만 있으면 된다.
    models.User.destroy({
        where:{
            id: req.body.id,
        }
    })
        .then((result) => {
            // 1 or 0 : 성공 or 실패
            console.log("회원 정보 삭제", result);
            res.end();
        })
};