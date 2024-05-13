import React from 'react';
import "./reviews.css"
import yell from '../../assets/yell.png'
import topDent from '../../assets/topDent.png'
import top from '../../assets/32top.png'
import twoGis from '../../assets/2gis.png'

const ReviewsSection = () => {
    return (
        <div className="reviews-wrapper">
            <div className="reviews-container">
                <div className="reviews-title">
                    <div className="reviews-pin">Отзывы</div>
                    <div className="reviews-links-block-container">
                        <div className="reviews-links-block">
                            <span>Вдохновляющие <b>истории</b></span>
                            <div>
                                <a href="" className="all">Все</a>
                                <a href="" className="read">Читать отзывы</a>
                                <a href="" className="watch">Смотреть отзывы</a>
                            </div>

                        </div>
                        <div className="reviews-links-imgs-container">
                            <text>Отзывы о клинике на популярных порталах</text>
                            <div className="reviews-links-imgs">
                                <div>
                                    <img src={yell} alt={"yell img"}/>
                                </div>
                                <div>
                                    <img src={topDent} alt={"topDent img"}/>
                                </div>
                                <div>
                                    <img src={top} alt={"32top img"}/>
                                </div>
                                <div>
                                    <img src={twoGis} alt={"2Gis img"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews-right"></div>

            </div>
        </div>
    );
};

export default ReviewsSection;