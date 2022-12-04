import { Route, Routes } from 'react-router-dom';
import FirebaseTeting from './pages/FirebaseTesting';
import Search from './pages/Search';
import Text from './pages/Text';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Text />} />
        <Route path='/search' element={<Search />} />
        <Route path='/fb' element={<FirebaseTeting />} />
      </Routes>
    </>
  );
}

export default App;
