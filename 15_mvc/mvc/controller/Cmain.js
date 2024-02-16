// 컨트롤러 파일명은 앞글자에 대문자 C를 붙여서 나타냄

const Comment = require("../model/Comment");

/* 
controller 에서는 model 에서 받은 데이터를 가공해서
view에 전달할 수 있어요
*/

// GET /
// localhost: 8080/ 경로를 기본으로 하는 경로는

exports.main = (req, res) => {
    res.render("index");
};

// GET /comment/:id (params 사용)  >> comment.ejs
exports.comment = (req, res) => {
    console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
    console.log(req.params.id); // id 고유 값
    const commentId = req.id; // 댓글 id: url로 들어온 매개변수
    const comments = Comment.commentInfo();//[{},{},{},{}]
    console.log(comments[commentId - 1]);
    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if (isNaN(commentId)) {
    return res.render("404");
    }
    // 존재하지 않는 댓글 id 접근시 404 페이지
    if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
    }
    // 배열 접근 위해서 -1
    res.render("comment", { commentInfo: comments[commentId - 1] });
};


// GET /comments
exports.comments = (req, res) => {
    console.log(Comment.commentInfo());
    res.render("comments", {commentInfo: Comment});
};

