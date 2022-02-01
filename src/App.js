import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title.jsx";
import Modal from "./Components/Modal.jsx";

function App() {
  return (
    <div className="App">
      <Title title="Props Header" subtitle="A subtitle of this page" />
      <Modal />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
