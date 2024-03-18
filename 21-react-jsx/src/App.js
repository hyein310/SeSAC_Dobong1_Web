// import logo from './logo.svg';
import './App.css';
import ClassComp from './ClassComp';
// import UseJSX from './UseJSX';
import PractiveJSX from './PracticeJSX';

function App() {
  const title = "Hello World"
  return (
    <div>
      <PractiveJSX></PractiveJSX>
      {/* <UseJSX></UseJSX> */}
      <br/><br/>
      <ClassComp></ClassComp>
      <div>아이디 : <input></input></div>
      <div>비밀번호 : <input></input></div>
    </div>
  );
}

export default App;
