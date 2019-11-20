import {SAVE_FAV, REMOVE_FAV} from "../actions/AuthAction"

const initialState = {
    //isPosting,
    isLogginIn: false,
    error: null
}


const FavsReducer = (state=initialState, action) => {
    switch(action.type){

        case SAVE_FAV:
            return{
                
            }
        case REMOVE_FAV:
            return{

            }
            
        default:
            return state;
    }
}

export default isLoggedIn