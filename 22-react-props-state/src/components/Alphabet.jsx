import { useState } from "react"

export default function Alphabet() {
    const [list, setList] = useState([
        {id:1, alpha:"a"},
        {id:2, alpha:"b"},
        {id:3, alpha:"c"},
        {id:4, alpha:"d"},
        {id:5, alpha:"e"},
    ]);
    const [inputAlpha, setInputAlpha] = useState("");

    const addAlpha = () => {
        // 만약 inputAlpha 값이 없으면 return.. trim() 공백 제거
        if(inputAlpha.trim().length===0) return;
        // concat : 두 개 이상의 배열을 병합하는 데 사용. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
        const newAlpha = list.concat({
            // list길이가 0이면 1, 리스트의 마지막 인덱스의 아이디 값에 1씩 추가
            id: list.length === 0 ? 1 : list[list.length -1].id + 1,
            alpha: inputAlpha,
        });
        setList(newAlpha);
        setInputAlpha(""); // 빈값으로 비우기
    };

    console.log(inputAlpha);
    return (
        <div>
            <input type="text" 
                    onChange={(e)=>{setInputAlpha(e.target.value)}} 
                    value={inputAlpha}/>
            <button onClick={addAlpha}>add alphabet</button>
            <ol>
            {list.map((alphabet) => {
                // 중괄호가 나오면 return을 사용하고 그외는 return없이 사용 가능
                return (
                    <li key={alphabet.id}>{alphabet.alpha}</li>
                )
            })}
            </ol>
        </div>
    )
}