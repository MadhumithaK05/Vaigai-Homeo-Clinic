import React from "react";
// import ReviewGrid from "../../ReviewGrid";
//import kannan from './assets/Home/home-kannan.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

const reviews = [
    { name: "Ravikumar S", review: "Very friendly doctor with very soft approach... he does diagnosis for all kind of diseases….. Highly recommended doctor" },
    { name: "Srividhya", review: "I have visited him for migrane problem and i have met many doctors before him. He explains the problem clearly and after the treatment I got my problem solved. I recommend this doctor for all." },
    { name: "Menaka", review: "I had anemic problem before year, After taking his medicine my problem solved. His iron tonic Is also good for Anemia. The doctor speaks friendly to all the patient. My whole family taking his medicine." },
    { name: "Arun vijay", review: "He is very nice doctor !! Very attentive. Having the medicine hope it will completely resolve and make me better" },
    { name: "Akhilesh A", review: "Doctor is very friendly and give good response even in phone and sends medicines even through courier which is very useful." },
    { name: "M vinoth kumar", review: "Good and experienced person Analysing the nature of problem And give better solution to cure And a great support to get cure." },
    { name: "J Jeyachandran", review: "Listens and gathers medical history very patiently. Very friendly" },
    { name: "R.G.Radha Jotho", review: "When I went with extreme pain ,even two doses of the medicine have me good relief, which I didn't get in other treatment. So I feel, in cases of emergency Homeo medicine works well. This is my recent and personal experience." },
    { name: "Rajesh T", review: "1 had acidity problem and after I have undergone treatment with this doctor and now I am very happy and no issues now" },
    { name: "karthikeyan", review: "His treatment cured my sinusitis problem permanently and did not recur in my life time without any side effect.I would recommend this doctor for allergy,asthma,sinusitis, skin diseases, piles, arthritis, female diseases,kidney stone. His treatment is economical" },
    { name: "vinoth", review: "Doctor was very friendly and I am giving his medicine for my children for cold cough.his medicine was very effective and he gives excellent treatment." },
    { name: "Selvarani", review: "I have been undergoing treatment for past 3 months, I am satisfied with his treatment. I used to be very anxious and tensed all the time but after his treatment all my friends were able to see the changes in me...I would strongly recommend Dr.Kannan for all who wants to get cured from any diseases." },
    { name: "Sivaguru", review: "He explains properly with examples.... explanation helps a lot. He advises do's and don'ts. He suggests food items as supplement." },
    { name: "Swathysankar", review: "Dr. Kannan is great. He is extremely dedicated. He provides a safe, understanding, sympathetic, private practice, and always accompanies his diagnosis with standard treatment." },
    { name: "S Santha Kumar", review: "Brilliant approach. The problems are getting resolved in a time bound manner." },
    { name: "Anbalagan.S", review: "We are in Combatore and got the medicine via courier with explained the problem through mobile.its really good." },
    { name: "P.ushadevi", review: "He is a good Person.he will give more health tips.he have more patience to give treatments.kind attention" },
    { name: "Babu", review: "hello doctor your explainion is very and clear and precise. I recommend this doctor to all and really glad to meet a doctor like with a friendleness to the patient." },
    { name: "murugavelu", review: "He is good in nature ... Calm and steady ... And we can consult the doctor via phones call and get medicine through couriers" },
    { name: "selvam", review: "Experienced doctor with skill and keep self updated. And follows up with medication given and is friendly." },
    { name: "divakar", review: "He treats the patient with respect and I am very happy to visit the doctor the treatment better and recommend others to visit the doctor" }
]
export default function Reviews() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {reviews.map((review, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Item>
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}