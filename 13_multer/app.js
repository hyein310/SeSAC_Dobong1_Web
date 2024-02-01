//npm i�� �ص� install ����

const express = require("express");
const app = express();
const PORT = 8080;
//multer ��� �ҷ�����
const multer = require("multer");
const path = require("path");

// �̵����
// view ����
app.set("view engine", "ejs");
app.set("views","./views");

//static ����
app.use("/uploads", express.static(__dirname + "/uploads")); //���� ���� ��ο��� upload�� �ִ�.
app.use("/static", express.static(__dirname + "/public"));
// app.use('/�� �̸����� ����� ��', express.static(���� ���� ���))
// console.log("���� ��ġ�� ������ ���", __dirname);

// body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    //dest: ���� ���ε� �� ���� ����� ��� ����
    dest:"uploads/",
});

const uploadDetail = multer({
    storage:multer.diskStorage({
        // �ݹ� �Լ� �ΰ��� ��
        destination: function(req, file, cb) {
            //uploads�� ����
            cb(null, "uploads/");
        },

        filename: function (req, file, done) {
            const extension = path.extname(file.originalname); //path.extname("���� ���� �̸�")
            done(null, path.basename(file.originalname, extension) + Date.now() + extension); // extension�� ���� �ٿ���� ��
        },
    }),
    limits: {
        fileSize: 5 *1024 * 1024
    },
});

/*
multer ������ ����
- storage : ��������� ����
    diskStorage : ������ �����ϱ� ���� ��� ������ ����
    - destiantion : ���� ���
    - filename : ���� �̸� ���� ����
- limits: ���� ���� ���� ����
    fileSize: ���� ����� ����Ʈ ������ ����
*/

// �����
app.get("/", function (req, res) {
    res.render("index");
})

app.post("/upload",uploadDetail.single("userfile"),function(req,res) {
    console.log(req.file);
    console.log(req.body);
    res.send("���� ���ε� �Ϸ�~");
})

app.post("/uploads/array",uploadDetail.array("multifiles"),function(req,res) {
    console.log(req.files); //[{..},{}] �迭�� ��û��, ������ �ϳ��� ���ε��ص� �迭
    console.log(req.body); // ���� ���� ����
    res.send("���� ���ε� �Ϸ�~");
})

app.post("/uploads/fields", uploadDetail.fields([{name:'file1'},{name:'file2'},{name:'file3'}]), function(req,res) {
    console.log(req.files);
    console.log(req.files.file1[0].originalname);

    /*
    {file1:[{},{}], file2:[{},{}], name�Ӽ�:[{},{}, ..]}
    */
    console.log(req.body);
    res.send("���ε� �Ϸ�~~~~");
})

// {

// titile:'Ǫ',
// titleInfo:{ �Ʒ� ���� }

//     fieldname: 'userfile', // ���� ������ name ��
//     originalname: '?\x82\x98?\x82\x98.png', // ���� ���ϸ�
//     encoding: '7bit', // file encoding type
//     mimetype: 'image/png', //���� Ÿ��
//     destination: 'upload/', // ���� ���� ���
//     filename: 'aa8e5a012c40e7f35982dadb7f939ae5', // ����� ���� �̸�
//     path: 'upload\\aa8e5a012c40e7f35982dadb7f939ae5', // ��� ���Ե� �����̸�
//     size: 81128 //byte ���� ���� ũ��
// }


// ���� ���� ���ε�
app.post('/dynamicUpload', uploadDetail.single("dynamicFile"), function (req, res) {

    // ���� api�� ����� ���� res�� req �ϳ��� �����ϱ�
    console.log(req.file);
    console.log(req.body);
    res.send(req.file); //���� �� �״�� ������

    // res.send({...req.file, ...req.body});
    // res.send({ title: req.body, fileInfo: req.file });

}) 


app.listen(PORT,()=>{
    console.log(`${PORT} is open!!`);
    console.log(`http://localhost:${PORT}`);
})