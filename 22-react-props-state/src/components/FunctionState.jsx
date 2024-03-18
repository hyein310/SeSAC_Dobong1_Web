// export default function FunctionState() {
//     let apple = "사과";

//     function inEnglish() {
//         apple = "apple",
//         console.log("변수값", apple);
//     }
//     return (
//         <div>
//             <div style={{backgroundColor: "red", color: "white"}}>{apple}</div>
//             <button onClick={inEnglish}>영어로 바꾸기</button>
//         </div>
//     )
// }
// import { useState } from "react";

// export function FunctionState() {
//     const [apple, setApple] = useState("사과")

//     function inEnglish() {
//         setApple("apple");
//         console.log("state", apple);
//     }W
//     return (
//         <div>
//             <div style={{backgroundColor: "red", color: "white"}}>{apple}</div>
//             <button onClick={inEnglish}>영어로 바꾸기</button>
//         </div>
//     )
// }


// 3. 바닐라 JS로 사과-> apple -> 사과 변경해보기
// export function FunctionState() {
//     let apple = "사과";

//     function changeLanguage() {
//         const apple = document.querySelector(".state div");
//         apple.innerText === "사과" ? apple.innerText = "apple" : apple.innerText ="사과"
//     }
//     return (
//         <div className="state">
//             <div style={{backgroundColor: "red", color: "white"}}>사과</div>
//             <button onClick={changeLanguage}>언어 변경</button>
//         </div>
//     )
// }

// 4. useStae
import { useState } from "react";

export function FunctionState() {
    const [isEnglish, setIsEnglish] = useState(true);

    function changeLanguage() {
        setIsEnglish(!isEnglish);
    }
    return (
        <div>
            <div style={{backgroundColor: "red", color: "white"}}>
                {isEnglish ? "apple" : "사과"}
            </div>
            <button onClick={changeLanguage}>
                {isEnglish ? "한글" : "영어"}로 변경
            </button>
            <br />
            <hr />
        </div>
    )
}

export function StatePractice() {
    const [isNumber, setIsNumber] = useState(0);
    function increase() {
        console.log(typeof(isNumber));
        setIsNumber(isNumber+1);
        // console.log(isNumber);
    }
    function decrease() {
        setIsNumber(isNumber-2);
    }
    return (
        <div>
        <p>{isNumber}</p>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        </div>
    )
}

// 실습
export function StatePracticeEm() {
    const [isNumber, setIsNumber] = useState(0);
    function increase() {
        console.log(typeof(isNumber));
        setIsNumber(isNumber+1);
    }
    function decrease() {
        setIsNumber(isNumber-2);
    }
    return (
        <div>
        <p>{isNumber<=7 ? isNumber + "🐻" : isNumber + "🐧"}</p>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        </div>
    )
}


// 리더님 방법 -----
// import { useState } from "react";

// export default function PracticeState() {
//   const [number, setNumber] = useState(0);
//   let variable = 0;
//   const increase = () => {
//     setNumber(number + 1);
//     variable += 1;
//     console.log(
//       `변수(variable): ${variable}, 스테이트(number):${number}`
//     );
//   };
//   const decrease = () => {
//     setNumber(number - 1);
//     variable -= 1;
//   };
//   return (
//     <div>
//       <div>{number <= 7 ? number + "😊" : number + "🐛"} </div>
//       <button onClick={increase}>+1</button>
//       <button onClick={decrease}>-1</button>
//     </div>
//   );
// }