import React from 'react';
import styles from "./SideBar.module.css"
const SideBar = ({visible, setVisible}) => {
    //for future
    return (
        <div className={(visible? styles.visible + " ": "") + styles.sideBar}>
            <button onClick={()=>setVisible(false)}>feef</button>
        </div>
    );
};

export default SideBar;