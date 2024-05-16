import React from 'react';

import photo from '../../assets/photoItemReviews.png';

const CarouselReviewsItem = ({city, name}) => {
    return (
        <div className="item carousel-reviews-item-wrapper">
            <div className="img-wrapper">
                <img src={photo} alt={"Фото"}/>
            </div>
            <span>{name}<b>{city}</b></span>
        </div>
    );
};

export default CarouselReviewsItem;