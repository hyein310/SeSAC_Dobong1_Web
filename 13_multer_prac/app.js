const express = require("express");
const app = express();
const PORT = 3100;

const multer = require("multer");
const path = require("path");

// view 관련
app.set("view engine", "ejs");
app.set("views","./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/public")); 
// app.use("/A", express.static(__dirname + "/B")); B라는 폴더를 A라는 이름으로 사용할 것

// body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    dest:"uploads/",
});

// 업로드 디테일
const uploadDetail = multer({
    storage:multer.diskStorage({ 
        // 파일 경로
        destination: function(req, file, cb) {
            //uploads에 저장
            cb(null, "uploads/"); // 폴더가 자동 생성되지 않기 때문에 직접 폴더를 생성해야 함
        },

        // 파일 정보
        filename: function (req, file, done) {
            const extension = path.extname(file.originalname); // 확장자만 추출
            done(null, path.basename(file.originalname, extension) + Date.now() + extension); // 현재 날짜 추가
        },
    }),
    limits: {
        fileSize: 5 *1024 * 1024
    },
});

// multer에는 storage와 limits가 쓰이고.. storage에는 destination과 filename이 쓰인다.. 보통 인자의 cb함수로 done이라는 이름을 사용

// 라우팅
app.get("/", (req,res) => {
    res.render("index");
});

// 데이터 요청..
// single일 때는 file, array일 때는 files
app.post("/userjoin",uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render("result.ejs", {
        userInfo: req.body,
        fileInfo: req.file,  //fileInfo: req.file.path만 전송하면 사진이 올라감.
    });
});



app.listen(PORT,()=>{
    console.log(`${PORT} is open!!`);
    console.log(`http://localhost:${PORT}`);
})