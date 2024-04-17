import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");
export default function Practice() {
    const [fromServerStr, setFromServerStr] = useState("");
    
    const initSocketConnect = () => {
        console.log(socket.connected);
        if(!socket.connect) socket.connect(); // 클라이언트 소켓에 접속
    };

    const hello = () => {
        socket.emit("hello", "hello");
        socket.on("hello2", (message) => {
        setFromServerStr(`server: ${message}`);
        });
    }

    const study = () => {
        socket.emit("study", "study");
        socket.on("study2", (message) => {
        setFromServerStr(`server: ${message}`);
        });
    }

    const bye = () => {
        socket.emit("bye", "bye");
        socket.on("bye2", (message) => {
        setFromServerStr(`server: ${message}`);
        });
    }

    // mount 되었을 때만 동작, useEffect안에 있으면 새로고침하지 않아도 실행 가능
    useEffect(()=>{
        initSocketConnect();
        
    }, []);
    
    

    return (
        <>
            <h1>Hello, World!</h1>
            <br />
            <button id="hello" onClick={hello}>hello</button>
            <button id="study" onClick={study}>study</button>
            <button id="bye" onClick={bye}>bye</button>
            <h3>{fromServerStr}</h3>
        </>
    )
}