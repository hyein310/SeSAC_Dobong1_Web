import logo from '../src/assets/logo.svg';
import './App.css';
import BasicCSS from "./components/BasicCSS"
import ModuleCSS from './components/ModuleCss';
import StyledComp from './components/StyledComp';
import AppClone from './components/PracticeSC';

function App() {
  return (
    <div className="App">
      {/* <h1>react에 style 적용하기</h1>
      <BasicCSS></BasicCSS>
      <ModuleCSS></ModuleCSS>
      <StyledComp></StyledComp> */}
      <AppClone></AppClone>
    </div>
  );
}

export default App;
