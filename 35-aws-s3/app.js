const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// 미들웨어 설정
app.set("view engine", "ejs");

// aws 설정
aws.config.update({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SERET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// s3 관련 멀터 설정
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: "public-read", // 파일 접근 권한
        key: (req, file, cb) => {
            cb(null, Date.now().toString + '-' + file.originalname);
        },
    }),
});

// GET /index.ejs 렌더링
app.get("/", (req, res) => {
    res.render("index", {imageURL: ""});
});

// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    // {
    //     fieldname: 'image',
    //     originalname: 'ì\x95\x84ì\x9D´ì½\x98 ê½\x83 ë¹¨ê°\x95.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     size: 458127,
    //     bucket: 'bucket-hyein',
    //     key: 'function toString() { [native code] }-ì\x95\x84ì\x9D´ì½\x98 ê½\x83 ë¹¨ê°\x95.png',
    //     acl: 'public-read',
    //     contentType: 'application/octet-stream',
    //     contentDisposition: null,
    //     contentEncoding: null,
    //     storageClass: 'STANDARD',
    //     serverSideEncryption: null,
    //     metadata: null,
    //     location: 'https://bucket-hyein.s3.ap-northeast-2.amazonaws.com/function%20toString%28%29%20%7B%20%5Bnative%20code%5D%20%7D-%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98%20%C3%AA%C2%BD%C2%83%20%C3%AB%C2%B9%C2%A8%C3%AA%C2%B0%C2%95.png',
    //     etag: '"f6eb9277c51bcee0462b94bb9b371a1b"',
    //     versionId: undefined
    //   }

    // res.send("이미지 업로드 중.....");

    res.render("index", {imageURL: req.file.location});
});


app.listen(PORT, () => {
    console.log((`http://localhost:${PORT}`));
});