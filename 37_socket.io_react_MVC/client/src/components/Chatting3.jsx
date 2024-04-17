import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting3() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me",
      content: "내가 작성한 메세지",
    },
    {
      type: "other",
      content: "다른 사람이 작성한 메세지",
    },
    {
      type: "notice",
      content: "~~~님이 입장하셨습니다.",
    },
  ]);

  const [nicknameInput, setNicknameInput] = useState(""); // 닉네임 input창
  const [nickname, setNickname] = useState(null); // 내 닉네임을 관리하는 state
  const [userList, setUserList] = useState({}); // 서버에서 nickInfo로 들어온 전체 클라이언트 닉네임 정보 관리
  const [dmTo, setDmTo] = useState("all"); // DM 관련 state

  useEffect(() => {
    socket.on("notice", (notice) => {
      const newChatList = [
        ...chatList,
        { type: "notice", content: notice },
      ];

      setChatList(newChatList);
    });
  }, [chatList]);

  const join = () => {
    initSocketConnect();

    // [닉네임사용1]: 중복체크를 위해 서버로 닉네임 전송
    socket.emit("checkNick", nicknameInput);
  };

  useEffect(() => {
    // [닉네임사용3] - 입장실패
    socket.on("error", (errMsg) => {
      alert(errMsg);
    });

    // [닉네임사용3] - 입장성공(2)
    // 사용가능한 내 닉네임을 전달 받아서 nickname state에 저장
    socket.on("entrySuccess", (nick) => {
      setNickname(nick);
    });

    // nickname 정보 받아서 저장
    socket.on("updateNicks", (nickInfo) => {
        setUserList(nickInfo);
        // console.log(userList);
    });
  }, []);

    // option 만들기
    // 일반 변수 사용시 계속 재선언되기 때문에 useMemo 사용해서 memory에 저장 후, userList변경 시에 실행
    const userOptions = useMemo(() => {
        // [
        // <option value={"socketid1"}>닉네임1</option>,
        // <option value={"socketid2"}>닉네임2</option>
        // ]
        const options = [];

        // userList = {socketid: 닉네임1, socketid: 닉네임2}
        
        for(let key in userList) {
            // 1. id끼리 비교
            if (key !== socket.id)
            // 2. nickname 끼리 비교 if (nickname !== userList[key])
            options.push(<option value={key}>{userList[key]}</option>)
        }

        return options;
    }, [userList]);

    // 메세지 보내기
    const handleSubmit = (e) => {
        e.preventDefault();
        if (msgInput.trim() === "") return setMsgInput("");
        console.log(dmTo); // dm 받는 사람의 socket.id

        const sendData = {
            myNick: nickname,
            dm: dmTo, // all or dm을 받을 클라이언트의 socket.id
            msg: msgInput,
        };
        socket.emit("send", sendData);

        
        // dm 받기
        socket.on("message", (dmContent) => {
            setChatList(dmContent);
            console.log(chatList);
        });
    };

  return (
    <>
      <ul>
        <li>메세지 보내기</li>
        <li>Dm 보내기</li>
      </ul>
      {/* nickname이 null이면 닉네임 입력창
          nickname이 있으면 채팅창
      */}
      {!nickname ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter") join();
            }}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
        <div className="container">
          <header>코코아톡🐛-{nickname}</header>
          <section>
            {chatList.map((chat, i) =>
              chat.type === "notice" ? (
                <Notice key={i} chat={chat} />
              ) : (
                <Speech key={i} chat={chat} />
              )
            )}
          </section>
          <form
            className="msg-form"
            id="msg-form"
            onSubmit={handleSubmit}
          >
            {/* option을 선택한다는 것은 onchane이벤트 발생 */}
            <select id="dm-select" onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userOptions}
            </select>
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}