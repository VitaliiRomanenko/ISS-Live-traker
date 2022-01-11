import React from 'react';
import AstronautCard from "./AstronautCard";
import contactBG from "../../assets/contactBG.jpg"
import styles from "./AstronautsList.module.css"

const AstronautsList = ({astronauts}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${contactBG})`,
      }}
      className={styles.list}
    >
      {astronauts.map((astronaut, index) => <AstronautCard astronaut={astronaut} key={index}/>)}
    </div>
  );
};

export default AstronautsList;