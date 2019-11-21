import {START_GETTING, GET_SUCCESS, GET_FAILURE} from "../actions/AuthAction"

const initialState = {
    hackers: [
        {
            name: "HackerMan",
            saltyness: 9001
        },
        {
            name: "Neo",
            saltyness: -1
        }
    ],
    isGetting: false,
    error: null
}


const HackerReducer = (state=initialState, action) => {
    switch(action.type){
        case START_GETTING:
            return{
                ...state,
                isGetting: true,
                error: null
            }

        case GET_SUCCESS:
            return{
                ...state,
                isGetting: false,
                error: null,
                hackers: action.payload
            }
        
        case GET_FAILURE:
            return{
                ...state,
                isGetting: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default HackerReducer;