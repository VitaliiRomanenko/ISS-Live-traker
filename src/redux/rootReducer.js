import {combineReducers} from 'redux'
import {positionReducer} from "./positionReducer";

export const rootReducer = combineReducers({
    position: positionReducer
})