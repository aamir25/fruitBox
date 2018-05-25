import axios from "axios";
import { browserHistory } from "react-router";

import httpHelper from "../utils/httpHelper";

export function register(data) {
	return (dispatch) => {
		dispatch({
			type: "REGISTER_START"
		});
		axios(httpHelper.register(data))
		.then(function(response) {
			dispatch({
				type: "REGISTERED",
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