import React from 'react';

const CardItem = ({data}) => {
    return (
        <div className="card-wrapper item" style={{backgroundImage: `url(${data.image})`}}>
        </div>
    );
};

export default CardItem;