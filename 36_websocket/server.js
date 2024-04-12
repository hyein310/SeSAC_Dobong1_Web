const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("clients");
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// console.log(server); // Server 객체

// 웹소켓 서버 접속
const wsServer = new ws.Server({ server });

const sockets = [];  // 클라이언트들을 담을 배열

// return string
// 현재 시간 관련 타임스탬프와 랜덤 문자열을 결합 -> 고유 식별자 생성(client마다 다른 아이디 부여)
function generateUniqueId() {
    // 타임 스탬프
    const timestamp = Date.now().toString(36);  // 36진수(a~z,0~9)로 반환한 문자열

    // 랜덤 문자열
    const randomString = Math.random().toString(36).substring(2);  // "abcedf".substring(2); 2번 index 부터 끝 index까지 반환

    return timestamp + randomString;
};

/*
    ws 모듈(설치 필요)의 이벤트
    - connection: 클라이언트와 웹소켓 서버와 연결되었을 때
    - message: 클라이언트로부터 메세지를 받았을 때
    - error: 연결 중에 오류가 났을 때
    - close: 클라이언트와 연결 종료
*/
wsServer.on("connection", (socket) => {
    // console.log(socket); // (하나의) 클라이언트에 대한 소켓 정보
    console.log("connection????!!!");
    
    const clientId = generateUniqueId();
    // console.log(generateUniqueId()); // 새로고침 시에는  클라이언트가 종료되고 새로운 id 발급 됨
    sockets.push(socket); // 열린 클라이언트(socket) 갯수만큼 sockets에 담김..

    socket.on("message", (message) => {
        // Buffer 객체로 받아옴
        // console.log(message);

        /* string 객체로 받아오기 */
        // 1. `${버퍼객체}` 처럼 템플릿 리터럴을 함께 쓰면 암시적으로 toString 사용
        console.log(`${message}`); // {"name":"강혜인","msg":"안뇽"}

        // 2. toString 메소드 이용
        // const buftoString = message.toString("utf-8");
        // console.log(buftoString);

        // !! 모든 !! 클라이언트에게 동일한 메세지를 보내기 위해 sockets 배열 순회(각각의 socket에 message 전달)
        sockets.forEach((elemet) => {
            elemet.send(`${message}`);  // JSON data send
        });
        // socket.send("하나의 클라이언트에게만 메세지 전송"); // 한 개의 클라이언트에게만 메세지 전송
    });

    socket.on("error", () => {
        console.log("에러가 났어용..", err);
    });

    socket.on("close", () => {
        console.log(`클라이언트 (${clientId})와 연결이 종료되었어요..`);
    });
});