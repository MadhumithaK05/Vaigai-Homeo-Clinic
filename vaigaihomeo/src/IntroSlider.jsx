import React from "react";
import dr from './assets/Home/dr.jpeg';
import dr2 from './assets/Home/dr2.png';
import dr3 from './assets/Home/dr3.jpeg';
import dr5 from './assets/Home/dr5.jpeg';
import dr4 from './assets/Home/dr6.jpeg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [dr, dr2, dr3, dr4, dr5];
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
        <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`slide-${index}`} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}