import React from 'react';
import './servicesSection.css'
import CarouselServices from "./CarouselServices";

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
                <CarouselServices/>
            </div>
        </div>
    );
};

export default ServicesSection;