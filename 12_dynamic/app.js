const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// bodypaser 사용 위한 코드
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get -> query, post -> body

app.get("/", (req, res) => {
    console.log(req.query);
    res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
    console.log(req.query);
    // res.render("ajax 응답완료");
    res.send({
        name: req.query.name,
        gender: req.query.gender,
    })
    // res.send(req.query); 와 같음
});

app.post("/ajax", function (req, res) {
    console.log(req.body);
    res.send(req.body);
    // bodyparser을 쓰기 위해서는 설정해줘야함
})


// axios
app.get('/prac1', function (req, res) {
    console.log(req.url);
    res.render("prac1");
})

app.get('/prac2', function (req, res) {
    res.render("prac2");
})

app.get("/axios", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post("/axios", function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

//fetch
app.get("/fetch", function (req, res) {
    console.log(req.query);
    res.send("fetch 응답완료~")
})

app.post("/fetch", function (req, res) {
    console.log(req.body);
    res.send(req.body);
})



// 실습문제
app.get("/prac1", (req, res) => {
    res.render("/prac1");
});

app.get("/prac2", (req, res) => {
    res.render("/prac2");
});

app.get("/axios-prac1", (req, res) => {
    console.log('응답');
    console.log(req.query);
    res.send(req.query);
});

app.post("/axios-prac2", (req, res) => {
    console.log('응답');
    console.log(req.body);

    //서버의 계정정보와, 클라이언트의 계정정보가 일치하는지 
    const { id: clientId, pw: clientPw } = req.body;
    if (clientId === id && clientPw === pw) {
        res.send({
            userInfo: req.body,
            isSuccess: true,
        });
    }
    else { }
    res.send({ isSuccess: false });
});




//open api 사용
app.get("/open-api", function (req, res) {
    res.render('api');
});

app.listen(PORT, () => {
    console.log((`http://localhost:${PORT}`));
});
// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.render("result");
// });