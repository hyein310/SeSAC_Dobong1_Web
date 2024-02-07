const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);


router.get("/comment/:id",controller.comment);


router.get("/comments", controller.comments);

// 한 번에 내보내기
module.exports = router;
