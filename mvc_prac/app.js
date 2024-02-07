const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("/views", "views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// 404 페이지
app.get("*", (req, res) => {
  res.render("404");
});


app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});