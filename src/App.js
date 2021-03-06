import logo from "./logo.svg";
import "./App.css";
import MainFeed from "./components/MainFeed";

function App() {
  return (
    <div className="App bg-gray-600">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="font-bold text-4xl">Weather Check App</h1>
        <h2 className="text-xl">React.js and Tailwind CSS</h2>
      </header>
      <MainFeed />
    </div>
  );
}

export default App;
