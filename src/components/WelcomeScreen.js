import React from 'react';
import styles from './WelcomeScreen.module.css'
import bg from '../assets/iss065e168303_lrg.jpg'
import {Button, Icon} from "react-materialize";

const WelcomeScreen = () => {
    return (
            <div style={{backgroundImage: `url(${bg})`}} className={styles.bg_wrapper}>
                <div className={styles.bg_obscuration}>
                    <div className='container row'>
                        <div className="col s12 m12 l7 right">
                            <h1>Live Space Station Tracking Map</h1>
                            <Button
                                node="button"
                                style={{
                                    marginRight: '5px',
                                    marginTop:"10px"

                                }}
                                waves="light"
                                className='right light-blue'
                            >
                                Tracking
                                <Icon right>
                                    place
                                </Icon>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
    );
}

export default WelcomeScreen;