import { useRef } from "react";
import { useState } from "react"

export function Practice0() {
    // 실습 1.
    const [tableList, setTableList] = useState([
        { title:"집으로", writer:"혜인"},
        { title:"보내주세요", writer:"홍길동"},
    ]);

    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");

    const inputTitleRef = useRef();
    const inputWriterRef = useRef();

    
    function addWrite() {
        if (inputWriterRef.current.value.trim().length === 0 || inputTitleRef.current.value.trim().length === 0) {
            return inputWriterRef.current.focus();
        }
        let newTableList = {
            title: inputTitle,
            writer: inputWriter,
        };

        setTableList([...tableList, newTableList]);
        setInputTitle("");
        setInputWriter("");
    }

    // 추가실습 1.
    const [colorInput, setColorInput] = useState("");
    const colorInputRef = useRef();
    const bgColorRef = useRef();

    function colorSelect() {
        // console.log(bgColorRef.current.style.backgroundColor);
        if(colorInputRef.current.value.trim().length === 0) {
            return colorInputRef.current.focus();
        }
        bgColorRef.current.style.backgroundColor = colorInputRef.current.value;
        setColorInput("");
    }
    

    return (
        <>
        <form>
        <p>Practice</p>
        <label htmlFor="writer">
            작성자 : <input type="text" id="writer" onChange={(e) => {setInputWriter(e.target.value);}} ref={inputWriterRef} value={inputWriter}/>
        </label>
        <label htmlFor="title">
            제목 : <input type="text" id="title" onChange={(e) => {setInputTitle(e.target.value);}} ref={inputTitleRef} value={inputTitle}/>
        </label>
        <button type="button" onClick={addWrite}>작성</button>
        </form>

        <table border={1} style={{ margin: "30px"}}>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                </tr>
            </thead>
            <tbody>
                {tableList.map((user, idx) => {
                    return (              
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{user.title}</td>
                        <td>{user.writer}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>

        <br />
            <br />
            <hr />
            <h1>색 적용</h1>
            <div ref={bgColorRef}>
                <input type="text" ref={colorInputRef} onChange={(e)=>{setColorInput(e.target.value)}} value={colorInput}/>
                <button onClick={colorSelect}>색 적용</button>
            </div>
        </>
    )
}