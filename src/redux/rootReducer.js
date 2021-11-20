import {combineReducers} from 'redux'
import {positionReducer} from "./positionReducer";
import {styleReducer} from "./styleReducer";

export const rootReducer = combineReducers({
    position: positionReducer,
    style: styleReducer
})