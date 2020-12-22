const initialState = {
    error: ''
}

const SET_ERROR = 'SET_ERROR'
const REMOVE_ERROR = 'REMOVE_ERROR'

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload}
        case REMOVE_ERROR:
            return {...state, error: ''}
        default: 
            return state;
    }
}
export const setError = (payload) => ({ type: SET_ERROR, payload })
export const removeError = () => ({ type: SET_ERROR })