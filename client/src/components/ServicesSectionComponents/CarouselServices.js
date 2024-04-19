import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const CarouselServices = () => {
    return (
        <OwlCarousel
            className='owl-theme'
            style={{margin: 0}}
            nav
            dots={false}
            navText={[
                '<span class="arrow prev"><svg width="12" height="21" viewBox="0 0 12 21"  fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9.07435 1.07601L1.16009 9.48836C0.938715 9.76508 0.772682 10.0971 0.772682 10.3739C0.772682 10.7059 0.938715 11.038 1.16009 11.3147L9.07435 19.7271C9.57245 20.2805 10.4026 20.2805 10.9561 19.7824C11.5095 19.2843 11.5095 18.4542 11.0114 17.9007L3.92731 10.3739L11.0114 2.90237C11.5095 2.34893 11.5095 1.51876 10.9561 1.02066C10.4026 0.522561 9.57245 0.522561 9.07435 1.07601Z" fill="#E21F4D"/>\n' +
                '</svg></span>',
                '<span class="arrow next"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M2.92565 1.07601L10.8399 9.48836C11.0613 9.76508 11.2273 10.0971 11.2273 10.3739C11.2273 10.7059 11.0613 11.038 10.8399 11.3147L2.92565 19.7271C2.42755 20.2805 1.59739 20.2805 1.04394 19.7824C0.490499 19.2843 0.490499 18.4542 0.988599 17.9007L8.07269 10.3739L0.988599 2.90237C0.490499 2.34893 0.490499 1.51876 1.04394 1.02066C1.59739 0.522561 2.42755 0.522561 2.92565 1.07601Z" fill="#E21F4D"/>\n' +
                '</svg>\n</span>'
            ]}>
            <div className="item card card-treatment">
                <div className="card-text-wrapper">
                    <span className="name">
                        Лечение зубов
                    </span>
                    <span className="description">
                        Залог здоровья зубов – своевременное лечение у стоматолога. Важно обратиться в клинику...
                    </span>
                    <span className="option">
                        <button>Записаться</button>
                        <a href={"./"}>Читать полностью</a>
                    </span>
                </div>
            </div>
            <div className="item card card-extraction">
                <div className="card-text-wrapper">
                    <span className="name">
                        Удаление зубов
                    </span>
                    <span className="description">
                        Удаление зуба – это простая процедура, которая давно стала рутиной для стоматологов...
                    </span>
                    <span className="option">
                        <button>Записаться</button>
                        <a href={"./"}>Читать полностью</a>
                    </span>
                </div>
            </div>
            <div className="item card card-hygiene">
                <div className="card-text-wrapper">
                    <span className="name">
                        Зубная гигиена
                    </span>
                    <span className="description">
                        Профессиональная гигиена зубов – очистка всех поверхностей зуба от налета и отложений...
                    </span>
                    <span className="option">
                        <button>Записаться</button>
                        <a href={"./"}>Читать полностью</a>
                    </span>
                </div>
            </div>
            <div className="item card card-implant">
                <div className="card-text-wrapper">
                    <span className="name">
                        Имплантация зубов
                    </span>
                    <span className="description">
                        Титановый имплант устанавливается на место утраченного зуба и играет роль его корня...
                    </span>
                    <span className="option">
                        <button>Записаться</button>
                        <a href={"./"}>Читать полностью</a>
                    </span>
                </div>
            </div>
        </OwlCarousel>
    );
};

export default CarouselServices;