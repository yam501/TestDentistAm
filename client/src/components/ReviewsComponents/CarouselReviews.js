import React from 'react';
import OwlCarousel from "react-owl-carousel";
import CarouselReviewsItem from "./CarouselReviewsItem";

const CarouselReviews = () => {
    const array = [
        {id: 1, name: 'Алена', city: 'г.Москва'},
        {id: 2, name: 'Александра', city: 'г.Москва'},
        {id: 3, name: 'Екатерина', city: 'г.Москва'},
        {id: 4, name: 'Светлана', city: 'г.Москва'},
        {id: 5, name: 'Татьяна', city: 'г.Москва'},
        {id: 6, name: 'Криситина', city: 'г.Москва'}
    ]

    return (
        <div className="carousel-reviews-wrapper">
            <OwlCarousel
                className='owl-theme carousel-reviews'
                items={3}
                nav
                loop
                draggable={false}
                touchDrag={false}
                mouseDrag={false}
                dots={false}
                navText={[
                    '<span><svg style="transform: rotate(270deg)" width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M1.13362 8.89576L9.54598 0.981505C9.8227 0.760128 10.1548 0.594094 10.4315 0.594095C10.7636 0.594095 11.0956 0.760128 11.3723 0.981506L19.7847 8.89576C20.3381 9.39386 20.3381 10.224 19.84 10.7775C19.3419 11.3309 18.5118 11.3309 17.9583 10.8328L10.4315 3.74873L2.95999 10.8328C2.40654 11.3309 1.57638 11.3309 1.07828 10.7775C0.580179 10.224 0.580179 9.39386 1.13362 8.89576Z" fill="#E21F4D"/> ' +
                    '</svg></span>',
                    '<span><svg style="transform: rotate(90deg)" width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M1.13362 8.89576L9.54598 0.981505C9.8227 0.760128 10.1548 0.594094 10.4315 0.594095C10.7636 0.594095 11.0956 0.760128 11.3723 0.981506L19.7847 8.89576C20.3381 9.39386 20.3381 10.224 19.84 10.7775C19.3419 11.3309 18.5118 11.3309 17.9583 10.8328L10.4315 3.74873L2.95999 10.8328C2.40654 11.3309 1.57638 11.3309 1.07828 10.7775C0.580179 10.224 0.580179 9.39386 1.13362 8.89576Z" fill="#E21F4D"/> ' +
                    '</svg></span>',
                ]}>
                {array.map(item => <CarouselReviewsItem key={item.id} city={item.city} name={item.name}/>)
                }
            </OwlCarousel>
        </div>


    );
};

export default CarouselReviews;