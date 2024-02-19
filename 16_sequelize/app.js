// sequelize 사용 위해서는
// npm i sequelize sequelize-cli mysql2
// npx sequelize init

const PORT = 8080;
const express = require("express");
const app = express();
const db = require("./models");

// middleware
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes");
app.use("/", indexRouter);
// const indexRouter = require('./routes/index')

// [추가] /user
const userRouter = require('./routes/user');
app.use('/user',userRouter);

// 404 error
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({force: false}).then((result)=>{
  // force: true 옵션은 위험하기 때문에 잘 사용하지 않음
  // console.log(result);
  console.log("DB 연결 성공");
})
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});