import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-label">
                Удобное <b>расположение</b>
            </div>
            <div className="footer-text">
                Деятельность центра <b>направлена не только на восстановление жевательной <br/>функцию зубов</b>, а и на
                обеспечение в полной мере их эстетики.
            </div>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-content-location">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.2497 3.75L18.1247 26.25C18.0699 26.3697 17.9818 26.4711 17.871 26.5422C17.7602 26.6133 17.6314 26.6511 17.4997 26.6511C17.3681 26.6511 17.2392 26.6133 17.1284 26.5422C17.0176 26.4711 16.9296 26.3697 16.8747 26.25L12.4997 17.5L3.74972 13.125C3.63004 13.0702 3.52863 12.9821 3.45753 12.8713C3.38643 12.7605 3.34863 12.6316 3.34863 12.5C3.34863 12.3684 3.38643 12.2395 3.45753 12.1287C3.52863 12.0179 3.63004 11.9298 3.74972 11.875L26.2497 3.75Z"
                                stroke="#E21F4D" strokeWidth="2.875" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        г. Москва, м. Братиславская,<br/> ул. Перерва, д. 39, 2 этаж
                    </div>
                    <div className="footer-content-number">
                        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.25 6.42114H11.25L13.75 13.658L10.625 15.829C11.9637 18.972 14.1606 21.5158 16.875 23.0659L18.75 19.4475L25 22.3422V28.1317C25 28.8994 24.7366 29.6357 24.2678 30.1786C23.7989 30.7214 23.163 31.0264 22.5 31.0264C17.6241 30.6833 13.0252 28.2858 9.57104 24.2863C6.11688 20.2867 4.04631 14.9617 3.75 9.31588C3.75 8.54815 4.01339 7.81186 4.48223 7.26899C4.95107 6.72612 5.58696 6.42114 6.25 6.42114"
                                stroke="#E21F4D" strokeWidth="2.875" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                            +7 499 394 60 30
                            <ul className="telephone-text">
                                <li>
                            <span>
                                Звоните в любое время
                            </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-links">
                        <a href=".">Полезные статьи</a>
                        <a href=".">Правовая информация</a>
                    </div>
                </div>
                <div className="footer-content-right">
                    <div className="footer-whatsapp">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.75 26.2487L5.8125 21.4987C4.23458 19.2588 3.52833 16.52 3.82631 13.7963C4.12428 11.0727 5.40598 8.55135 7.43088 6.70558C9.45579 4.85981 12.0847 3.81645 14.8242 3.7713C17.5638 3.72616 20.2256 4.68234 22.3102 6.4604C24.3948 8.23845 25.7589 10.7162 26.1465 13.4285C26.534 16.1409 25.9184 18.9014 24.4151 21.1921C22.9119 23.4828 20.6243 25.1462 17.9817 25.8701C15.3392 26.5939 12.5233 26.3285 10.0625 25.1237L3.75 26.2487"
                                stroke="#E21F4D" strokeWidth="2.875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M11.25 12.5C11.25 14.1576 11.9085 15.7473 13.0806 16.9194C14.2527 18.0915 15.8424 18.75 17.5 18.75H18.75C18.9158 18.75 19.0747 18.6842 19.1919 18.5669C19.3092 18.4497 19.375 18.2908 19.375 18.125C19.375 17.9592 19.3092 17.8003 19.1919 17.6831C19.0747 17.5658 18.9158 17.5 18.75 17.5H17.5C17.3342 17.5 17.1753 17.5658 17.0581 17.6831C16.9408 17.8003 16.875 17.9592 16.875 18.125C16.875 18.2908 16.9408 18.4497 17.0581 18.5669C17.1753 18.6842 17.3342 18.75 17.5 18.75M11.25 12.5C11.25 12.6658 11.3158 12.8247 11.4331 12.9419C11.5503 13.0592 11.7092 13.125 11.875 13.125C12.0408 13.125 12.1997 13.0592 12.3169 12.9419C12.4342 12.8247 12.5 12.6658 12.5 12.5V11.25C12.5 11.0842 12.4342 10.9253 12.3169 10.8081C12.1997 10.6908 12.0408 10.625 11.875 10.625C11.7092 10.625 11.5503 10.6908 11.4331 10.8081C11.3158 10.9253 11.25 11.0842 11.25 11.25V12.5Z"
                                stroke="#E21F4D" strokeWidth="2.875" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Напишите нам в WhatsApp
                    </div>
                    <div className="footer-working-time">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 13.5226 25.959 12.0597 25.3936 10.6948C24.8283 9.3299 23.9996 8.08971 22.955 7.04505C21.9103 6.00039 20.6701 5.17172 19.3052 4.60636C17.9403 4.04099 16.4774 3.75 15 3.75C12.0163 3.75 9.15483 4.93526 7.04505 7.04505C4.93526 9.15483 3.75 12.0163 3.75 15C3.75 17.9837 4.93526 20.8452 7.04505 22.955C9.15483 25.0647 12.0163 26.25 15 26.25V26.25Z"
                                stroke="#E21F4D" strokeWidth="2.875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 8.75V15L18.75 18.75" stroke="#E21F4D" strokeWidth="2.875"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Пн-Пт 09:00—21:00<br/>
                        Сб-Вс 10:00—20:00
                    </div>
                    <div className="footer-content-links">
                        <a href="."> Сертификаты сотрудников </a>
                        <a href=".">Политика конфиденциальности </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;