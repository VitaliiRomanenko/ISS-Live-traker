import React, {useEffect} from 'react';
import styles from "./Tracking.module.css"
import Map from "../../../components/Map/Map";
import PopUp from "../../../components/Map/PopUp/PopUp";
import {useDispatch} from "react-redux";
import {getPosition} from "../../../redux/actions";

const Tracking = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosition())
        setInterval(() =>{
            dispatch(getPosition())
        }, 10000)
    }, [])

    return (
        <div className={styles.bgWrapper+ " row"}>
            <div className={"col s12 l12 " + styles.mapCol}>
                <div className={styles.mapWrapper}>
                    <PopUp/>
                    <Map zoom={2}/>
                </div>
            </div>
        </div>
    );
};

export default Tracking;