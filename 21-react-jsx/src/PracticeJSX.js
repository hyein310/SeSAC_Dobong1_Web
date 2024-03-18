// 함수형 컴포넌트로 진행
export default function PractiveJSX() {
    const name = "coco";
    const animal = "dog";
    const divStyle = {
        // textDecoration: underline,
    };
    function addNum(a, b) {
        return a + b;
    }

    function compareNum(a,b) {
        if (a > b) {
            return true;
        }

    }

    const JSX4 = {
        title
    }

        return (
            <div>
            <h2>제 반려 동물의 이름은 {name} 입니다.</h2>
            <h2>{name}는 {animal}입니다.</h2>
            <br/><br/>

            <div>{addNum(3,5) ? "정답입니다!" : "오답입니다!"}</div>
            <br/><br/>

            <div>{compareNum(5,3) && "a가 b보다 큽니다."}</div>
            <br/><br/>

            </div>
        );
}