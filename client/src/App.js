import "./App.css"
import WelcomingSection from "./components/WelcomingSectionComponents/WelcomingSection";
import ServicesSection from "./components/ServicesSectionComponents/ServicesSection";
import Header from "./components/HeaderComponents/Header";
import AboutUsSection from "./components/AboutUsComponents/AboutUsSection";

function App() {
  return (
    <div className="App">
        <Header/>
        <WelcomingSection/>
        <ServicesSection/>
        <AboutUsSection/>
    </div>
  );
}

export default App;
