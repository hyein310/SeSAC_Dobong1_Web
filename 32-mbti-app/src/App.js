import { useSelector } from "react-redux";
import Mbti from "./pages/Mbti";
import Start from "./pages/Start";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle"
import Show from "./pages/Show";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  // 페이지 별 화면 위해서 useSelector 이용
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);  // length = 4
  console.log(page);
  return (
    <Main>
      <GlobalStyle />
      { page === 0 ? <Start /> : 
        page!==survey.length+1 ? <Mbti /> :
        <Show /> }
    </Main>
  );
}

export default App;
