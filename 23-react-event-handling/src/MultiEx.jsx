import Select from "./Select";
import Input from "./Input";
import Result from "./Result";

import { useState } from "react"

function MultiEx() {
    // const [inputText, setInputText] = useState("");
    // const changeText = (e) => {
    //     setInputText(e.target.value);
    // }
    // const [sendFruit, setSendFruitValue] = useState("")

    const [data, setData] = useState({
        fruit:"apple",
        background:"black",
        color:"white",
        content:"text",
    })
    console.log(data);

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                {/* select box */}
                <Select setData={setData}></Select>
            </div>
            <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                {/* input */}
                <Input setData={setData}></Input>
            </div>
            <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                {/* 결과화면 (result) */}
                <Result data={data}></Result>
            </div>
            
            {/* <br></br>
            <label>
                내용 :  
                <input type="text" onChange={changeText} />
            </label> */}
            {/* <img src={`${sendFruit}.jpg`} alt="" /> */}
            {/* <p>{inputText}</p> */}
        </div>
    )
}

export default MultiEx;