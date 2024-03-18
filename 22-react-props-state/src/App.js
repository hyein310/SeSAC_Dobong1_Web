import './App.css';
import ClassState from './components/ClassState';
import { ClassProps,ClassProps2 } from './components/classProps';
import { FunctionProps, FunctionProps2 } from './components/functionProps';
import { FoodProps, BookProps, TextProps } from './components/propsPractice';
import { FunctionState, StatePractice, StatePracticeEm } from './components/FunctionState';
import PororoObj from './components/PororoObj';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello, Props</h1>
      <ClassProps name="루피" color="pink" nickname="공주"></ClassProps>
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps>
      <ClassProps2 name="포비" color="beige" nickname="곰돌이" ></ClassProps2>
      <FunctionProps name="사과" number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000}></FunctionProps2>
      <FunctionProps2 name="딸기" price={1000}>
        여기가 children props라고 합니다.
        <section style={{backgroundColor: "yellow"}}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <FoodProps food="noodle" color="red"></FoodProps>
      <BookProps title="나의 하루는 4시 40분에 시작된다" author="김유진" img="https://image.yes24.com/goods/93513663/XL" price="13,500" type="자기계발"></BookProps>   
      <TextProps valid="콘솔 띄우기 성공!"></TextProps> */}

      <h1>hello, state</h1>
      <ClassState></ClassState>
      <FunctionState></FunctionState>
      <h1>연습문제</h1>
      <StatePractice></StatePractice>
      <StatePracticeEm></StatePracticeEm>
      <PororoObj></PororoObj>
    </div>
  );
}

export default App;
