import {LOGIN_REQUEST, SUCCESS,FAILURE} from "./authTypes";

export const authenticateUser = (username, password) => {
    return dispatch => {
        dispatch(loginRequest());
        if (username === "and" && password === "1"){
            dispatch(success());
        } else {
            dispatch(failure());
        }
    };
};

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const success = () => {
    return {
        type: SUCCESS,
        payLoad: true
    };
};

const failure = () => {
    return {
        type: FAILURE,
        payload: false
    };
};