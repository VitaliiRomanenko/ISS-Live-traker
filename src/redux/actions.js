import {GET_POSITION, SET_STYLE} from "./types";
import {fetchPosition} from "../http/positionAPI";

export function setStyle(style) {
  localStorage.setItem('activeStyle', JSON.stringify(style))
  return {
    type: SET_STYLE,
    payload: style
  }
}

export function getPosition() {
  return async dispatch => {
    try {
      const position = await fetchPosition()
      dispatch({
        type: GET_POSITION, payload: {
          lng: parseFloat(position.iss_position.longitude),
          lat: parseFloat(position.iss_position.latitude)
        }
      })
    } catch (e) {
      console.log(e.message)
    }

  }
}