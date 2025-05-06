import React from "react";
import d1 from './assets/Diseases/d1.jpg';
import d2 from './assets/Diseases/d2.jpeg';
import d3 from './assets/Diseases/d3.jpeg';
import d4 from './assets/Diseases/d4.jpeg';
import d5 from './assets/Diseases/d5.jpeg';
import d6 from './assets/Diseases/d6.jpeg';
import d7 from './assets/Diseases/d7.jpeg';
import d8 from './assets/Diseases/d8.jpeg';
import d9 from './assets/Diseases/d9.jpeg';
import d10 from './assets/Diseases/d10.jpeg';
import d11 from './assets/Diseases/d11.jpeg';
import d12 from './assets/Diseases/d12.jpeg';
import d13 from './assets/Diseases/d13.jpeg';
import d14 from './assets/Diseases/d14.jpeg';
import d15 from './assets/Diseases/d15.jpeg';
import d16 from './assets/Diseases/d16.jpeg';
import d17 from './assets/Diseases/d17.jpeg';
import d18 from './assets/Diseases/d18.jpeg';
import d19 from './assets/Diseases/d19.jpeg';
import d20 from './assets/Diseases/d20.jpeg';
import d21 from './assets/Diseases/d21.jpeg';
import d22 from './assets/Diseases/d22.jpeg';
import d23 from './assets/Diseases/d23.jpeg';
import d24 from './assets/Diseases/d24.jpeg';

