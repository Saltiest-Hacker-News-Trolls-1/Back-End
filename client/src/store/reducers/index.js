import {combineReducers} from "redux";

import AuthReducer from "./AuthReducer";
import FavsReducer from "./FavsReducer"

export default combineReducers({
    AuthReducer,
    FavsReducer
})
