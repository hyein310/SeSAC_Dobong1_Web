const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
// const session = require("express-session");


// --------- 세션 연결

/* const userInfo = { userId: "admin", userPw: "1234" };

app.use(
    session({
        secret: "secretKey",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 10, // 10분 뒤 세션 종료
            httpOnly: true,
        },
    })
);

app.get("/login", (req, res) => {
    res.render("login");
});


// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
    const user = req.session.user;

    if(user) { res.render("index", { isLogin:true, user:user }); }
    else { res.render("index", { isLogin:false }); }
});


// 1. 세션 설정
app.post("/login", (req, res) => {
    // user 라는 세션 설정
    
    if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
        // 로그인 진행
        req.session.user = req.body.id; 
        console.log(req.session);

        res.redirect('/');
    }
    else {
        res.send(`
        <script>
            alert("아이디 또는 비밀번호가 일치하지 않습니다.다시 시도해주세요.");
            document.location.href='/login';
        </script>`);
    }
});

app.get("/logout", (req, res) => {
    const user = req.body.user;
    if(user) {
        req.session.destroy((err)=> {
            if(err) throw err;

            res.redirect('/');
        });
    }
    else {
        // 세션 만료된 회원
        res.send(`
        <scrpit>
            alert('이미 세션이 완료되었습니다.');
            document.loation.href='/';
        </script>`)
    }
}); */

module.exports = router;