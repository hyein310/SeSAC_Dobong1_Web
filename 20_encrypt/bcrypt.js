const bcrypt = require("bcrypt");  // 강력한 암호화 모듈

// 솔트의 라운드수 정의 >> 해시함수의 반복을 의미
// 숫자가 크면 안전하지만, 숫자가 크면 클수록 성능 저하를 일으킴
const saltRounds = 10;

// 1. 회원가입 >> 해시값 생성
function hashPW(pw) {
    // hashSync(비밀번호, 솔트라운드)  >> 리턴값은 암호화된 문자(String)
    return bcrypt.hashSync(pw, saltRounds);
}

// 2. 로그인 >> 비밀번호 일치하는지 확인 (해시값 일치 확인)
function compare(inputPW, hasedPW) {
    // compareSync(원본 비밀번호, 해시된 비밀번호)
    return bcrypt.compareSync(inputPW, hasedPW); //리턴값은 true or false
}

// 비밀번호에 대한 해시값 생성
// 회원가입 작업시 활용
const originalPassword = "12345";
const hasedPW = hashPW(originalPassword);
console.log("암호화 된 비밀번호 >>> ", hasedPW);

// 비밀번호 일치 여부 확인
// 로그인 작업 시 활용
const isMatch = compare("12345", hasedPW); // true
const isMatch2 = compare("1234", hasedPW); // false

console.log("비밀번호 일치?? ", isMatch);
console.log("비밀번호 일치?? ", isMatch2);
