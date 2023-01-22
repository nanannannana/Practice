import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Board from './components/Board';
import Home from './components/Home';
import Header from './components/Header';
import NotFound from './components/Notfound';
import BoardDetail from './components/BoardDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
