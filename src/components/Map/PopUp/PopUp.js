import React from 'react';
import styles from "./PopUp.module.css";
import {TextInput} from "react-materialize";

const PopUp = ({setSideBarVisible}) => {
    return (
        <div className={styles.popUp}>
            <button className={styles.showSideBarBtn} onClick={()=>setSideBarVisible(true)}>
                <i className="small material-icons">more_vert</i>
            </button>
            <div className="input-field">
                <TextInput id='search' placeholder="City" className={styles.searchInput}/>
            </div>
            <i className="small material-icons">search</i>
        </div>
    );
};

export default PopUp;