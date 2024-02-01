//npm i만 해도 install 가능

const express = require("express");
const app = express();
const PORT = 8080;
//multer 모듈 불러오기
const multer = require("multer");
const path = require("path");

// 미들웨어
// view 관련
app.set("view engine", "ejs");
app.set("views","./views");

//static 폴더
app.use("/uploads", express.static(__dirname + "/uploads")); //현재 폴더 경로에서 upload에 있다.
app.use("/static", express.static(__dirname + "/public"));
// app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로))
// console.log("현재 위치한 폴더의 경로", __dirname);

// body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    //dest: 파일 업로드 시 파일 저장될 경로 지정
    dest:"uploads/",
});

const uploadDetail = multer({
    storage:multer.diskStorage({
        // 콜백 함수 두가지 들어감
        destination: function(req, file, cb) {
            //uploads에 저장
            cb(null, "uploads/");
        },

        filename: function (req, file, done) {
            const extension = path.extname(file.originalname); //path.extname("원본 파일 이름")
            done(null, path.basename(file.originalname, extension) + Date.now() + extension); // extension은 따로 붙여줘야 함
        },
    }),
    limits: {
        fileSize: 5 *1024 * 1024
    },
});

/*
multer 디테일 설정
- storage : 저장공간에 정보
    diskStorage : 파일을 저장하기 위한 모드 제어기능 제공
    - destiantion : 저장 경로
    - filename : 파일 이름 관련 정보
- limits: 파일 제한 관련 정보
    fileSize: 파일 사이즈를 바이트 단위로 제한
*/

// 라우팅
app.get("/", function (req, res) {
    res.render("index");
})

app.post("/upload",uploadDetail.single("userfile"),function(req,res) {
    console.log(req.file);
    console.log(req.body);
    res.send("파일 업로드 완료~");
})

app.post("/uploads/array",uploadDetail.array("multifiles"),function(req,res) {
    console.log(req.files); //[{..},{}] 배열로 요청됨, 파일을 하나만 업로드해도 배열
    console.log(req.body); // 파일 외의 정보
    res.send("파일 업로드 완료~");
})

app.post("/uploads/fields", uploadDetail.fields([{name:'file1'},{name:'file2'},{name:'file3'}]), function(req,res) {
    console.log(req.files);
    console.log(req.files.file1[0].originalname);

    /*
    {file1:[{},{}], file2:[{},{}], name속성:[{},{}, ..]}
    */
    console.log(req.body);
    res.send("업로드 완료~~~~");
})

// {

// titile:'푸',
// titleInfo:{ 아래 내용 }

//     fieldname: 'userfile', // 폼에 정의한 name 값
//     originalname: '?\x82\x98?\x82\x98.png', // 원본 파일명
//     encoding: '7bit', // file encoding type
//     mimetype: 'image/png', //파일 타입
//     destination: 'upload/', // 파일 저장 경로
//     filename: 'aa8e5a012c40e7f35982dadb7f939ae5', // 저장된 파일 이름
//     path: 'upload\\aa8e5a012c40e7f35982dadb7f939ae5', // 경로 포함된 파일이름
//     size: 81128 //byte 기준 파일 크기
// }


// 동적 파일 업로드
app.post('/dynamicUpload', uploadDetail.single("dynamicFile"), function (req, res) {

    // 같은 api를 사용할 때는 res나 req 하나로 통일하기
    console.log(req.file);
    console.log(req.body);
    res.send(req.file); //받은 거 그대로 돌려줌

    // res.send({...req.file, ...req.body});
    // res.send({ title: req.body, fileInfo: req.file });

}) 


app.listen(PORT,()=>{
    console.log(`${PORT} is open!!`);
    console.log(`http://localhost:${PORT}`);
})