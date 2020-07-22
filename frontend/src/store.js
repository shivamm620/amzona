import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/productReducers';
import thunk from 'redux-thunk'

const initialState ={};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer
})
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;