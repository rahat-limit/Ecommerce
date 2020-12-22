const initialState = {
    product: [],
    count: Number
}

const SET_PRODUCT = 'SET_PRODUCT'
// const GET_PRODUCTS = 'GET_PRODUCTS'

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        // case GET_PRODUCTS:
        //     return { ...state.product,product: action.payload }
        default:
            return state;
    }
}

export const setProduct = (payload) => ({ type: SET_PRODUCT, payload})
// export const getProducts = (payload) => ({ type: GET_PRODUCTS, payload})