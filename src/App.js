import './App.css';
import Header from "./components/Header/Header";
import 'materialize-css';
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
        <Header/>
        <HomePage/>
    </div>
  );
}

export default App;
