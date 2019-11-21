import {axiosWithAuth} from "../../utils/axiosWithAuth";


export const START_GETTING = "START_GETTING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const get = () => dispatch => {
    dispatch({type: START_GETTING})
    axiosWithAuth()
        .get("/hackers/get")
        .then(res => {
            console('zzz',res.data)
            dispatch({type: GET_SUCCESS, payload: res.data})
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
            dispatch({type: POST_SUCCESS, payload: res.data})
            })
        .catch(err => dispatch({type: POST_FAILURE, payload: err.response}))
}

export const START_PUTTING = "START_PUTTING";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";

export const put = put => dispatch => {
    axiosWithAuth()
        .put("", put)
        .then(res => {
            console.log("Put", res)
            dispatch({type: PUT_SUCCESS, put})
        })
        .catch(err => dispatch({type: PUT_FAILURE, payload: err.response}))
}

export const START_DELETING = "START_DELETING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const del = () => dispatch => {
    axiosWithAuth()
        .delete(``)
        .then(res => {
            console.log("Delete", res)
            dispatch({type: DELETE_SUCCESS})
        })
        .catch(err => dispatch({type: DELETE_FAILURE, payload: err.response}))
}