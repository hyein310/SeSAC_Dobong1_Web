const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 렌더링, get요청
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);

// get visitor
router.get("/visitor/:id", controller.getVisitor);


// 방명록 등록
router.post("/visitor", controller.postVisitor);
// 방명록 수정
router.patch("/visitor", controller.patchVisitor);
// 방명록 삭제
router.delete("/visitor", controller.deleteVisitor);


module.exports = router;