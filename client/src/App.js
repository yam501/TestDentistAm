import "./App.css"
import Header from "./components/HeaderComponents/Header";
import MainPage from './pages/MainPage'
import Footer from "./components/FooterComponents/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
  );
}

export default App;
