const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8080;

const upload = multer({
    dest:"uploads/",
});

/* temp DB
    임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업
*/

let tempDB = [
    {
        contentID: 1,
        title: "글 제목1",
        content: "글 내용1",
        img: null, //null or path(string)
    },

    {
        contentID: 2,
        title: "글 제목2",
        content: "express, ejs, multer 복습",
        img: null, //null or path(string)
    },

    {
        contentID: 3,
        title: "글 제목3",
        content: "글 내용3",
        img: null, //null or path(string)
    },

    {
        contentID: 4,
        title: "글 제목4",
        content: "글 내용4",
        img: null, //null or path(string)
    },
]

const userID = "khi🐥";

// 미들웨어 설정
/*
    미들웨어란?
    요청(request)과 응답(response) 사이에서 중간다리 역할을 하는 sw
    ex1) request와 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
    ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
    ex3) static 파일 설정을 도와주는 app.use(express.static(..))
*/

/* 미들웨어1. views 설정 (set() 이용) 
    - view란?
     사람들 눈에 보이는 화면, 프론트단 html
     vies 설정
     1. html 파일을 어디서 모아둘건지 (views 폴더 설정)
     2. html 을 보여주기 위해서 어떻게 할건지 (view engine)
    - view engine (ejs)
     서버에서 보낸 js 변수를 클라이언트 사용할 수 있도록 도움
     pug, ejs, nunjucks, .. 등이 있지만 html과 가장 유사한 것은 ejs
*/

app.set("view engine", "ejs");
app.set("views", "./views");

/*
    미들웨어2. static 폴더 설정
    - static 폴더란?
    외부(브라우저 등의 client)에서 접근 가능한 폴더
    프론트 js, css, 이미지, 동영상 ...
 */

app.use("/static", express.static(__dirname + "/public"));  // 새로운 가상경로
app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use("/static", express.static("/uploads"));  ""로 접근하겠다

/*
    미들웨어3. body-parser 설정 (express 내장 모듈)
    - req.body 기본적으로 undefined
    - body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌
*/


// extend가 true: queryString 모듈 사용, false: qs 모듈(보안 성능 추가) 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  //요청 body에서 내가 필요한 객체 정보(json 정보)만 추출할 수 있게 도와주는 것

/*
    미들웨어4. multer(파일 업로드) 설정 (npm install multer, 설치 필요)
    - req.body input type = "file" 의 정보는 string
        실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용 ++ 빈폴더는 git에 올라가지 않기 때문에 .gitkeep 이라는 파일을 추가하면 올라감

*/

const uploadDetail = multer({
    storage:multer.diskStorage({
        // 콜백 함수 두가지 들어감
        destination: function(req, file, cb) {
            //uploads에 저장
            cb(null, "uploads/");
        },

        filename: function (req, file, done) {
            /*
             extname(파일명) : 확장자 추출
             basename(파일명, 확장자) : 확장자를 제외한 파일명 추출
             basename(경로명) : (확장자 포함된) 파일명 추출
            */

            const extension = path.extname(file.originalname); //path.extname("원본 파일 이름")
            done(null, path.basename(file.originalname, extension) + Date.now() + extension); // extension은 따로 붙여줘야 함
        },
    }),
    limits: {
        fileSize: 5 *1024 * 1024
    },
});


// ###라우팅
/*
    특정 url로 특정 method에 대한 요청 처리
    - url: 사용자가 정한 url
    - method: get, post, put, patch, delete
        CRUD를 위한 것 (CRUD: 데이터를 create, read, update, delete)
        1. get: 'R'ead, 데이터를 읽고 싶을 때
            브라우저의 url에 주소를 입력하는 것은 모두 get요청!!
            localhost:8080/sesac 의 화면을 보기 위해서는 
            /sesac의 get요청에 대한 응답(response)이 있어야 볼 수 있다.
            (동시에 쓸 수 없음)
            res.send()
            res.end()
            res.write() .. 응답이 끝나지 않기 때문에 끝내는 문장을 추가해줘야함
            res.render()

        2. post: 'C'reate 새로운 정보를 '입력' '추가'할 때
        3. put(전체 수정) & patch(부분 수정) : 'U'pdate
            수정 관련 메소드
        4. delete: 'D'elete 삭제 
*/

app.get('/', function(req, res) {
    res.render("index.ejs", {
        user: userID,
        contentData: tempDB, // [{},{}]..의 DB 배열이 저장되어 있음
    });
});

/*
    params vs query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params 에서 정보 확인 가능 {params: "123"}의 문자열로 들어옴
        - /:id/:content에 대한 get 요청
        - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 사용
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=123&content=123
        - req.query에서 정보 확인 가능 {id: '123'. content: "123"}
        - 검색, 필터링 기능을 필요로 할 때 사용
*/

//contentID에 params 데이터 저장, 하나의 ejs 파일에서 여러개의 데이터를 뿌림
// content/1 content/2 content/3....
app.get('/content/:contentID',(req,res)=>{
    console.log(req.params); // {contentID: '1'}
    // req.params.contentID
    // 객체 구조 분해 할당
    const { contentID } = req.params;
    const isContent = tempDB.filter((obj) => obj.contentID === Number(contentID))[0]; 
    // obj.contentID은 숫자, contentID은 문자열이기 때문에 숫자로 변환해서 같을 경우 값 반환
    // isContent 배열

    console.log(isContent); // {}, undefined


    /*
        {
        contentID: 1,
        title: "글 제목1",
        content: "글 내용1",
        img: null, //null or path(string)
        }
    */
    if(isContent){ //{}
        res.render("content.ejs", isContent);
        // res.render("content.ejs", {
        //     isContent,
        //     userName: "khi",
        //     ...PORT.
        // })
    }
    else { //undefined
        res.render("404.ejs");
    }
    res.send("hiiii");
});

// 새 글 작성하기 화면 렌더링
// /content/write는  write를 params로 파악할 수 있음
app.get("/write", function(req,res){
    res.render('writeContent')
});

app.post("/blog/post", upload.single("img"), (req,res) => {
    console.log(req.body);
    console.log(req.file);
    tempDB.push({
        contentID: tempDB.length!==0? tempDB[tempDB.length - 1].contentID + 1 : 1, //tempDB의 길이가 0이 아니라면 제일 끝에 있는 값의 +1, 0이라면 1
        title: req.body.title,
        content: req.body.content,
        img:req.file? req.file.path : null, //req.file이 있다면 img넣고 없다면 null
    });
    console.log(tempDB);
    res.redirect('/');
});


// 삭제 요청
app.delete('/blog/delete', (req, res) => {
    console.log(req.query);
    
    const { contentID } = req.query;
    tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID)); // 똑같지 않은 것만 반환.
    console.log(tempDB);
    // res.send('dd');

    res.end();
})

// 오류 페이지
app.get('*', (req,res) => {
    res.render('404.ejs');
});

// ### 포트열기
app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
});