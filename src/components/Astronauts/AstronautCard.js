import React from 'react';

const AstronautCard = ({astronaut}) => {
    return (

            <div className="col s12 m4" style={{maxWidth: 400}}>
                <div className="card large">
                    <div className="card-image">
                        <img src={astronaut.img} alt=''/>
                        <span className="card-title" style={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%"}}>{astronaut.name}</span>
                    </div>
                    <div className="card-content" style={{overflow: "scroll"}}>
                        <p>{astronaut.info}</p>
                    </div>
                </div>
            </div>

    );
};

export default AstronautCard;