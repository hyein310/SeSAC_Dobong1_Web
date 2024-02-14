const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("/views", "views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");  //routes 파일명 이후 파일 이름이 index이면 뒤에 파일명 생략가능
app.use("/", indexRouter); // 전체 경로는 indexRouter에서 처리

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// page not found, 404 페이지는 맨 마지막에 설정
// 설정해둔 페이지가 아닌 다른 페이지일 경우
app.get("*", (req, res) => {
  res.render("404");
});


app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});







/* 

// localhost: 8080/ 경로를 기본으로 하는 경로는
// indexRouter에서 처리
// 라우팅 ("/") + 컨트롤러 (req,res => {..})
app.get("/", (req, res) => {
    res.render("index");
});

// GET /comment/:id (params 사용)  >> comment.ejs
app.get("/comment/:id", (req, res) => {
    const commentId = req.params.id;  // 1,2,3,4

    // 첫번째 방법
    // // 1보다 작거나 댓글 전체 수보다 클 때
    // if(commentId<1 || commentId>comments.length) {
    //     return res.render("404");
    // };

    // // 숫자인지 숫자가 아닌지 판별
    // if(isNaN(commentId)) {
    //     return res.render("404");
    // }

    // 두번째 방법
    // 한번에 처리
    if(!comments[commentId - 1]) return res.render("404");

    res.render('comment');
});

// GET /comments
app.get("/comments", (req, res) => {
    console.log(comments);
    res.render("comments", {commentInfo: comments});
});



*/