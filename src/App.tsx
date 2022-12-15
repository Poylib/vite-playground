import { Route, Routes } from 'react-router-dom';
import FirebaseTeting from './pages/FirebaseTesting';
import Search from './pages/Search';
import Home from './pages/Home';
import UserCheck from './pages/UserCheck';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/fb' element={<FirebaseTeting />} />
        <Route path='/login' element={<UserCheck />} />
      </Routes>
    </>
  );
}

export default App;
