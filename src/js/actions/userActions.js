import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            })
    }
}

export function fetchUsers() {
  return function(dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_USERS_REJECTED", payload: err})
        })
  }
}

// export function setUserName(name, id) {
//   return {
//     type: 'SET_USER_NAME',
//     payload: name,
//   }
// }
//
// export function setUserAge(age, id) {
//   return {
//     type: 'SET_USER_AGE',
//     payload: age,
//   }
// }
