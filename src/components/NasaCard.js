import React from 'react';

const NasaCard = props => {
    return (
        <div className='nasa-card'>
            <h2>Title: {props.imgUrl.title}</h2>
            <p>Date: {props.imgUrl.date}</p>
            <img className='apod-img' alt='nasa' src={props.imgUrl.url} />
            <p>{props.imgUrl.explanation}</p>
        </div>
    );
};

export default NasaCard;
