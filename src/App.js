import './App.css';
import Header from "./components/Header/Header";
import 'materialize-css';
import FooterComponent from "./components/Footer/FooterComponent";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
