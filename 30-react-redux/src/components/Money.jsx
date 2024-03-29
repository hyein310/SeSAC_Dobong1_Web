import { useDispatch, useSelector} from "react-redux"
import { useState } from "react";

export function Money() {
    const money = useSelector((state)=>state.money);
    const [number, setNumber] = useState(0) 

    const dispatch = useDispatch();

    return(
        <div>
            <h3>코딩온 은행</h3>
            <h5>잔액:{money}</h5>
            <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} step={1000}/>
            <button onClick={()=>dispatch({type: "money/INCREMENT", payload: number})}>입금</button>
            <button onClick={()=>dispatch({type: "money/DECREMENT", payload: number})}>출금</button>
        </div>
    )
}