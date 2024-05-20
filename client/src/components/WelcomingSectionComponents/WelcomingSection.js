import React from 'react';
import './welcoming.css'
import RedirectButton from "../RedirectButton";
import Header from "../HeaderComponents/Header";

const WelcomingSection = () => {
    return (
        <div className="welcoming-wrapper">
            <Header/>
            <div className="welcoming-container">
                <div className="welcoming-content">
                    <div className="welcoming-left">
                        <div className="welcoming-rating">
                            <div>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 0.5L9.18386 5.68237H14.6329L10.2245 8.88525L11.9084 14.0676L7.5 10.8647L3.09161 14.0676L4.77547 8.88525L0.367076 5.68237H5.81614L7.5 0.5Z"
                                        fill="#DFB646"/>
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 0.5L9.18386 5.68237H14.6329L10.2245 8.88525L11.9084 14.0676L7.5 10.8647L3.09161 14.0676L4.77547 8.88525L0.367076 5.68237H5.81614L7.5 0.5Z"
                                        fill="#DFB646"/>
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 0.5L9.18386 5.68237H14.6329L10.2245 8.88525L11.9084 14.0676L7.5 10.8647L3.09161 14.0676L4.77547 8.88525L0.367076 5.68237H5.81614L7.5 0.5Z"
                                        fill="#DFB646"/>
                                </svg>
                            </div>
                            в рейтинге
                            клиник
                        </div>
                        <div className="welcoming-left-content">
                            <div className="welcoming-name">
                                Бабаян Давид
                                <div className="welcoming-name-img">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.8125 5.875C6.31641 5.875 7.5625 4.65039 7.5625 3.125C7.5625 1.62109 6.31641 0.375 4.8125 0.375C3.28711 0.375 2.0625 1.62109 2.0625 3.125C2.0625 4.65039 3.28711 5.875 4.8125 5.875ZM5.88672 6.90625H3.7168C1.6543 6.90625 0 8.58203 0 10.6445C0 11.0527 0.322266 11.375 0.730469 11.375H8.87305C9.28125 11.375 9.625 11.0527 9.625 10.6445C9.625 8.58203 7.94922 6.90625 5.88672 6.90625Z"
                                            fill="#E21F4D"/>
                                    </svg>

                                </div>
                            </div>
                            <div className="welcoming-about-first-half">
                                <div className="text-first">
                                    Наша клиника скорее
                                </div>
                                <div className="text-second">
                                    гостеприимный дом,
                                </div>
                                <div className="text-third">
                                    <text>чем официальное медицинское учреждение</text>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="welcoming-right">
                    <div className="welcoming-title">
                            <span>АМЕРИКАНСКИЙ</span> СТОМАТОЛОГИЧЕСКИЙ ЦЕНТР «ДАНТИСТ»
                        </div>
                        <div className="welcoming-under-title">
                            <b>Обратившись к нам, Вы можете быть уверены, что Вас обслужат <span>на высшем уровне,</span></b> и все Ваши
                            проблемы с зубами останутся в прошлом.
                        </div>
                        <button className="join-button">
                            Записаться на прием
                        </button>
                        <div className="implant-container">
                            <div className="implant-img">
                                <svg width="55" height="55" viewBox="0 0 55 55" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="55" height="55" fill="url(#pattern0_1_41)" fillOpacity="0.3"/>
                                    <defs>
                                        <pattern id="pattern0_1_41" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use xlinkHref="#image0_1_41" transform="scale(0.01)"/>
                                        </pattern>
                                        <image id="image0_1_41" width="100" height="100"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                            </div>
                            <div className="implant-text">
                                <span>Имплантация передних зубов</span>
                                <text> Передние зубы представлены резцами и клыками. Отличительной особенностью...
                                </text>
                                <a href="./">Читать полностью</a>
                            </div>
                            <RedirectButton type={"implant-button"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WelcomingSection;