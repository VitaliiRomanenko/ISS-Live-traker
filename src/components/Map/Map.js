import React from 'react';
import styles from './Map.module.css'

const Map = ({mapContainer}) => {

  return (
    <div className={styles.mapWrapper}>
      <div ref={mapContainer} className={styles.mapContainer}/>
    </div>
  )
}

export default Map;