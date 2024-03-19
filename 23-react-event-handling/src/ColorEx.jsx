import { useState } from "react"

function ColorEx() {
    const [colorTxt, setColorTxt] = useState("검은색 글씨");
    const [color, setColor] = useState({color:"black"});

    const redSelect = () => {
        setColorTxt("빨간색 글씨");
        setColor({color:"red"});
    }
    const blueSelect = () => {
        setColorTxt("파란색 글씨");
        setColor({color:"blue"});
    }
    return (
        <div>
            <h1 style={color}>{colorTxt}</h1>
            <button onClick={redSelect}>빨간색</button>
            <button onClick={blueSelect}>파란색</button>
        </div>
    )
}

export default ColorEx;