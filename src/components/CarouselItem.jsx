import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const description = "Titulo de la descripcion";
const subdescription = "2021 +18 *69";

const CarouselItem = ({ cover , title , year , contentRating , duration })=>{
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}  />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt=""/>
                    <img className="carousel-item__details--img" src={plusIcon} alt=""/>
                </div>
                <p className="carousel-item__details--tittle">{title}</p>
                <p className="carousel-item__details--subtittle">
                    { `${year} ${contentRating} ${duration}` }    
                </p>
            </div>

        </div>

    );
}

export default CarouselItem;