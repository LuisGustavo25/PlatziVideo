import React, { Children , Fragment} from 'react';

import '../assets/styles/components/Carousel.scss';

const Carousel = ({children})=>{
    return(
        <Fragment>
                <div className="carousel__container">
                    {children}
                </div>
        </Fragment>
        
    );
}

export default Carousel;