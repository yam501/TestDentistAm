import React from 'react';
import './header.css'
import HeaderStar from "./HeaderStar";
import HeaderMap from "./HeaderMap"
import HeaderIconTel from "./HeaderIconTel";
import HeaderIconTelMobile from "./HeaderIconTelMobile";

const Header = () => {
    return (
        <div className="header-container">
            <header>
                <p className="name-logo">

                    Dentist
                    <div className="header-star-container">
                        <HeaderStar/>
                    </div>


                    <span>
                        Am
                    </span>
                </p>
                <div className="logo-wrapper">
                    <hr className="hr-header"/>
                    <p className="company-name">Американский стоматологический центр</p>
                </div>
                <div className="header-geolocation">
                    <HeaderMap/>
                    <p className="geolocation-text">
                        г. Москва,
                        <p>ул. Перерва д. 39</p>
                    </p>
                </div>
                <a className="tel-number tel-group" href='tel:+79855357666'>
                    <HeaderIconTel/>
                    <div className="telephone-text-wrapper">
                        <p>
                            +7 985
                            <span>
                                 535 76 66
                             </span>
                        </p>
                        <ul className="telephone-text">
                            <li>
                            <span>
                                Звоните в любое время
                            </span>
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="mobile-container">
                    <a className="header-tel-mobile" href='tel:+79855357666'>
                        <HeaderIconTelMobile/>
                    </a>
                    <div className="burger-menu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;