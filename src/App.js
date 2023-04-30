import logo from './laptop.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Say Bye to Kickback
        </p>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          (2016-2023)
        </p>
        <a
          className="App-link"
          href="https://medium.com/wearekickback"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
