function Select(props) {
  const sendFruitValue = () => {
    props.fruit = document.querySelector("select[name=fruit] option:checked").value;
    console.log("전달되는 값 >> ", props.fruit);
    <img src={`${props.fruit}.jpg`} alt="" />
  }
  
      return (
      <>
        과일 :
        <select name="fruit" onChange={sendFruitValue}>
          <option value="apple">사과</option>
          <option value="bananas">바나나</option>
          <option value="peaches">복숭아</option>
          <option value="grapes">포도</option>
        </select>
        배경색 :
        <select onChange={(e) => {}}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        글자색 :
        <select onChange={(e) => {}}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
      </>
    );
  }
export default Select;