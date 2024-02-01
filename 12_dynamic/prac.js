const express = require("express");
const app = express();
const PORT = 8000;
let id, pw;


app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get("/", (req,res) => {
    console.log(req.query);
    res.render("prac1");
});

// "/axios-prac1"으로 들어오면 다음의 요청을 수행한다.

app.get("/axios-prac1", (req,res) => {
    console.log(req.query);
    console.log('응답!')
    res.send(req.query);
});

// res 반응은 then에 들어감

app.post("/axios-prac1", function (req,res) {
    console.log(req.body);
    res.render("prac2.ejs", {
        title: "POST",
        userInfo: req.body, //{id,pw}
    });
});


app.listen(PORT, () => {
    console.log((`http://localhost:${PORT}`));
});
