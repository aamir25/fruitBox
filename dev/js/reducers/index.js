import { combineReducers } from 'redux';

import authReducer from './authReducer';
import signInReducer from './signInReducer';
import productsReducer from './productsReducer';
import cartReducer from "./cartReducer";

export default combineReducers({
	auth: authReducer,
	logIn: signInReducer,
	products: productsReducer,
	cart: cartReducer
});