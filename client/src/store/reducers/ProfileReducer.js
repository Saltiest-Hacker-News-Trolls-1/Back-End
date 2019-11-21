import {START_DELETING, DELETE_SUCCESS, DELETE_FAILURE} from "../actions/AuthAction"


const initialState = {
    id: 0,
    name: "",
    password: "",
    isDeleting: false,
    error: null
}

const ProfileReducer = (state=initialState, action) => {
    switch(action.type){
        case START_DELETING:
            return{
                ...state,
                isDeleting: true,
                error: null
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                isDeleting: false,
                error: null

            }
        default:
            return state;
    }
}

export default ProfileReducer;