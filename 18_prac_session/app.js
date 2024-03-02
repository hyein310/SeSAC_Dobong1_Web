const express = require("express");
const app = express();
const PORT = 8080;
const session = require("express-session");

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

const userInfo = { userId: "cocoa", userPw: "1234" };

// TODO: 세션 미들웨어 설정
const sessionConfig = {
    secret: "secretKey",
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10, // 10분 뒤 세션 종료
        httpOnly: true,
    },
};

app.use(session(sessionConfig));


// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
    /*
    로그인된 유저라면 { isLoigin:true, user:user }
    로그인 안된 유저라면 { isLoigin:false } 
    */

    const user = req.session.user; // 'hc'
    // 로그인이 된 유저라면 user에 hc이 담겨져 있고,
    // 로그인이 안된 유저라면 user는 undefined

    // TODO: user session을 불러오는 부분
    // user가 로그인됐는지 안됐는지 검사하는 부분
    console.log("유저 정보>> ",user);
    if(user) {
        // 세션에 user 라는 키가 있다면 로그인된 상태
        res.render("index", { isLogin:true, user:user });  // user에 세션 정보가 담겨져 있음(hc)
    }
    else { res.render("index", { isLogin:false }); }
});

app.get("/login", (req, res) => {
    res.render("login");
});

// TODO: 로그인 기능
// *1. 세션 설정
app.post("/login", (req, res) => {
    // user 라는 세션 설정
    console.log(req.body); //{id:'', pw:''}
    if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
        // 로그인 진행
        req.session.user = req.body.id; // user라는 키에 세션 설정
        console.log(req.session);
        /* 
        Session {
            cookie: {
            path: '/',
            _expires: 2024-02-21T06:39:11.284Z,
            originalMaxAge: 600000,
            httpOnly: true },
            user: 'hc'
        }
        */

        console.log(req.sessionID);
        // VXxKSaHTt3ZXYk9hqadV0xdpUb45iPx2

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

// TODO: 로그아웃 기능
// *3. 세션 삭제
app.get("/logout", (req, res) => {
    const user = req.body.user;
    if(user) {
        // 로그인된 회원 >> 로그아웃 시켜주기
        req.session.destroy((err)=> {
            if(err) throw err;

            res.redirect('/'); // 로그아웃 종료 후, 홈으로 이동
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
    // 1. 로그아웃 진행
    // 2. 메인페이지 렌더 (redirect)
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


/* req 객체
req.session.키 = 값 >> 세션 설정
req.session.키 >> 세션 사용 (로그인된 사람인지 확인할 때)
req.session.destroy(콜백) >> 세션 삭제 (로그아웃할 때)
*/