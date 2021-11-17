import React, {useEffect, useState} from 'react';
import styles from "./Tracking.module.css"
import Map from "../../../components/Map/Map";
import SideBar from "../../../components/Map/MapSideBar/SideBar";
import PopUp from "../../../components/Map/PopUp/PopUp";

const Tracking = () => {
    let [visible, setVisible] = useState(false)
    const [pos, setPos] = useState({lng: -70, lat: 42})

    useEffect(()=>{
        setInterval(() =>{
            fetch('http://api.open-notify.org/iss-now.json')
                .then(response => response.json())
                .then(json => {
                    setPos({
                        lng: parseFloat(json.iss_position.longitude),
                        lat: parseFloat(json.iss_position.latitude)
                    })
                })
        }, 2000)
    })
    return (
        <div className={styles.bgWrapper+ " row"}>

            <SideBar visible={visible}  setVisible={setVisible}/>

            <div className={"col s12 l12 " + styles.mapCol}>

                <div className={styles.mapWrapper}>
                    <PopUp setSideBarVisible={setVisible}/>
                    <Map
                        styleLink='mapbox://styles/mapbox/satellite-streets-v11'
                        pos={pos}
                        zoom={2}
                    />
                </div>
            </div>

        </div>
    );
};

export default Tracking;