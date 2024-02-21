// .env 사용하기 위해서는 config.js 가 필요하다
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const development = {
    username: process.env.DB_USERNAME,
    pasword: process.env.DB_PASSWORD,
    database: "sesac",
    host: "127.0.0.1",
    dialect: "mysql",
};

module.exports = { development };