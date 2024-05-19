import React from 'react';
import WelcomingSection from "../components/WelcomingSectionComponents/WelcomingSection";
import ServicesSection from "../components/ServicesSectionComponents/ServicesSection";
import AboutUsSection from "../components/AboutUsComponents/AboutUsSection";
import TenetsSection from "../components/TenetsCompontents/TenetsSection";
import ReviewsSection from "../components/ReviewsComponents/ReviewsSection";
import LicensesSections from "../components/LicensesComponents/LicensesSections";

const MainPage = () => {
    return (
        <div className='page_body'>
            <WelcomingSection/>
            <ServicesSection/>
            <AboutUsSection/>
            <TenetsSection/>
            <ReviewsSection/>
            <LicensesSections/>
        </div>
    );
};

export default MainPage;