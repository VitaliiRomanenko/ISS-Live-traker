import React, { useState} from 'react';
import styles from "./Tracking.module.css"
import Map from "../../../components/Map/Map";
import SideBar from "../../../components/Map/MapSideBar/SideBar";
import PopUp from "../../../components/Map/PopUp/PopUp";

const Tracking = () => {
    let [visible, setVisible] = useState(false)
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(2);
    return (
        <div className={styles.bgWrapper+ " row"}>

            <SideBar visible={visible}  setVisible={setVisible}/>

            <div className={"col s12 l12 " + styles.mapCol}>

                <div className={styles.mapWrapper}>
                    <PopUp setVisible={setVisible}/>
                    <Map
                        styleLink='mapbox://styles/mapbox/satellite-streets-v11'
                        lng={lng}
                        lat={lat}
                        zoom={zoom}
                    />
                </div>
            </div>

        </div>
    );
};

export default Tracking;