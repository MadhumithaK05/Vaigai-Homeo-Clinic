import React from "react";
import g1 from './assets/Gallery/g1.jpg';
import g2 from './assets/Gallery/g2.jpg';
import g3 from './assets/Gallery/g3.jpg';
import g4 from './assets/Gallery/g4.jpg';
import g5 from './assets/Gallery/g5.jpg';
import g6 from './assets/Gallery/g6.jpg';
import g7 from './assets/Gallery/g7.jpg';
import g8 from './assets/Gallery/g8.jpg';
import g9 from './assets/Gallery/g9.jpg';
import g10 from './assets/Gallery/g10.jpg';
import g11 from './assets/Gallery/g11.jpg';
import g12 from './assets/Gallery/g12.jpg';
import g13 from './assets/Gallery/g13.jpg';
import g14 from './assets/Gallery/g14.jpg';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    { img: g1, title: "Psoriasis" },
    { img: g2, title: "impetigo" },
    { img: g3, title: "hair falling" },
    { img: g4, title: "Molloscum Contagiosum" },
    { img: g5, title: "Wart" },
    { img: g6, title: "Acne" },
    { img: g7, title: "Eczema" },
    { img: g8, title: "Piles" },
    { img: g9, title: "Psoriasis" },
    { img: g10, title: "We eczema" },
    { img: g11, title: "Hair Fall" },
    { img: g12, title: "Acne" },
    { img: g13, title: "Externak Piles" },
    { img: g14, title: "Allergic dermatits" }
];
export default function GAllery() {
    return (
        <ImageList sx={{ width: '100%', height: '100%' }} cols={2} gap={10}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={item.img}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover'
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}