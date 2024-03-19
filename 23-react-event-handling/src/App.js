import './App.css';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import HandlerEx from './HandlerEx';
import ColorEx from './ColorEx';
import HiddenEx from './HiddenEx';
// import Select from './Select';
import MultiEx from './MultiEx';

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SyntheticEvent></SyntheticEvent>
      <Counter></Counter>
      <h1>실습 문제</h1>
      <HandlerEx></HandlerEx>
      <ColorEx></ColorEx>
      <HiddenEx></HiddenEx>
      <br></br>
      <hr></hr>
      <MultiEx></MultiEx>
    </div>
  );
}

export default App;
