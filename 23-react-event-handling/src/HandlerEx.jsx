import { useState } from "react"

function HandlerEx() {
    const [greet, setGreet] = useState("Hello, World");

    const greeting = () => {
        setGreet("GoodBye, World");
    }
    return (
        <div>
            <h1>{greet}</h1>
            <button onClick={greeting}>인사</button>
        </div>
    )
}

export default HandlerEx;