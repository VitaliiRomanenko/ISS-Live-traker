import React from 'react';
import {Carousel} from "react-materialize";
import styles from "../../Pages/HomePage/Screens/Welcome.module.css";
import img1 from "../../assets/carusel_item/1.jpg";
import img2 from "../../assets/carusel_item/2.jpg";
import img3 from "../../assets/carusel_item/3.jpg";
import img4 from "../../assets/carusel_item/4.jpg";
import img5 from "../../assets/carusel_item/5.jpg";

const Card = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <Carousel
                                className={styles.carousel}
                                carouselId="Carousel-40"
                                images={[img1, img2, img3, img4, img5]}
                                options={{
                                    fullWidth: true,
                                    indicators: true
                                }}
                            />
                            <span className="card-title">Image of the Day</span>
                        </div>
                        <div className="card-content">
                            <p>An astronaut onboard the International Space Station shot this panoramic</p>
                        </div>
                        <div className="card-action">
                            <a href="https://earthobservatory.nasa.gov/images">Watch more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;