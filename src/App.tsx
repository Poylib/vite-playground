import { Route, Routes } from "react-router-dom";
import Text from "./pages/Text";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Text />} />
      </Routes>
    </>
  );
}

export default App;
