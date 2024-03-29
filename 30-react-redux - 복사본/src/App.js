import Box from "./components/Box";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>상태관리 1 context API</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box></Box>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
