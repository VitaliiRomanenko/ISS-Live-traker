import React from 'react';
import styles from "./TrackingScreen.module.css"
import MapController from "../../controllers/MapController";
import PopUpController from "../../controllers/PopUpController";

const TrackingScreen = () => {
  return (
    <div className={styles.bgWrapper + " row"}>
      <div className={"col s12 l12 " + styles.mapCol}>
        <div className={styles.mapWrapper}>
          <PopUpController/>
          <MapController/>
        </div>
      </div>
    </div>
  );
};

export default TrackingScreen;