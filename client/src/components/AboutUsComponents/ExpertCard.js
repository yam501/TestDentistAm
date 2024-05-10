import React from 'react';
import arrowRight from "../../assets/arrow-right.png";

const ExpertCard = ({img, name, type, description}) => {
    return (
        <div className="experts-card-wrapper">
            <img src={img} alt="картинка"/>
            <div className="name">
                {name}
            </div>
            <div className="type">
                {type}
            </div>
            <div className="description">
                {description}
            </div>
            <div className="btn-wrapper">
                <button> Подробней <img src={arrowRight} alt=">"/></button>
            </div>
        </div>
    );
};

export default ExpertCard;