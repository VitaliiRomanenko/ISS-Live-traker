import React from 'react';
import styles from "./SpotCard.module.css";

const SpotCard = () => {
  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe src='https://spotthestation.nasa.gov/widget/widget2.cfm?theme=2'
              width='310'
              height='450'
              frameBorder='0'
      />
    </div>
  );
};

export default SpotCard;