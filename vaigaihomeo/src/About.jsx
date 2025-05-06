import React from "react";
import kannan from './assets/Home/home-kannan.png';
import IntroSlider from "./IntroSlider";
import './style.css';
export default function About() {
    return (
        <div style={{ width: '100%' }}>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                paddingTop: "2.5rem",
                marginBottom: "4rem",
            }}>
                <div style={{
                    flex: 1,
                    minWidth: 300,
                    maxWidth: 600,
                    paddingLeft: "0.5rem",
                    //paddingRight: "2rem",
                    paddingBottom: "1.5rem",
                }}>
                    <h3>Welcome to</h3>
                    <h1>Vaigai Homeo Clinic</h1>
                    <p>
                        Vaigai Homeo Clinic was established in the year 1997.
                        It is a multi-speciality clinic which treats all kinds
                        of health disorders in a most gentle &amp; permanent
                        manner without any side effects.
                    </p>
                </div>
                <div style={{
                    flex: 1,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    textAlign: "center",
                }}>
                    <IntroSlider />
                </div>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "4rem",
                background: "linear-gradient(to right, #CDD0D1, #ffffff)",
                padding: "1rem",
                borderRadius: "10px"
            }}>
                <div style={{
                    flex: 1,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1rem"
                }}>
                    <img
                        src={kannan}
                        alt="Dr. Kannan"
                        style={{
                            width: "100%",
                            maxWidth: 400,
                            maxHeight: 400,
                            objectFit: "contain",
                            borderRadius: "10px",
                        }}
                    />
                </div>
                <div style={{
                    flex: 1,
                    minWidth: 300,
                    paddingLeft: "1rem",
                    paddingBottom: "1.5rem",
                }}>
                    <h3>Master Of Homeopathy</h3>
                    <h1>Dr.L.Kannan</h1>
                    <p>Authorised medical officer for Central Government staffs.</p>
                    <p>
                        Dr.L.Kannan completed B.H.M.S (Bachelor of Homeopathy
                        Medicine and Surgery) in 1997 from GHMCH,
                        Thirumangalam, Madurai, India.
                        He has an experience of 23 yrs. He is well
                        versed in Tamil, English and Telugu.
                    </p>
                </div>
            </div>
        </div>
    );
}
