// src/components/PhotoGallery.js

import React from 'react';
import Slider from 'react-slick';
import './PhotoGallery.css';
//import images 
import cse1 from './assets/cse1.jpg';
import quay from './assets/quay.JPG';
import cse2 from './assets/cse2.jpeg';
import cove from './assets/cove.JPG';
import mewe from './assets/mewe.JPG';
import wvan from './assets/wvan.JPG';

const photos = [
    cse1,
    quay,
    cse2,
    cove,
    mewe,
    wvan,

    // Add paths to more photos
];

const PhotoGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className="photo-gallery">
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={index} className="slide">
                        <img src={photo} alt={`Slide ${index + 1}`} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PhotoGallery;