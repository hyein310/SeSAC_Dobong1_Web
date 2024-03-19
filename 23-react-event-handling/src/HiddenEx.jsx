import { useState } from "react"

function HiddenEx() {
    // const [text, setText] = useState("안녕하세요");
    const [isVisible, setIsVisible] = useState({visibility: "visible"})

    const showText = () => {
        setIsVisible({visibility: "visible"});
    }
    const hideText = (e) => {
        setIsVisible({visibility: "hidden"});
    }
    return (
        <div>
            <h1 style={isVisible}>안녕하세요</h1>
            <button onClick={hideText}>사라져라</button>
            <button onClick={showText}>보여라</button>
        </div>
    )
}

export default HiddenEx;