export function FoodProps(props) {
    const divStyle = {
        color: props.color,
    }
    return (
        <div>
            <p>가장 좋아하는 음식은</p>
            <p style={divStyle}>{props.food}</p>
            <hr />
        </div>
    );
}

FoodProps.defaultProps = {
    food: "ramen"
}

export function BookProps(props) {
    const {title, author, img, price, type} = props;
    const h2Style = {
        color: "orange"
    }
    return(
        <div>
            <h2 style={h2Style}>이번주 베스트셀러</h2>
            <h3>{title}</h3>
            <img src={img} alt="책 이미지" width={200} height={300}/>
            <p>저자 :{author}</p>
            <p>판매가 :{price}원</p>
            <p>구분 : {type}</p>
            <hr />
        </div>
    )
}

export function TextProps(props) {
    const {text, valid} = props;
    function clickFn() {
        console.log(valid);
    }
    return (
        <div>
            <p>{text}</p>
            <button onClick={clickFn}>버튼</button>
        </div>
    )
}

TextProps.defaultProps = {
    text: "이건 기본 text props 입니다."
}