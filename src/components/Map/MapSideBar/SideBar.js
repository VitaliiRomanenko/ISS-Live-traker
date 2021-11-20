import React from 'react';
import styles from "./SideBar.module.css"
const SideBar = ({visible, setVisible}) => {
    return (
        <div
            className={`${styles.wrapper} ${visible? styles.wrapperVisible: ""}`}
            id={"sidebarWrapper"}
            onClick={e=> {if(e.target.id === "sidebarWrapper") setVisible(false)}}
        >
            <div className={`${styles.sideBar} ${visible? styles.sideBarVisible: ""}`}>
                <button onClick={()=>setVisible(false)}>close</button>
            </div>
        </div>
    );
}

export default SideBar;