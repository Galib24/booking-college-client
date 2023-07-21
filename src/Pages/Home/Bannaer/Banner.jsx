import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/edu-img/edu-1-up.png';
import img2 from '../../../assets/edu-img/edu-2-up.png';
import img3 from '../../../assets/edu-img/edu-4-up.png';
import img4 from '../../../assets/edu-img/edu-3-up.png';
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img src={img2} />
              
            </div>
            <div>
                <img src={img1} />
               
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;