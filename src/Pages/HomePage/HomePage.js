import React from 'react';
import Welcome from "../../components/WelcomeScreen/Welcome";
import TrackingController from "../../controllers/TrackingController";

const HomePage = () => {
  return (
    <div>
      <Welcome/>
      <TrackingController/>
    </div>
  );
};

export default HomePage;