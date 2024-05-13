import "./App.css"
import WelcomingSection from "./components/WelcomingSectionComponents/WelcomingSection";
import ServicesSection from "./components/ServicesSectionComponents/ServicesSection";
import Header from "./components/HeaderComponents/Header";
import AboutUsSection from "./components/AboutUsComponents/AboutUsSection";
import TenetsSection from "./components/TenetsCompontents/TenetsSection";
import ReviewsSection from "./components/ReviewsComponents/ReviewsSection";

function App() {
  return (
    <div className="App">
        <Header/>
        <WelcomingSection/>
        <ServicesSection/>
        <AboutUsSection/>
        <TenetsSection/>
        <ReviewsSection/>
    </div>
  );
}

export default App;
