const express = require("express");
const app = express();
const PORT = 3100;

const multer = require("multer");
const path = require("path");

// view 관련
app.set("view engine", "ejs");
app.set("views","./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/a", express.static(__dirname + "/public"));

// body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    dest:"uploads/",
});

// 업로드 디테일
const uploadDetail = multer({
    storage:multer.diskStorage({
        destination: function(req, file, cb) {
            //uploads에 저장
            cb(null, "uploads/");
        },

        filename: function (req, file, done) {
            const extension = path.extname(file.originalname);
            done(null, path.basename(file.originalname, extension) + Date.now() + extension);
        },
    }),
    limits: {
        fileSize: 5 *1024 * 1024
    },
});


// 라우팅
app.get("/", (req,res) => {
    res.render("index");
});

// 데이터 요청..
app.post("/userjoin",uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file)
    console.log(req.body);
    res.render("result.ejs", {
        userInfo: req.body,
        fileInfo: req.file, 
    });
});



app.listen(PORT,()=>{
    console.log(`${PORT} is open!!`);
    console.log(`http://localhost:${PORT}`);
})