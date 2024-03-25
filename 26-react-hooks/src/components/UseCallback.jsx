import { useCallback, useEffect, useState } from "react"

export default function UseCallback() {
    const [number, setNumber] = useState(0);
    const [isTrue, setIsTrue] = useState(true);

    const func1 = () => {
        console.log(`number: ${number}🐻`);
    }

    const fun2 = useCallback(() => {
        console.log(`number: ${number}⭐`);
    },[number]);

    useEffect(()=> {
        console.log("함수 1 변경🐻");
    }, [func1]);
    
    useEffect(()=> {
        console.log("함수 2 변경⭐")
    }, [fun2]);
    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <br />
            <button onClick={()=>{func1(); fun2();}}>call function</button>
            <button onClick={()=> {setIsTrue(!true)}}>{isTrue.toString()}</button>
        </>
    )
}