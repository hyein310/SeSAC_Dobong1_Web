import { FunctionProps } from "./functionProps";

export default function PropsMap({ arr }) {
    console.log(arr);
    return(
        <div>
            {arr?.map((el, index) => {
                // arr?.map : arr가 undefined일때는 전달하지 않음. app.js에 arr 데이터를 전달해주지 않을 경우에 사용
                return(
                    // html구조 리턴
                    <ul key={index}>
                        <li>이름 : {el.name}</li>
                        <li>갯수 : {el.number}</li>
                        <li>가격 : {el.price}</li>
                    </ul>
                )
            })}

            {arr?.map((el, index) => {
                return <FunctionProps name={el.name} price={el.price} number={el.number}></FunctionProps>;
            })}
            {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
        </div>
    )
}