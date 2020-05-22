import React from 'react';


const NasaCard = props => {
    return (
        <div className='nasa-card'>
            <h2>{props.imgUrl.title}</h2>
            <h2>Date: {props.imgUrl.date}</h2>
            <img className='apod-img' alt='nasa' src={props.imgUrl.url} />
            <p>{props.imgUrl.explanation}</p>
        </div>
    );
};

export default NasaCard;
