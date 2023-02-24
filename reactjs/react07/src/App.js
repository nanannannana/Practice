import './App.css';
import Main from './components/Main';
import Test from './components/Test';
import Test2 from './components/Test2';
import { Routes, Route } from 'react-router-dom';
import Test3 from './components/Test3';
import io from 'socket.io-client';
import FileDelete from './components/FileDelete';

// 소켓 연결
const socket = io.connect('http://localhost:4000');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test1" element={<Test />} />
        <Route path="/test2" element={<Test2 socket={socket} />} />
        <Route path="/test2/:roomID" element={<Test3 socket={socket} />} />
        <Route path="/filedelete" element={<FileDelete />} />
      </Routes>
    </div>
  );
}

export default App;
