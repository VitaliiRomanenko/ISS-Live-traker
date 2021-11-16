import React, { useState} from 'react';
import styles from "./Tracking.module.css"
import Map from "../../../components/Map/Map";
import SideBar from "../../../components/MapSideBar/SideBar";

const Tracking = () => {
    let [visible, setVisible] = useState(false)

    return (
        <div className={styles.bgWrapper+ " row"}>

            <SideBar visible={visible}  setVisible={setVisible}/>
            <div className={"col s12 l1"}>
                <button className={styles.showSideBarBtn} onClick={()=>setVisible(true)}>
                    <i className="small material-icons">menu</i>
                </button>
            </div>
            <div className={"col s12 l11 " + styles.mapCol}>
                <div className={styles.mapWrapper}>
                    <Map styleLink='mapbox://styles/mapbox/satellite-v9'/>
                </div>

            </div>

        </div>
    );
};

export default Tracking;