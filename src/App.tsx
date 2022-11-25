import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Text from "./pages/Text";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
