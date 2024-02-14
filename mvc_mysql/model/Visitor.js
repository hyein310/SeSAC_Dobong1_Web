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
// GET /visitors로 들어왔을 때
exports.getVisitors = (cb) => {
    // conn.query('sql문', 콜백함수)
    conn.query('SELECT * FROM visitor', (err,rows) => {
        if (err) throw err;

        console.log("Visitor.js의 전체 목록:: ", rows);

        cb(rows);
    });
};


// 데이터 등록
// POST /visitor

exports.postVisitor = (data, cb) => {
    // data = {name:"hyen", comment:"발렌타인데이군요!"}
    conn.query(
        `INSERT INTO visitor VALUE(null, '${data.name}', '${data.comment}')`,  // 데이터가 문자열로 들어오기 때문에 문자열 처리해줘야 함.
        (err, rows) => {
            if (err) throw err;
            console.log("Visitor.js post:: ",rows);;

            cb(rows.insertId);
        }

        );
}

exports.deleteVisitor = (id, cb) => {
    console.log(id);
    conn.query(
        `DELETE FROM visitor WHERE id=${id}`,  // 데이터가 문자열로 들어오기 때문에 문자열 처리해줘야 함.
        (err, rows) => {
            if (err) throw err;
            console.log("Visitor.js delete:: ",rows);;

            cb(rows);
        });
}


exports.patchVisitor = (data, cb) => {
    console.log(data);
    conn.query(
        `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`,  // 데이터가 문자열로 들어오기 때문에 문자열 처리해줘야 함.
        (err, rows) => {
            if (err) throw err;
            console.log("Visitor.js patch:: ",rows);;

            cb(rows);
        });
}


exports.getVisitor = (id, cb) => {
    // conn.query('sql문', 콜백함수)
    conn.query(`SELECT * FROM visitor WHERE id=${id}`, 
    (err,rows) => {
        if (err) throw err;

        console.log("Visitor.js 데이터 하나 조회:: ", rows);  // [{}]

        cb(rows[0]); // 하나의 데이터를 찾아도 배열형태로 넘어오기 때문에 배열을 넘겨주는게 아니라 배열 안의 object를 넘김.. 
    });
};