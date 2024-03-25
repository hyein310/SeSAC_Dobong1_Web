import "../styles/SassComponent.scss"
import img1 from "../assets/main.png";

export default function Sass () {
    return (
        <>
        <h4>sass 사용</h4>
        <div className="div1">
            <div className="div2">
                <div className="div3"></div>
            </div>
            <button className="btn orangered">BTN1</button>
            <button className="btn btn--opacity">BTN2</button>
            <button className="btn btn--blue">BTN3</button>
        </div>

        {/* .container>.box1*3+p.circle*3.box2{hi$}*4 */}
        {/* .container>.box1*3+p.circle*3.box2{hi$}*4 */}
        <div className="container">
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
            <p className="circle"></p>
            <p className="circle"></p>
            <p className="circle"></p>
            <div className="box2">hi1</div>
            <div className="box2">hi2</div>
            <div className="box2">hi3</div>
            <div className="box2">hi4</div>
        </div>

        <h2>이미지 가지고 오기</h2>
        <h4>1. src 폴더 내부에 이미지 저장</h4>
        <h5>상대경로로 불러오기</h5>
        <img src="../assets/main.png" alt="scr 내부에 있을 때는 경로명으로 접근할 수 없습니다." />
        
        <h5>이미지 import해서 가져오기</h5>
        <img src={img1} alt="import 후 가지고 오기" />
        
        <h5>css 파일에서 이미지 접근(background-image 속성)</h5>
        <div className="img-test src-image"></div>

        <h4>2. public 폴더에 이미지 저장</h4>
        <img src="/assets/main.png" alt="경로명으로 접근 가능, public 폴더는 static" />
        <img src={process.env.PUBLIC_URL  } alt="경로명으로 접근 가능, public 폴더는 static" />
        <h5>img 태그 사용하기</h5>
        <h5>css 파일에서 이미지 접근(background-image 속성)</h5>
        <div className="img-test public-img"></div>

        {/* practice */}
        <h4>사진 넣기 실습 with sass(background-image 속성 사용)</h4>
        <div className="practice">
            <div className="prac1"></div>
            <div className="prac2"></div>
            <div className="prac3"></div>
            <div className="prac4"></div>
        </div>

        <h4>실습문제 1. 애벌레</h4>
        <div className="larva">
        <div className="body body1">
            <div className="eye eye-white">
                <div className="eye eye-black"></div>
            </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
        
        {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
        <img
            className="grass"
            src={process.env.PUBLIC_URL + '/assets/grass.png'}
            alt="잔디"
        />
        </div>

        {/* 실습 2. 움직이는 원 */}
        <div className="moveCircle">
            <div className="pinkCircle"></div>
            <div className="yellowCircle"></div>
            <div className="greenCircle"></div>
        </div>
        
        </>
    )
}