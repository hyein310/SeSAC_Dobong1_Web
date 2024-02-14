//  DB 연결 전
// exports.getVisitors = () => {
//     return [
//         { id: 1, name: 'hyen', comment: '안녕하세요' },
//         { id: 2, name: '홍길동', comment: 'hello' }, 
//         { id: 3, name: 'hc', comment: '해짜니와떠여' },     
//     ];
// };

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "sesac",
    password: "1234",
    database: "sesac",
});

// 전체 데이터 조회
// GET /visitor로 들어왔을 때
exports.getVisitors = (cb) => {
    // conn.query('sql문', 콜백함수)
    conn.query('SELECT * FROM visitor', (err,rows) => {
        if (err) throw err;

        console.log("Visitor.js의 전체 목록:: ", rows);

        cb(rows);
    });
};