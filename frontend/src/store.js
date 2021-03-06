import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/productReducers';
import thunk from 'redux-thunk'
import Cookie from 'js-cookie';
import cartReducer from './reducer/cartReducers';
import { userSigninReducer,userRegisterReducer } from './reducer/userReducers';
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = { cart: { cartItems , 
    shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
}, userSignin: { userInfo }  };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;