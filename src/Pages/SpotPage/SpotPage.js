import React from 'react';
import styles from "./spot.module.css"
import SpotCard from "../../components/SpotCard/SpotCard";

const SpotPage = () => {

  return (
    <div className={styles.wrapper}>
      <SpotCard/>
    </div>
  );
};

export default SpotPage;