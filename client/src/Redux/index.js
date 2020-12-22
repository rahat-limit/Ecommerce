import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    product: productReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))