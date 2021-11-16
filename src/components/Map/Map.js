import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import styles from './Map.module.css'
const Map = ({styleLink, className}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(2);
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    useEffect(() => {
        console.log(process.env.REACT_APP_MAPBOX_TOKEN)
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: styleLink,
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div className={styles.mapWrapper + " " + className}>
            <div ref={mapContainer} className={styles.mapContainer} />
        </div>
    )
}

export default Map;