import './App.css';
import Header from "./components/Header";
import 'materialize-css';
import WelcomeScreen from "./components/WelcomeScreen";
function App() {
  return (
    <div className="App">
        <Header/>
        <WelcomeScreen/>

    </div>
  );
}

export default App;
