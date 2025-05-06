import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import d1 from './assets/Home/Arthritis.png';
import d2 from './assets/Home/Asthma.png';
import d3 from './assets/Home/Piles.png';
import d4 from './assets/Home/Skin Diseases.png';
import d5 from './assets/Home/Kidney stone.png';
import d6 from './assets/Home/Dandruff.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const dis = [
    {
        name: "Arthritis",
        desc: "Homeopathy treatment for arthritis uses natural remedies which are safe, has no side effects, non toxic and also suitable to every individual. It also improves the mobility and quality of life.",
        img: d1
    },
    {
        name: "Asthma",
        desc: "Asthma is a disease affecting the airways that carry air in and out of your lungs. Homeopathy for Asthma is the most harmless & most reliable method to relive asthma & to treat its complications.",
        img: d2
    },
    {
        name: "Piles",
        desc: "Homeopathy successfully treats piles (both internal and external) without using any invasive procedures. It is very affective & provides a long term relief by offering natural remedies for the treatment.",
        img: d3
    },
    {
        name: "Skin Diseases",
        desc: "The term skin disorder is used to describe various skin problems, ranging from small red bumps on the skin to widespread rashes.",
        img: d4
    },
    {
        name: "Kidney stone",
        desc: "Kidney stones are one of the most painful of urologic disorders. Men tend to be affected more frequently than women.",
        img: d5
    },
    {
        name: "Dandruff",
        desc: "Dandruff is not only seen on the scalp but it also affects other areas with rich oil glands like face, ears and upper trunk.",
        img: d6
    },
];
export default function Treatment() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                {dis.map((disease, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Item style={{ alignContent: "center", backgroundColor:"rgb(85, 181, 181)" }}>
                            <img src={disease.img} alt={disease.name} style={{ width: "100%", height: 200, objectFit: "contain", marginBottom: "1rem" }} />
                            <h3 style={{color:"#fff"}}>{disease.name}</h3>
                            <p style={{ color: "black", textAlign: "justify", maxWidth: 300, margin: "0 auto" }}>{disease.desc}</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
