import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    console.log('안녕');
  };
  return (
    <div className="App">
      <button onClick={onClick}>gps</button>
    </div>
  );
}

export default App;
