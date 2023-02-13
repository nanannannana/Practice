import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import KakaoLogin from './components/KakaoLogin';
import KakaoLogout from './components/KakaoLogout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/kakaoLogout" element={<KakaoLogout />} />
      </Routes>
    </div>
  );
}

export default App;
