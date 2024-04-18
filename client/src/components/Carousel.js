import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardItem from "./CardItem";

const Carousel = () => {
    return (
        <OwlCarousel
            className='owl-theme'
            s tyle={{marginLeft: 20}}
            margin={10}
            nav
            navText={[
                '<Re',
                '<span class="arrow next">›</span>'
            ]}>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </OwlCarousel>
    );
};

export default Carousel;