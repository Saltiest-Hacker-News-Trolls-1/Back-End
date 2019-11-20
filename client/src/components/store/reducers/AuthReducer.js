import {START_POSTING, POST_SUCCESS, POST_FAILURE, SAVE_FAV, REMOVE_FAV} from "../actions/AuthAction"

const initialState = {
    //isPosting,
    isLogginIn: false,
    error: null
}


const isLoggedIn = (state=initialState, action) => {
    switch(action.type){
        case START_POSTING:
            return{
                ...state,
                isPosting: true,
                isLoggedIn: false,
                error: null
            }


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