import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
        <a
          href="https://github.com/lmiya9/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Repository Link
        </a>
      </header>
    </div>
  );
}

export default App;
