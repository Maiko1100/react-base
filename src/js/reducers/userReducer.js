export default function reducer(state = {
    users: [],
    user: {},
    fetchingUser: false,
    fetchingUsers: false,
    fetchedUser: false,
    fetchedUsers: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_USERS": {
            return {...state, fetchingUsers: true}
        }
        case "FETCH_USERS_REJECTED": {
            return {...state, fetchingUsers: false, error: action.payload}
        }
        case "FETCH_USERS_FULFILLED": {
            return {
                ...state,
                fetchingUsers: false,
                fetchedUsers: true,
                users: action.payload,
            }
        }
        case "FETCH_USER": {
            return {...state, fetchingUser: true}
        }
        case "FETCH_USER_REJECTED": {
            return {...state, fetchingUser: false, error: action.payload}
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetchingUser: false,
                fetchedUser: true,
                user: action.payload,
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state,
                user: {...state.user, name: action.payload},
            }
        }
        case "SET_USER_AGE": {
            return {
                ...state,
                user: {...state.user, age: action.payload},
            }
        }
    }

    return state
}
