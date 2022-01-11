import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import PopUp from "../components/Map/PopUp/PopUp";
import {setStyle} from "../redux/actions";
import MAP_STYLES from "../utils/mapStyles";

const PopUpController = () => {
  const activeStyle = useSelector(state => state.style.activeStyle)
  const dispatch = useDispatch()

  return <PopUp
    activeStyle={activeStyle}
    stylesList={MAP_STYLES}
    onClick={(mapStyle) => dispatch(setStyle(mapStyle))}
  />
};

export default PopUpController;