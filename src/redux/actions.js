import {GET_POSITION, SET_STYLE} from "./types";

export function setStyle(style) {
    return {
        type: SET_STYLE,
        payload: style
    }
}

export function getPosition() {
    return async dispatch => {
            try {
                const response = await fetch('http://api.open-notify.org/iss-now.json')
                const json = await response.json()
                dispatch({
                    type: GET_POSITION, payload: {
                        lng: parseFloat(json.iss_position.longitude),
                        lat: parseFloat(json.iss_position.latitude)
                    }
                })
            } catch (e) {
                console.log(e.message)
            }

    }
}