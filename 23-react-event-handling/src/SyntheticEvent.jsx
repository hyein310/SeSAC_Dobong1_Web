function SyntheticEvent() {
    function printInputValue(e) {
        console.log(e.target.value)
    }

    function syntheticEvent(e) {
        console.log(e);
    }

    return (
        <div>
            <button onClick={syntheticEvent}>클릭이벤트 콘솔에 찍기</button>
            <br />
            <input type="text" placeholder="입력" onChange={printInputValue}/>
        </div>
    )
}

export default SyntheticEvent;