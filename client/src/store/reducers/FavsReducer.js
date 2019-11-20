import {SAVE_FAV, REMOVE_FAV} from "../actions/FavsAction"

const initialState = {
    name: "",
    saltyness: 0,
    favorites: []
}


const FavsReducer = (state=initialState, action) => {
    switch(action.type){

        case SAVE_FAV:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                favorites: [...state.favorites, state.favorites.filter(item => item.id !== action.payload)]
            }
            
        default:
            return state;
    }
}

export default FavsReducer;