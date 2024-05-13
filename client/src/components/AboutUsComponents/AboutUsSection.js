import React from 'react';
import './aboutUs.css'
import firstImage from '../../assets/first.png';
import secondImage from '../../assets/secnd.png';
import thirdImage from  '../../assets/thirds.png';

import ExpertCard from "./ExpertCard";
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
                    <span className="head-doctor-name">
                        Бабаян
                        <p>
                            Давид
                        </p>
                    </span>
                    <span className="head-doctor-position">
                        Главный врач
                    </span>
                    <button>Записаться на приём</button>
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
                                Для этого мы сделали простой и понятный прайс-лист. Дантист — одна из немногих клиник в
                                Москве, которая может предложить высокий профессионализм врачей, самые современные,
                                безопасные материалы и демократичные цены.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-experts-table">
                <div className="experts-table-title">
                    <div className="experts-table-title-left">
                        <div className="experts-table-title-pin">
                            Наши специалисты
                        </div>
                        <div className="experts-table-title-text">
                            <span>Познакомьтесь</span> с нашими <b>врачами</b>
                        </div>
                    </div>
                    <div className="experts-table-title-right">
                        <div>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
                                    fill="#E21F4D"/>
                            </svg>
                        </div>
                        Наш административный и вспомогательный персонал <b>обладает всеми необходимыми навыками работы с
                        людьми</b> и обучен, чтобы помочь вам со всеми медицинскими вопросами
                    </div>

                </div>
                <div className="experts-cards-container">
                    <ExpertCard img={firstImage}
                                name={"Арзумаров Амаяк Аркадьевич"}
                                type={"Врач-стоматолог ортопед, гнатолог"}
                                description={"Ведущий специалист клиники по съемному и несъемному протезированию"}
                    />
                    <ExpertCard
                        img={secondImage}
                        name={"Жвания Нала Анзоровна"}
                        type={"Врач-стоматолог ортодонт"}
                        description={"Специалист по ортодонтическому лечению на всех видах брекет-систем взрослых и детей с 12 лет"}
                    />
                    <ExpertCard
                        img={thirdImage}
                        name={"Арзуманов Андраник Аркадьевич"}
                        type={"Врач-стоматолог ортодонт"}
                        description={"Специалист по ортодонтическому лечению на брекет-системах  и элайнерах"}
                    />
                </div>
                <button> Загрузить еще</button>
            </div>
        </div>);
};

export default AboutUsSection;