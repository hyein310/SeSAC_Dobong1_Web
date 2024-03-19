import Select from "./Select";

import { useState } from "react"

function MultiEx() {
    const [inputText, setInputText] = useState("");
    const changeText = (e) => {
        setInputText(e.target.value);
    }
    const [sendFruit, setSendFruitValue] = useState("")

    return (
        <div>
            <Select fruit={setSendFruitValue} bgColor="black" txtColor="black"></Select>
            <br></br>
            <label>
                내용 :  
                <input type="text" onChange={changeText} />
            </label>
            <img src={`${sendFruit}.jpg`} alt="" />
            <p>{inputText}</p>
        </div>
    )
}

export default MultiEx;