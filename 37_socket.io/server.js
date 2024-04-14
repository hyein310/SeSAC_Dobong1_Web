const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");  // http를 이용하고 express도 이용함
const server = http.createServer(app);

// 소켓이 http 모듈로 생성된 서버에 동작
const io = socketIO(server); // 연결
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("client");
});

app.get("/room", (req, res) => {
    res.render("room");
});

app.get("/practice1", (req, res) => {
    res.render("prac1");
});

app.get("/talk", (req, res) => {
    res.render("talk");
})

io.on("connection", (socket) => {
    console.log("socket id >> ",socket.id);  // socket에 id 존재
    // socket.on("event_name", (arg1, arg2, arg3, cb) => {
    //     // console.log(arg1);
    //     // console.log(arg2);
    //     // console.log(arg3);

    //     // cb("응답!");
    // });

    // client에서 전달받은 data 값이 전달됨
    socket.on("message_render", (message, cb) => {
        console.log(message);
        cb(message);
    });
    
    // 전체 socket에 보냄
    socket.on("new_message", (message) => {
    io.emit("message_render", message); // io.socket.emit도 가능
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} 연결 종료..`);
    });

    // -------------- [room.ejs] ------------- 채팅방 만들기
    // console.log("방 만들어지기 전 >> ",socket.rooms); // id도 들어가 있음
    // 2. 클라이언트에게 방 이름을 전달받아서 방 생성
    socket.on("join", (chatRoom) => {
        console.log(chatRoom);

        socket.join(chatRoom); // join(채팅방 이름) 이용해서 채팅방 만들기
        // console.log("방 만들어진 후 >> ",socket.rooms);  // id와 어떤 방에 들어가있는지 까지의 정보가 들어가 있음
        // 방 만들어진 후 >>  Set(2) { 'fkhigxGEbLwCSk4vAAAF', 'A' }

        socket.room = chatRoom; // 다른 곳에서도 사용하기 위해서 여기에 chatroom을 저장

        // 3. 내가 포함한 방 client에게 입장 메세지 전달
        // 나빼고 내가 참여한 채팅방 모두에게
        socket.broadcast.to(chatRoom).emit("user_join_without", `[${socket.id}]님이 입장하셨습니다.`)
        
        // 나를 포함한 내가 참여한 모든 채팅방에게
        io.to(chatRoom).emit("user_join", `[${socket.id}]님이 입장하셨습니다.`);
        
    });

    // 6. 하나의 클라이언트에게 메세지를 받아서 (특정 방의)전체 클라이언트에게 보낸다.
    socket.on("message", (message) => {
        console.log(message);
        io.to(socket.room).emit("msg_toAll", `${socket.id} >> ${message}`);

    });


    // ----------- practice 1 ---------------
    socket.on("msg", (msg) => {
        console.log("server: ", msg);
        io.emit("msg_render", msg);
    });


    // ------------ talk ---------------
    // socket.on("user_name", (userName) => {
    // console.log(userName);
    // })

    socket.on("send_msg", (message, userName) => {
        console.log(message);
        // io.emit("receive_msg", message, socket.id, userName );
        console.log(userName);
        io.to(socket.room).emit("receive_msg", `${userName} : ${message}`, socket.id);
    });
    

});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})