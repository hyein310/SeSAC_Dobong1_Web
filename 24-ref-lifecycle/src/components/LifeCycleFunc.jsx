import { useEffect, useState } from "react"

function MyComponent({ number }) {
    const [text, setText] = useState("");
    // useEffect(effect, deps)
    /*
    - effect: callback funtion
        콜백함수 내에 특정 시점에서 실행하고 싶은 코드 작성
    - deps : 해당 배열값이 변하면 cb 함수 실행
        생략 : mount, update 시 항상 동작
        [] : mount 되었을 때만 실행
        [data] : mount, data가 바뀌었을 때 실행(특정 data로 인한 update, mount)
    */

    // mount 되었을 때
    useEffect(()=>{
        console.log("함수형 컴포넌트 mount!");
    },[]);
    
    // unmount 되었을 때
    useEffect(()=>{
        return() => {
            console.log("함수형 컴포넌트 unmount!");
        }
    });

    // update 되었을 때
    useEffect(()=>{
        console.log("함수형 컴포넌트 | update 될 때마다!!🐧");
    });

    useEffect(()=>{
        console.log("함수형 컴포넌트 | number 변경될 때마다 실행!⭐");
    },[number]);

    return(
        <>
            <p>MyComponent {number}</p>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </>
        
    )
}

export default function LifeCylcleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumberState = () => setNumber(number + 1);
    const changeVisibleState = () => setVisible(!visible);  

    return(
        <>
            <button onClick={changeNumberState}>num + 1</button>
            <button onClick={changeVisibleState}>on/off</button>
            {visible && <MyComponent number={number}></MyComponent>}
        </>
    )
}