import {SET_STYLE} from "./types";
import MAP_STYLES from "../utils/mapStyles";

const initialState = {
  activeStyle: JSON.parse(localStorage.getItem("activeStyle")) || MAP_STYLES[3]
}

export const styleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE:
      return {...state, activeStyle: action.payload}
    default:
      return state
  }
}