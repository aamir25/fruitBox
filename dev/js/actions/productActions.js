import axios from 'axios';
import { browserHistory } from 'react-router';

import httpHelper from '../utils/httpHelper';

export function fetchProducts() {
	return (dispatch) => {
		dispatch({
			type: "FETCH_PRODUCTS_START"
		});
		axios(httpHelper.fetchProducts())
		.then(function(response) {
			dispatch({
				type: "PRODUCTS_FETCHED",
				payload: response.data
			});
		})
		.catch(function(error) {
			dispatch({
				type: "ERROR",
				payload: error
			});
		});
	};
}