export default function Input(props) {
    const { setData } = props;
    return (
        <div>
            <input type="text" placeholder="내용을 입력하세용" onChange={(e) => {
                setData((prevData) => {
                    // 객체로 리턴..
                    return {...prevData, content: e.target.value}
                });
            }}/>
        </div>
    )
}