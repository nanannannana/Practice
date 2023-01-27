/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css';
import styled from 'styled-components';
// const Music = styled.iframe`
//   visibility: hidden;
// `;

function App() {
  return (
    <div className="App">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pSUydWEqKwE?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
