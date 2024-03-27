// import logo from './logo.svg';
// import './App.css';
import UseMemoObj from './components/UseMemoObj';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';
import CustomHook from './components/CustomHook';
import Form from './components/UseForm';
import PracUseForm from './components/PracUseForm';

function App() {
  useTitle("React hook!")
  return (
    <>
      <h1>react hook</h1>
      {/* <UseMemo></UseMemo>
      <UseMemoObj></UseMemoObj> */}
      {/* <UseCallback></UseCallback>
      <br></br>
      <UseCallback2></UseCallback2> */}
      {/* <UseReducer></UseReducer> */}
      {/* <CustomHook></CustomHook> */}
      {/* <Form></Form> */}
      <PracUseForm></PracUseForm>
    </>
  );
}

export default App;
