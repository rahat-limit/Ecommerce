const initialState = {
    users: []
}

const SET_CART = 'SET_CART'
const REMOVE_CART = 'REMOVE_CART'

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {...state, users: action.payload}
        case REMOVE_CART:
            return {users: []}
        default:
            return state;
    }
}

export const setCart = (payload) => ({ type: SET_CART, payload })
export const removeCart = () => ({ type: REMOVE_CART })