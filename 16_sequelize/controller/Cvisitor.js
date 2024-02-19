const visitor = require("../model/Visitor");
const Visitor = require("../models/Visitor");
const models = require("../models");

exports.main = (req, res) => {
    res.render("index");
};

exports.getVisitors = (req, res) => {
    // 1. [ DB 연결 전, 임시 데이터베이스 ]
    // visitor.ejs 에 데이터 보내주기
    // console.log(visitor.getVisitors());
    // res.render("visitor", {data: visitor.getVisitors() });


    // 2. [ DB 연결 후! ]
    // DB 정보 가지고 온 후, db
    // visitor.getVisitors((result)=>{
    //     console.log("CVisitor.js 전체 목록:: ", result);
    //     res.render("visitor", {data: result});
    // });


    // 3. [ sequelize 연결! ]
    models.Visitor.findAll().then((result)=>{
        console.log("findAll >> ", result);
        res.render("visitor", {data:result});
    });

};

// POST /visitor
exports.postVisitor = (req, res) => {
    // [ before sequelize ]
    // console.log(req.body);  // {id, name, comment}
    // visitor.postVisitor(req.body, (result) => {
    //     console.log("Cvisitor.js post:: ",result);
    //     // res.send(result + " 번 등록 완료");
    //     res.send({id:result, name:req.body.name, comment:req.body.comment});
    // });

    // [ after sequelize ]
    console.log(req.body);

    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment,
    }).then((result)=>{
        console.log("등록 result",result);
        res.send(result);
    })

};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);
    
    // [ before sequelize ] 
    // visitor.deleteVisitor(req.body.id, (result)=>{
    //     console.log("Cvisitor.js delete", result);
    //     console.log(result + "번 방명록 삭제 완료!");

    //     res.send("삭제 완료");
    // });


    // [ after sequelize ] 
    models.Visitor.destroy({
        where: {id: req.body.id},
    })
    .then((result) => {
        console.log("sequelize destroy result", result);  // 삭제 됐을 경우: 1(true), 아닌 경우: 0(false)
        res.send(req.body.id + "번 방명록 삭제 완료!");
    })
}

// PATCH /visitor
exports.patchVisitor = (req, res) => {
    console.log(req.body); //{id, name, comment} 수정을 위해서는 3개 모두 필요함
    
    // [ before sequelize ] 
    // visitor.patchVisitor(req.body, (result)=>{
    //     console.log("Cvisitor.js patch", result);

    //     res.send("수정 완료");
    // });

    // [ after sequelize ] 
    models.Visitor.update({
        name: req.body.name,
        comment: req.body.comment,
    }
    ,{
        where: {id: req.body.id},
    })
    .then((result) => {
        console.log(result);
        res.send("수정 완료🤗")
    })
}

// GET /visitor
exports.getVisitor = (req, res) => {
    console.log(req.params);
    console.log(req.params.id);

    // [ before sequelize ]
    // visitor.getVisitor(req.params.id, (result)=>{
    //     console.log("Visitor.js 데이터 하나 조회:: ", result);

        // res.send(result);
    // });


    // [ after sequelize ]
    models.Visitor.findOne({
        where: { id: req.params.id },
    }).then((result)=>{
        console.log("findOne >> ", result);
        res.send(result);
    })
}

