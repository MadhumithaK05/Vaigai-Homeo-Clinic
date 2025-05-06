import React from "react";

export default function About() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
            <div style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "10px", padding: "1.5rem", width: "100%", maxWidth: "400px", boxSizing: "border-box", backgroundColor: "#fff" }}>
                <h3>Address</h3>
                <p>Old Number 26/1, New Number 92, Dr Ramaswamy Salai, Landmark: Opposite Amman Koil, Chennai - 600078, Tamil Nadu, India</p>
                <h3>Email</h3>
                <p>kannan.vaigai@gmail.com</p>
                <h3>Phone</h3>
                <p>+91 9444301226</p>
                <h3>Working Hours</h3>
                <p>10 am to 1.30 pm,5.30 pm to 9.00 pm, on monday to saturday And 10.30 am to 1.30 pm on sunday.</p>

                <h3>Additional Info</h3>
                <p>We are available for consultation by telephone and whatsapp, and We able to send medicine by courier all over the world</p>
            </div>
        </div>
    );
}