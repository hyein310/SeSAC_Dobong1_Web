const express = require("express");
const app = express();

// console.log(process.env);

// .env에서 만들어둔 환경변수를 읽어오기 위한 설정
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.render("MYSQL 패스워드", process.env.MYSQL_PASSWORD);
    res.render("api key!", process.env.API_KEY);
    res.send("응답완료");
});

app.listen(PORT, () => {
    console.log(`${PORT}포트 입니다.`);
});

// npm run start:dev  --> package.json에서 start
// npm run start:prod --> package.json에서 start:prod

/*
링크 참고
https://www.daleseo.com/js-node-process-env/
*/