import {action} from "./index"

export const SAVE_FAV = "SAVE_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const saveFav = id => {
    return{
        type: action.SAVE_FAV,
        payload: id
    }
}

export const removeFav = id => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}