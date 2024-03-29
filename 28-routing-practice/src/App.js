import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import "../src/styles/Cstyle.scss";
import StudentPage from "./pages/StudentPage";
import CodingOnPage from "./pages/CodingOnPage";
import NotFound from "./pages/NotFound";
import UseQuery from "./pages/UseQuery";


const MyLink = styled(Link)`
  text-decoration:none;
  color: black;
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="student/:studentName" element={<StudentPage></StudentPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
