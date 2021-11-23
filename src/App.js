import './App.css';
import Header from "./components/Header/Header";
import 'materialize-css';
import HomePage from "./Pages/HomePage/HomePage";
import FooterComponent from "./components/Footer/FooterComponent";
function App() {
  return (
    <div className="App">
        <Header/>
        <HomePage/>
        <FooterComponent/>
    </div>
  );
}

export default App;
