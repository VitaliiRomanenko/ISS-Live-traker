import React from 'react';
import AstronautCard from "./AstronautCard";
import contactBG from "../../assets/contactBG.jpg"
const AstronautsList = ({astronauts}) => {
    return (
        <div  style={{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: 100,
            backgroundImage: `url(${contactBG})`,
            backgroundSize: "cover"
        }}>
            {astronauts.map((astronaut, index) => <AstronautCard astronaut={astronaut} key={index}/> )}
        </div>
    );
};

export default AstronautsList;