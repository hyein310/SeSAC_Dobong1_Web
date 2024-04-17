import io from "socket.io-client";
import Notice from "./Notice";
import { useEffect, useState } from "react";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});

export default function Chatting1() {
    const initSocketConnect = () => {
        if (!socket.connected) socket.connect();
    }
    const [msgInput, setMsgInput] = useState(""); // 채팅창의 내용을 관리
    const [chatList, setChatList] = useState(
    [{
        type:"me", // me, other, notice
        content: "내가 작성한 메세지",
    },
    {
        type: "other",
        content: "다른사람이 작성한 메세지",
    },
    {
        type: "notice",
        content: "~~입장하셨습니댜",
    },
    ]);

    // 바로바로 받기 위해서는 useEffect 사용
    // 빈 배열이면 컴포넌트가 맨 처음 화면에 렌더링 될 때 실행
    // 배열이 존재하지 않으면 랜더링 될 때마다 매번 실행
    useEffect(() => {
        initSocketConnect();
        // [문제점] newChatList를 만들 때 mount 시점의 chatList만 이용
        // socket.on("notice", (notice) => {
        //     // {type: "notice", content: notice}
        //     const newChatList = [...chatList, { type: "notice", content: notice },];
        //     setChatList(newChatList);
        // });
    }, []);

    // chatList 바뀔때만 동작하도록
    useEffect(() => {
        socket.on("notice", (notice) => {
            // {type: "notice", content: notice}
            const newChatList = [...chatList, { type: "notice", content: notice },];
            setChatList(newChatList);
        });
    }, [chatList])

    const handleSubmit = (e) => {
        e.preventDefalut();
    }
  return (
    <>
      <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 입장했는지 공지(socket.id)</li>
        <div className="container">
          <header>코코아톡🐛</header>
          <section>
            {/* <Speech chat={chatList[0]}></Speech>
            <Speech chat={chatList[1]}></Speech>
            <Notice chat={chatList[2]}></Notice> */}
            {/* 만약 chat의 type이 notice일 경우, notice메소드, 아닐 경우 speech */}
            {chatList.map((chat, i) => 
                chat.type === "notice" ? 
                (<Notice key={i} chat={chat}></Notice>) 
                : (<Speech key={i} chat={chat}></Speech>)
            )}
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select">
              {/* <option value="all">전체</option> */}
            </select>
            <input type="text" placeholder="메세지 입력" onChange={(e) => setMsgInput(e.target.value)}/>
            <button>전송</button>
          </form>
        </div>
      </ul>
    </>
  );
}
