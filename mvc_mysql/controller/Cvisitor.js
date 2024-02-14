const visitor = require("../model/Visitor");

exports.main = (req, res) => {
    res.render("index");
};

exports.getVisitors = (req, res) => {
    // DB 연결 전, 임시 데이터베이스
    // visitor.ejs 에 데이터 보내주기
    // console.log(visitor.getVisitors());
    // res.render("visitor", {data: visitor.getVisitors() });


    // DB 연결 후!
    // DB 정보 가지고 온 후, db
    visitor.getVisitors((result)=>{
        console.log("CVisitor.js 전체 목록:: ", result);
        res.render("visitor", {data: result});
    });
};