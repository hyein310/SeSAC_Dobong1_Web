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

// POST /visitor
exports.postVisitor = (req, res) => {
    console.log(req.body);  // {id, name, comment}
    visitor.postVisitor(req.body, (result) => {
        console.log("Cvisitor.js post:: ",result);
        // res.send(result + " 번 등록 완료");
        res.send({id:result, name:req.body.name, comment:req.body.comment});
    });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);
    visitor.deleteVisitor(req.body.id, (result)=>{
        console.log("Cvisitor.js delete", result);
        console.log(result + "번 방명록 삭제 완료!");

        res.send("삭제 완료");
    });
}

// PATCH /visitor
exports.patchVisitor = (req, res) => {
    console.log(req.body); //{id, name, comment} 수정을 위해서는 3개 모두 필요함
    visitor.patchVisitor(req.body, (result)=>{
        console.log("Cvisitor.js patch", result);

        res.send("수정 완료");
    });
}

// GET /visitor
exports.getVisitor = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    
    visitor.getVisitor(req.params.id, (result)=>{
        console.log("Visitor.js 데이터 하나 조회:: ", result);

        res.send(result);
    });
}

