export default function Speech({ chat }) {
    /*
    chat = 
    { 
        type: 'me',
        content: ' 안녕 a',  // 내가 작성한 메세지
        isDm: undefined, // undefined or true
        name: 'bb' // 보낸 사람의 닉네임
    },
    { 
        type: 'other', 
        content: ' 안녕 a', // 다른 사람이 작성한 메세지
    }

    */
    
    // console.log(chat);
    return (
        <>
        <div className={`speech ${chat.type} ${chat.isDm ? "dm" :""}`}>
            {chat.type === "other" && (
                <span className="nickname">{chat.name}</span>
            )}
          <span className="msg-box">{chat.content}</span>
        </div>
        </>
    )
}