const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.post("/success", controller.success);

// 한 번에 내보내기
module.exports = router;