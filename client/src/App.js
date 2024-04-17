import "./App.css"
import WelcomingSection from "./components/WelcomingSectionComponents/WelcomingSection";
import ServicesSection from "./components/ServicesSectionComponents/ServicesSection";
import Header from "./components/HeaderComponents/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <WelcomingSection/>
        <ServicesSection/>
    </div>
  );
}

export default App;
