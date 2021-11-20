import React, {useEffect, useState} from 'react';
import styles from "./Tracking.module.css"
import Map from "../../../components/Map/Map";
import SideBar from "../../../components/Map/MapSideBar/SideBar";
import PopUp from "../../../components/Map/PopUp/PopUp";
import {useDispatch, useSelector} from "react-redux";
import {getPosition} from "../../../redux/actions";

const Tracking = () => {
    let [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const pos = useSelector(state => state.position.coordinates)

    useEffect(()=>{
        dispatch(getPosition())
        setInterval(() =>{
            dispatch(getPosition())
        }, 10000)
    }, [])

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