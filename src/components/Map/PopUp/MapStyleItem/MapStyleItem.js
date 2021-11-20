import React from 'react';
import styles from './MapStyleItem.module.css'
const MapStyleItem = ({img, onClick, key}) => {
    return (
        <div
            className={styles.item}
            style={{
                backgroundImage: `url(${img})`
            }}
            onClick={onClick}
            key={key}
        />
    );
};

export default MapStyleItem;