import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    product: productReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))