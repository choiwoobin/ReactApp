import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          메인화면
        </p>
{/*         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
{         <a
          className="App-link"
          href="https://www.naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크
        </a> }
      </header>
    </div>
  );
}

export default App;
