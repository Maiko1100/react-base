import axios from "axios";

export function fetchUser(username, password) {

    return function (dispatch) {
        dispatch({type: "FETCH_USER", payload: ""})
        axios({
            method: 'post',
            url: 'http://www.loginapi.nl/users/authenticate',
            auth: {
                username: username,
                password: password
            }
        }).then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
        })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            });
    }
}

