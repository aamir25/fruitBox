import axios from 'axios';
import { browserHistory } from 'react-router';

import httpHelper from '../utils/httpHelper';

export function signIn(data) {
	return (dispatch) => {
		dispatch({
			type: "SIGN_IN_START"
		});
		axios(httpHelper.signIn(data))
		.then(function(response) {
			dispatch({
				type: "SIGNED_IN",
				payload: response.data
			});
			setTimeout(function(){
				dispatch({
					type: "CLOSE_SUCCESS_MODAL"
				});
				browserHistory.push("/")
			}, 1500);
		})
		.catch(function(error) {
			dispatch({
				type: "ERROR",
				payload: error
			});
		});
	};
}