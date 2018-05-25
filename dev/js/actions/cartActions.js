import axios from 'axios';
import { browserHistory } from 'react-router';

import httpHelper from '../utils/httpHelper';

export function addToCart(data, apiKey) {
	return (dispatch) => {
		dispatch({
			type: "ADDING_TO_CART"
		});
		axios(httpHelper.addToCart(data, apiKey))
		.then(function(response) {
			dispatch({
				type: "ADDED_TO_CART",
				payload: response.data
			});
			setTimeout(function(){
				dispatch({
					type: "CLOSE_SUCCESS_MODAL"
				});
			}, 1500);
		})
		.catch(function(error) {
			dispatch({
				type: "ERROR",
				payload: error
			});
		});
	}
}

export function displayCart(apiKey) {
	return (dispatch) => {
		dispatch({
			type: "FETCH_CART"
		});
		axios(httpHelper.displayCart(apiKey))
		.then(function(response) {
			dispatch({
				type: "CART_FETCHED",
				payload: response.data 
			});
		})
		.catch(function(error) {
			dispatch({
				type: "ERROR",
				payload: error
			});
		});
	}
}

export function removeProductFromCart(data, apiKey) {
	return (dispatch) => {
		dispatch({
			type: "REMOVING_PRODUCT"
		});
		axios(httpHelper.removeProductFromCart(data, apiKey))
		.then(function(response) {
			dispatch({
				type: "PRODUCT_REMOVED",
				payload: response.data
			});
			setTimeout(function(){
				dispatch({
					type: "CLOSE_SUCCESS_MODAL"
				});
			}, 1500);
		})
		.then(function() {
			dispatch(displayCart(apiKey));
		})
		.catch(function(error) {
			dispatch({
				type: "ERROR",
				payload: error
			});
		});
	}
}