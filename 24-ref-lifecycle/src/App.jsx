import { Practice0 } from "./components/Practice0";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import { MathQuizPrac } from "./components/MathQuizPrac";
import LifeCylcleFunc from "./components/LifeCycleFunc";
import LifeCylcleClass from "./components/LifeCycleClass";
import CyclePractice01 from "./components/CyclePractice01";
import Container from "./components/Container";

function App() {
  
  return (
    <div className="App">
      {/* <h1>ref</h1>
      <RefClass1></RefClass1>
      <RefClass2></RefClass2>
      <RefFunc1></RefFunc1>
      <RefFunc2></RefFunc2>
      <br></br>
      <br></br>
      <hr></hr>
      <h1>Practice</h1>
      <Practice0></Practice0>
      <MathQuizPrac></MathQuizPrac> */}
      {/* <h1>Life Cycle</h1> */}
      {/* <LifeCylcleClass></LifeCylcleClass> */}
      {/* <LifeCylcleFunc></LifeCylcleFunc> */}
      <h1>Life Cycle Prac</h1>
      <Container>
        <CyclePractice01></CyclePractice01>
      </Container>
    </div>
  );
}

export default App;


