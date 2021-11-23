import { SET_STYLE} from "./types";
import MAP_STYLES from "../utils/mapStyles";

const initialState = {
    activeStyle: MAP_STYLES[2]
}

export const styleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STYLE:
            return { ...state, activeStyle: action.payload}
        default: return state
    }
}