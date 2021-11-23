import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import mapboxgl from "mapbox-gl";
import Map from "../components/Map/Map";
let ISS_Marker
let map
const MapController = () => {
    const mapStyle = useSelector(state => state.style.activeStyle)
    const pos = useSelector(state => state.position.coordinates)
    const mapContainer = useRef(null);
    map = useRef(null);

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle.link,
            center: [pos.lng, pos.lat],
            zoom: 2
        });
        let el = document.createElement('div')
        el.classList = 'marker'
        ISS_Marker = new mapboxgl.Marker(el).setLngLat([pos.lng, pos.lat]).addTo(map.current);
    }, []);

    useEffect(()=>{
        if(!map.current) return
        map.current.setStyle(mapStyle.link)
    }, [mapStyle])

    useEffect(()=>{
        if(!ISS_Marker) return
        ISS_Marker.setLngLat([pos.lng, pos.lat])
    }, [pos])

    return <Map mapContainer={mapContainer}/>
};

export default MapController;