import { useState } from "react";


const Counter =() => {
    const [number, setNumber] = useState(0);

    function increase() {
        setNumber(number+1);
    }

    const alertMsg = (e, msg) => {
        console.log(e.target);
        alert(`${msg}~, 현재 숫자는 ${number}입니다.`);
    }

    const consoleMsg = (msg) => {
        console.log(`${msg}~, 현재 숫자는 ${number}입니다.`);
    }

    const handleEvent = (e) => {
        console.log(e.target); // 이벤트가 눌리는 값, 여기서는 span
        console.log(e.currentTarget); // 실제 이벤트가 눌리는 값, 여기서는 button > span
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={increase}>1 더하기</button>
            <button onClick={(e)=>{alertMsg(e, "집 가고싶다")}}>alert 출력</button>
            <button onClick={()=>{consoleMsg("안녕하세요")}}>console 출력</button>
            <button onClick={handleEvent}>
                <span>target 확인</span>
            </button>

        </div>
    )
}

export default Counter;