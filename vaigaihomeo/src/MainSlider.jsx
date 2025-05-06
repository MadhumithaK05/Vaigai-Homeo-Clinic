import React from "react";
import homeo1 from './assets/Home/homeo-1.jpg';
import homeo2 from './assets/Home/homeo-2.jpg';
import homeo3 from './assets/Home/homeo-3.jpg';


import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css";

const images = [homeo1, homeo2, homeo3];
export default function IntroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };
    return (
        <div style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`slide-${index}`} style={{ width: "100%", height: "30rem", borderRadius: "10px", objectFit: 'contain' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}