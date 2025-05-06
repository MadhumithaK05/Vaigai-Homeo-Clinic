import React from "react";
import About from "./About";
import MainSlider from "./MainSlider";
import Treatment from "./Treatment";

export default function Home() {
    return (
        <div>
            <MainSlider />
            <About />
            <h2 style={{ textAlign:"center" }}>TREATMENT</h2>
            <Treatment />
        </div >
    );
}