import { useRef, useState } from "react";

export function MathQuizPrac() {
    const inputRef = useRef();
    const operators = ["+", "-", "*"];

    const [num1, setNum1] = useState(getRandomNumber());
    const [num2, setNum2] = useState(getRandomNumber());
    const [operator, setOperator] = useState(getRandomOperator());

    function getRandomNumber() {
        return Math.floor(Math.random() * 11);
    }

    function getRandomOperator() {
        return operators[Math.floor(Math.random() * operators.length)];
    }

    function randomNumber() {
        console.log(num1, num2);
        if (inputRef.current.value.trim().length === 0) {
            return inputRef.current.focus();
        }
        setNum1(getRandomNumber());
        setNum2(getRandomNumber());
        setOperator(getRandomOperator());

    }

    return (
        <div>
            <br />
            <hr />
            <h1>⭐숫자 퀴즈</h1>
            <h3>{num1} {operator} {num2}</h3>
            <input type="number" ref={inputRef} />
            <button type="button" onClick={randomNumber}>정답 제출</button>
        </div>
    );
}
