import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import Ternary from './components/Ternary';
import ArrState from './components/ArrState';
import Props from './components/Props';

function App() {
  const dataArr = [
    {
      color: 'yellow',
      shape: 'circle',
      name: '노란색 공',
    },
    {
      color: 'red',
      shape: 'square',
      name: '빨간색 상자',
    },
    {
      color: 'green',
      shape: 'triangle',
      name: '초록색 꼬깔',
    },
  ];
  return (
    <div className="App">
      <Props dataArr={dataArr} />
    </div>
  );
}

export default App;
