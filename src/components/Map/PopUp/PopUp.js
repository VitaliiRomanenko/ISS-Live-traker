import React, {useState} from 'react';
import styles from "./PopUp.module.css";
import {useDispatch, useSelector} from "react-redux";
import MapStyleItem from "./MapStyleItem/MapStyleItem";
import MAP_STYLES from "../../../utils/mapStyles";
import {setStyle} from "../../../redux/actions";

const PopUp = () => {
    const activeStyle = useSelector(state => state.style.activeStyle)
    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className={styles.popUp} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <MapStyleItem img={activeStyle.prev} onClick={()=>setHover(true)}/>
            {hover &&
            MAP_STYLES.filter(item=> item.name !== activeStyle.name)
                .map(mapStyle=>(
                        <MapStyleItem
                            img={mapStyle.prev}
                            key={mapStyle.name}
                            onClick={()=>{
                                setHover(false)
                                dispatch(setStyle(mapStyle))
                            }}
                        />))}
        </div>
    );
};

export default PopUp;