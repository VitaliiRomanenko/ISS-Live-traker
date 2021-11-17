import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl'
import styles from './Map.module.css'
let ISS_Marker
const Map = ({styleLink, className, pos, zoom}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: styleLink,
            center: [pos.lng, pos.lat],
            zoom: zoom
        });
        let el = document.createElement('div')
        el.classList = 'marker'
        ISS_Marker = new mapboxgl.Marker(el).setLngLat([pos.lng, pos.lat]).addTo(map.current);
    });

    useEffect(()=>{
        if(!ISS_Marker) return
        ISS_Marker.setLngLat([pos.lng, pos.lat])
    }, [pos])
    return (
        <div className={styles.mapWrapper + " " + className}>
            <div ref={mapContainer} className={styles.mapContainer} />
        </div>
    )
}

export default Map;