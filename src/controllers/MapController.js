import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import Map from "../components/Map/Map";

let ISS_Marker
let map
const MapController = () => {
  const mapStyle = useSelector(state => state.style.activeStyle)
  const pos = useSelector(state => state.position.coordinates)
  const mapContainer = useRef(null);
  map = useRef(null);
  const [follow, setFollow] = useState(true)
  mapboxgl.accessToken = 'pk.eyJ1IjoiNGFybHoiLCJhIjoiY2t3MjRtdmVxMDZyNjMxcWx3cnV1YXBtYSJ9.uJuE4tc00w4jbiXIZIiltQ';

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle.link,
      center: [pos.lng, pos.lat],
      zoom: 2
    });
    map.current.on('mousedown', () => {
      setFollow(false)
    })
    let el = document.createElement('div')
    el.classList = 'marker'
    ISS_Marker = new mapboxgl.Marker(el).setLngLat([pos.lng, pos.lat]).addTo(map.current);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!map.current) return
    map.current.setStyle(mapStyle.link)
  }, [mapStyle])

  useEffect(() => {
    if (!ISS_Marker) return
    ISS_Marker.setLngLat([pos.lng, pos.lat])
    if (follow) map.current.setCenter([pos.lng, pos.lat])
  }, [pos])// eslint-disable-line react-hooks/exhaustive-deps

  return <Map mapContainer={mapContainer}/>
};

export default MapController;