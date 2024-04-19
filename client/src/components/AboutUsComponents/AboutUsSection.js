import React from 'react';
import './aboutUs.css'

const AboutUsSection = () => {
    return (
        <div className="about-us-wrapper">
            <div className="about-us-container">
                <span className="head-doctor">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
                            fill="#E21F4D"/>
                    </svg>
                     Бабаян
                    <p>
                         Давид
                    </p>
                    <span>
                        Главный врач
                    </span>
                    <button>
                        Записаться на приём
                    </button>
                </span>
                <div>
                    Цена под ключ
                </div>
            </div>

            <div className="our-experts-table">

            </div>
        </div>
    );
};

export default AboutUsSection;