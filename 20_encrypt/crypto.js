const crypto = require("crypto");  //node.js 내장 모듈, 설치 X
/* 
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
- createHash(알고리즘)
- pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1 - 1) createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀 번호를 받아서 암호화 시켜주는 함수
const createHashPw = (pw) => {
    return crypto.createHash("sha512").update(pw).digest("base64");
};

// node crypto로 실행
console.log("1st",createHashPw("1234"));
console.log("2nd",createHashPw("1234"));
console.log("3rd",createHashPw("1234")); // 1,2,3 전부 다 똑같은 값
console.log("another val",createHashPw("1234."));

// 1 - 2) pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키 길이, 알고리즘).toString(인코딩방식) 
/* 
- 솔트를 이용해서 해싱하는 함수
- salt 생성 : crypto.randomBytes(바이트수)
- randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

/* const str = "hello!";
const buffer = Buffer.from(str); // 이진 데이터로 표현되어 나오게 하는 것으로 100 001 형태의 버퍼가 16진수로 표현
console.log(buffer);  */

// 회원 가입 과정
// 새로운 hash와 salt를 만드는 과정 >> db에 hash와 salt를 저장해야 함
function saltAndHashPw(pw) {
    const salt = crypto.randomBytes(16).toString("base64");
    const iterations = 100;  // 반복 횟수 정하기
    const keylen = 64; // 생성할 키의 길이
    const algorithm = "sha512";

    const hash = crypto.pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //buffer
    .toString("base64"); //buffer to string

    return { hash, salt }; // {hash: hash, salt: salt}
}

console.log("1st hs >> ",saltAndHashPw("1234"));
console.log("2nd hs >> ",saltAndHashPw("1234"));
console.log("3rd hs >> ",saltAndHashPw("1234"));  // 세 개 다 다른값이 나옴 --> salt값이 다르기 때문

// 로그인 과정
// DB에 있는 hash와 salt를 이용해서
// input password의 hash 값 검증
function checkPW(inputPW, savedSalt, savedHash) {
    // crypto.pbkdf2Sync
    // 회원 가입 했을 경우랑 같아야 함! >> saltAndPW랑 같아야 함
    const salt = crypto.randomBytes(16).toString("base64");
    const iterations = 100;
    const keylen = 64; 
    const algorithm = "sha512";

    // inputPW를 해시 시켜주는 작업 >> salt값은 저장되어있는 값으로 해야 함
    const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iterations, keylen, algorithm).toString("base64");

    console.log("input hash >>> ", hash);
    return savedHash === hash;

}

console.log("==============================================")
const registerPW = "qwer1234";

// 회원가입
const { salt: registerSalt, hash:registerHash } = saltAndHashPw(registerPW);

console.log("암호화에 쓰인 salt >> ",registerSalt);
console.log("암호화된 hash >> ",registerHash);


// 로그인 >> 비밀번호가 db의 hash 값과 일치하는지 확인
const isMatch1 = checkPW("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPW("qwer12345", registerSalt, registerHash);

console.log("비밀번호 일치? >> ", isMatch1);
console.log("비밀번호 일치? >> ", isMatch2);

/* 2. 양방향 암호화: 복호화 가능 */
// createCipheriv()
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16)

const algorithm = "aes-256-cbc";

const originalMessage = "hello, world!";

// 암호화 
function encrypt(text) {
    // 1. 암호화 객체 생성
    // const cipher = crypto.createCipheriv(algorithm, key, iv)
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    
    // 2. 실제 데이터 암호화 작업
    // let encrypt = cipher.update(암호화 할 데이터, 입력 인코딩, 출력 인코딩);
    let encrypt = cipher.update(text, "utf-8", "base64");

    // 3. final을 이용해서 최종 결과 생성
    encrypt += cipher.final("base64");
    return encrypt; 
}
// console.log(encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
    // 1. 복호화 객체 생성
    const decihper = crypto.createDecipheriv(algorithm, key, iv);
    // 2. 실제 데이터 복호화
    // base64로 인코딩된 문자열이 utf8 형태로 복호화된다.
    let decrypted = decihper.update(encryptedText, "base64", "utf8");
    // 3. final을 이용해서 최종 결과 생성
    decrypted += decihper.final("utf8");

    return decrypted;
}

const encryptedMessage = encrypt(originalMessage); // 암호화
console.log("암호화 됨", encryptedMessage); 

const decryptedMessage = decrypt(encryptedMessage); // 복호화
console.log("복호화 됨", decryptedMessage);