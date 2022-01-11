import React, {useEffect, useState} from 'react';
import {fetchAstronauts} from "../http/astronautsAPI";
import AstronautsList from "../components/Astronauts/AstronautsList";

const AstronautsController = () => {
  const [astronauts, setAstronauts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetchAstronauts().then(data => {
      setLoading(false)
      setAstronauts(data)

    })
  }, [])
  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "75vh",
        backgroundColor: "#000"
      }}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"/>
            </div>
            <div className="gap-patch">
              <div className="circle"/>
            </div>
            <div className="circle-clipper right">
              <div className="circle"/>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <AstronautsList astronauts={astronauts}/>
  }

};

export default AstronautsController;