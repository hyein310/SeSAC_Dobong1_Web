const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");
const SECRET = "gYbQho2A9lIxHBGxhI72Tzrtvv1zrl" // 랜덤 문자열

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

userInfo = {id: 'cocoa', pw: '1234', name: '코코아', age: 18};

app.get('/',(req, res)=> {
    res.render("index");
});
app.get('/login',(req, res)=> {
    res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res)=> {
    try{
    // console.log(req.body);
    // res.send("서버 콘솔 확인");

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;

    if(id===realId && pw === realPw) {
        // jwt 인증 토큰 생성
        // const token = jwt.sign(payload, secret/private key, option);
        const token = jwt.sign({id: id}, SECRET);
        console.log(token);
        res.send({result:true, token: token}) // 키랑 값이랑 똑같다면 생략해서 하나로 표기해도 됨
    }
    else {
        res.send({resulst:false, message: '로그인 정보가 올바르지 않습니다'});
    }
    }
    catch (err) {
        console.log("POST /login", err);
        res.status(500).send("server error");
    }
});

// token 정보 확인
app.post("/token", (req, res)=> {

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
