import React from 'react';
import "./WelcomingSection.css"
import RegisterImplantIcon from "./RegisterImplantIcon"

const WelcomingSection = () => {
    return (
        <div className="main-container">
            <div className="first-circle">
                <div className="company-name-welcoming">
                    <span>
                        АМЕРИКАНСКИЙ
                    </span>
                    <p>
                        СТОМАТОЛОГИЧЕСКИЙ ЦЕНТР «ДАНТИСТ»
                    </p>
                </div>
                <div className="handing-text">
                    <p><b>Обратившись к нам, Вы можете быть уверены, что Вас обслужат</b>
                        <span> на высшем уровне,</span> и все<p> Ваши проблемы с зубами останутся в прошлом.</p></p>
                </div>

                <button className="join-button">
                    Записаться на прием
                </button>
                <div className="register-implant">
                    <RegisterImplantIcon/>
                    <span className="implant-text">
                        <h4>Имплантация передних зубов</h4>
                        <p>Передние зубы представлены резцами <p>и клыками. Отличительной особенностью...</p></p>
                        <a href="">
                            Читать полностью
                        </a>
                    </span>
                    <button className="implant-redirect-button">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.53503 1.07601L10.4493 9.48836C10.6707 9.76508 10.8367 10.0971 10.8367 10.3739C10.8367 10.7059 10.6707 11.038 10.4493 11.3147L2.53503 19.7271C2.03693 20.2805 1.20676 20.2805 0.653319 19.7824C0.0998743 19.2843 0.0998743 18.4542 0.597974 17.9007L7.68206 10.3739L0.597974 2.90237C0.0998743 2.34893 0.0998743 1.51876 0.653319 1.02066C1.20676 0.522561 2.03693 0.522561 2.53503 1.07601Z"
                                fill="#E21F4D"/>
                        </svg>
                    </button>
                </div>
                <div className="second-circle">
                    <p className="second-circle-text">
                        <p>
                            топ
                        </p>
                        <span>
                            5
                        </span>
                    </p>
                    <div className="third-circle">
                        <div className="third-circle-img"/>
                        <div className="third-circle-text">
                            <span>
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
                                </span>
                            <p>
                                в рейтинге клиник
                            </p>
                        </div>
                        <div className="user-container">
                            Бабаян Давид
                            <div className="user-icon">
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.8125 5.875C6.31641 5.875 7.5625 4.65039 7.5625 3.125C7.5625 1.62109 6.31641 0.375 4.8125 0.375C3.28711 0.375 2.0625 1.62109 2.0625 3.125C2.0625 4.65039 3.28711 5.875 4.8125 5.875ZM5.88672 6.90625H3.7168C1.6543 6.90625 0 8.58203 0 10.6445C0 11.0527 0.322266 11.375 0.730469 11.375H8.87305C9.28125 11.375 9.625 11.0527 9.625 10.6445C9.625 8.58203 7.94922 6.90625 5.88672 6.90625Z"
                                        fill="#E21F4D"/>
                                </svg>

                            </div>
                        </div>
                        <span className="quote-first-half">
                            Наша клиника скорее
                        </span>
                        <span className="quote-second-half">
                            гостеприимный дом,
                        </span>
                        <span className="quote-third-half">
                            чем официальное медецинское учереждение
                        </span>
                        <div className="signature">
                            <svg width="148" height="113" viewBox="0 0 148 113" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="20.0234" y="0.349609" width="130.863" height="84.5157"
                                      transform="rotate(13.2548 20.0234 0.349609)" fill="url(#pattern0_1_28)"/>
                                <defs>
                                    <pattern id="pattern0_1_28" patternContentUnits="objectBoundingBox" width="1"
                                             height="1">
                                        <use xlinkHref="#image0_1_28" transform="scale(0.00571534 0.00884956)"/>
                                    </pattern>
                                    <image id="image0_1_28" width="175" height="113"
                                           xlinkHref="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomingSection;