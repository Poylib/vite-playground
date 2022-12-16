import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Home from './pages/Home';
import UserCheck from './pages/UserCheck';
import Header from './components/Header';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/zt' element={<UserCheck />} />
      </Routes>
    </>
  );
}

export default App;
