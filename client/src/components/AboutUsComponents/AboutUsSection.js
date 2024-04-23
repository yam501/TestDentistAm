import React from 'react';
import './aboutUs.css'

const AboutUsSection = () => {
    return (<div className="about-us-wrapper">
        <div className="about-us-container">
                <span className="head-doctor">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
                            fill="#E21F4D"/>
                    </svg>
                    <span className="head-doctor-name">
                        Бабаян
                        <p>
                            Давид
                        </p>
                    </span>
                    <span className="head-doctor-position">
                        Главный врач
                    </span>
                    <button>
                        Записаться на приём
                    </button>
                </span>
            <div className="about-us-info">
                <div className="about-us-label">
                    Наша клиника
                </div>
                <div className="about-us-text-wrapper">
                    <div className="about-us-text-container">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
                                fill="#E21F4D"/>
                        </svg>
                        <span>
                            «Цена под ключ»
                            <p>
                                Мы работаем по удобной пациентам системе
                            </p>
                            </span>
                    </div>
                    <div className="about-us-text">
                        <span>
                            Для нас очень важно, чтобы пациент до начала лечения понимал какой будет итоговая сумма за все лечение, без подводных камней и необоснованных доплат.
                        </span>
                        <p>
                            Для этого мы сделали простой и понятный прайс-лист. Дантист — одна из немногих клиник в Москве, которая может предложить высокий профессионализм врачей, самые современные, безопасные материалы и демократичные цены.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-experts-table">
        </div>
    </div>);
};

export default AboutUsSection;