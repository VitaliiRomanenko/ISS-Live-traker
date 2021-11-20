import {GET_POSITION} from "./types";

const initialState = {
    coordinates: {
        lng: -70,
        lat: 42
    }
}
export const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSITION:
            return { ...state, coordinates: action.payload}
        default: return state
    }
}