const diseases = [
    { id: 1, name: "Wart", desc: "Warts are caused by various strains of human papillomaviruses. Different strains may cause warts in different parts of the body. Warts can be spread from one location on the body to another or from person to person by contact with the wart.", img: d1 },
    { id: 2, name: "Psoriasis", desc: "Psoriasis is thought to be an immune system problem. The most common symptom is a rash on the skin, but sometimes the rash involves the nails or joints. Treatment aims to remove scales and stop skin cells from growing so quickly. Topical ointments, light therapy and medication can offer relief.", img: d2 },
    { id: 3, name: "ECZEMA", desc: "Eczema is a condition where patches of skin become inflamed, itchy, red, cracked, and rough. Blisters may sometimes occur. The word 'eczema' is also used specifically to talk about atopic dermatitis, the most common type of eczema.", img: d3 },
    { id: 4, name: "Wet eczema", desc: "Patches of skin become red, scaly and itchy. Sometimes, tiny blisters containing clear fluid can form and the affected areas of skin can weep. Weeping is a sign that the dermatitis has become infected, usually with the bacterium Staphylococcus aureus", img: d4 },
    { id: 5, name: "Hair loss", desc: "Hair loss without scarring of the scalp is a very common condition and affects most people at some time in their lives.Medical professionals should distinguish hair loss from breakage of the hair shaft from hair loss due to decreased hair growth.", img: d5 },
    { id: 6, name: "Piles", desc: "Homeopathy successfully treats piles (both internal and external) without using any invasive procedures. It is very affective & provides a long term relief by offering natural remedies for the treatment.", img: d6 },
    { id: 7, name: "Molluscum contagiosum", desc: "Molluscum contagiosum is an infection caused by a poxvirus (molluscum contagiosum virus). It produces benign raised bumps, or lesions, on the upper layers of your skin. The result of the infection is usually a benign, mild skin disease characterized by lesions (growths) that may appear anywhere on the body.", img: d7 },
    { id: 8, name: "Hyperpigmentation", desc: "Hyperpigmentation is a common, usually harmless condition in which patches of skin become darker in color than the normal surrounding skin. This darkening occurs when an excess of melanin, the brown pigment that produces normal skin color, forms deposits in the skin.", img: d8 },
    { id: 9, name: "PSORIASIS WITH IMPETIGO", desc: "Psoriasis is an autoimmune disorder characterized by inflamed areas of skin. People with the most common type of psoriasis, plaque psoriasis, develop thick patches of red and white scaly skin known as lesions. These lesions may appear anywhere on the body but they typically show up on the elbows, knees, and scalp.", img: d9 },
    { id: 10, name: "Skin Diseases", desc: "The term skin disorder is used to describe various skin problems, ranging from small red bumps on the skin to widespread rashes.", img: d10 },
    { id: 11, name: "ALLERGIC DERMATITIS", desc: "The main symptom is a red rash wherever the skin came into contact with the irritant. Avoiding the irritant or allergen should allow the rash to clear in two to four weeks. Creams or medication can help reduce itching.", img: d11 },
    { id: 12, name: "crack", desc: "Diabetics are likely to experience cracked heels because damage to nerves in the feet from uncontrolled blood sugars can cause dry skin. People with diabetes are even more likely to sustain an infection from cracked heels than non-diabetics. ... Dry skin is unable to handle the added pressure and cracks.", img: d12 },
    { id: 13, name: "Dandruff", desc: "Dandruff is not only seen on the scalp but it also affects other areas with rich oil glands like face, ears and upper trunk", img: d13 },
    { id: 14, name: "Asthma", desc: "Asthma is a condition in which a person's airways become inflamed, narrow and swell and produce extra mucus, which makes it difficult to breathe.", img: d14 },
    { id: 15, name: "Infertility", desc: "Infertility is defined as not being able to get pregnant despite having frequent, unprotected sex for at least a year for most couples.", img: d15 },
    { id: 16, name: "Kidney stones", desc: "Kidney stones are one of the most painful of urologic disorders. Men tend to be affected more frequently than women.", img: d16 },
    { id: 17, name: "Fungal Infection", desc: "A fungal infection, also called mycosis, is a skin disease caused by a fungus. There are millions of species of fungi.", img: d17 },
    { id: 18, name: "Female Diseases", desc: "Disorders related to infertility include uterine fibroids, polycystic ovary syndrome, endometriosis, and primary ovarian insufficiency.", img: d18 },
    { id: 19, name: "Fibroid Uterus", desc: "It cause discomfort and may lead to complications such as a drop in red blood cells (anemia), which causes fatigue, from heavy blood loss", img: d19 },
    { id: 20, name: "Fistula in anus", desc: "An anal fistula is an infected tunnel between the skin and the anus, the muscular opening at the end of the digestive tract. Most anal fistulas are the result of an infection in an anal gland that spreads to the skin.", img: d20 },
    { id: 21, name: "Allergy", desc: "Allergies are among the most common chronic conditions worldwide. This substance is called an allergen. The immune system overreacts to the allergen by producing Immunoglobulin E (IgE) antibodies.", img: d21 },
    { id: 22, name: "Acidity", desc: "A digestive disease in which stomach acid or bile irritates the food pipe lining. Symptoms include burning pain in the chest that usually occurs after eating and worsens when lying down.", img: d22 },
    { id: 23, name: "Osteoarthritis", desc: "It occurs when the protective cartilage that cushions the ends of your bones wears down over time. Although osteoarthritis can damage any joint, the disorder most commonly affects joints in your hands, knees, hips and spine.", img: d23 },
    { id: 24, name: "Hepatitis", desc: "Hepatitis refers to an inflammatory condition of the liver. It's commonly caused by a viral infection, but there are other possible causes of hepatitis.", img: d24 },
];
export default function Diseases() {
    return (
        <div sx={{ width: '100%', height: '100%' }}>
            {diseases.map((item) => (
                <div key={item.img} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "4rem",
                }}>
                    <div style={{ flex: 1, minWidth: 300, flexWrap: "wrap" }}>
                        <h2 style={{ color: "#3bbfbf", fontSize: "2rem", marginBottom: "1rem" }}>
                            {item.name}
                        </h2>
                        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
                            {item.desc}
                        </p>
                    </div>
                    <div style={{
                        flex: 1,
                        minWidth: 220,
                        display: "flex",
                        justifyContent: "center",
                        gap: "1.5rem",
                        textAlign: "center",
                        flexWrap: "wrap",
                    }}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            style={{ width: "100%", maxWidth: 500, height: "auto" }}
                        />
                    </div>
                </div>
            ))
            }
        </div >
    );
}