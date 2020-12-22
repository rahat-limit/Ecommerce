const initialState = {
    user: {},
    isAuth: false,
    isAdmin: false
}

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {...state, user: action.payload, isAuth: true, isAdmin: state.user.role === 1 ? true : false}
        case REMOVE_USER:
            return {...state, user: {}, isAuth: false, isAdmin: false}
        default:
            return state;
    }
}

export const setUser = (payload) => ({ type: SET_USER, payload })
export const removeUser = () => ({ type: SET_USER })