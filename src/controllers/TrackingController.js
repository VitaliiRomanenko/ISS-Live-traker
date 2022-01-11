import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPosition} from "../redux/actions";
import TrackingScreen from "../components/TrakingScreen/TrackingScreen";

const TrackingController = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosition())
    setInterval(() => {
      dispatch(getPosition())
    }, 10000)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return <TrackingScreen/>
};

export default TrackingController;