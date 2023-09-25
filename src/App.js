import "./App.css";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <Search />
        <City />
        <Temperature />
      </div>
    </div>
  );
}

export default App;
