import React, {useState} from 'react';
import "./PopUp.css";
import MapStyleItem from "./MapStyleItem/MapStyleItem";

const PopUp = ({activeStyle, stylesList, onClick}) => {
    const [opened, setOpened] = useState(false)
    return (
        <div className={(opened ? "popUp-opened " : "") + " popUp"} onClick={()=>setOpened(!opened)}>
            <MapStyleItem img={activeStyle.prev} onClick={()=>setOpened(!opened)}/>
            {opened && stylesList.filter(item=> item.name !== activeStyle.name)
                .map(mapStyle=>(
                    <MapStyleItem
                        img={mapStyle.prev}
                        key={mapStyle.name}
                        onClick={()=>{
                            setOpened(!opened)
                            onClick(mapStyle)
                        }}
                    />))}
        </div>
    );
};

export default PopUp;