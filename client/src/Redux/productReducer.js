const initialState = {
    product: [],
    count: Number
}

const SET_PRODUCT = 'SET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        case ADD_PRODUCT:
            return { ...state, product: state.product.concat(action.payload) }
        default:
            return state;
    }
}

export const setProduct = (payload) => ({ type: SET_PRODUCT, payload})
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload})