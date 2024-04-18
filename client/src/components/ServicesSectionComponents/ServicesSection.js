import React from 'react';
import './servicesSection.css'
import Carousel from "../Carousel";

const ServicesSection = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <button className="our-services-button">
                    Наши услуги
                </button>
            </div>
            <div className="top-text">
                Мы предлагаем <span>полное медицинское обслуживание</span><p>людям с различными проблемами со
                здоровьем</p>
            </div>
            <div className="carousel-wrapper">
                <Carousel/>
            </div>
        </div>
    );
};

export default ServicesSection;