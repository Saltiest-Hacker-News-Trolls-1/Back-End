import {axiosWithAuth} from "../../../utils/axiosWithAuth";


export const START_GETTING = "START_GETTING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const get = () => dispatch => {
    dispatch({type: START_GETTING})
    axiosWithAuth()
        .get("")
        .then(res => {
            console(res)
            //dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: GET_FAILURE, payload: err.response}))
}

export const START_POSTING = "START_POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const post = post => dispatch => {
    axiosWithAuth()
        .post("", post)
        .then(res => {
            console.log("Post", res)
            //dispatch({type: POST_SUCCESS, payload: res.data})
            })
        .catch(err => dispatch({type: POST_FAILURE, payload: err.response}))
}

// export const START_PUTTING = "START_PUTTING";
// export const PUT_SUCCESS = "PUT_SUCCESS";
// export const PUT_FAILURE = "PUT_FAILURE";

// export const put = put => dispatch => {
//     axiosWithAuth()

// }

export const SAVE_FAV = "SAVE_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const saveFav = id => {
    return{
        type: SAVE_FAV,
        payload: id
    }
}

export const removeFav = id => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}