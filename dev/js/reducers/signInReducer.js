import { setCookie } from "../utils/cookieHelper";

const initialState = {
	isLoading: false,
	showSuccessModal: false,
	errorMsg: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case "SIGN_IN_START":
			return {
				...state,
				isLoading: true
			};
		break;

		case "SIGNED_IN":
			setCookie(action.payload.api_key);
			return {
				...state,
				isLoading: false,
				showSuccessModal: true
			};
		break;

		case "CLOSE_SUCCESS_MODAL":
			return {
				...state,
				showSuccessModal: false
			};
		break;
	}
	return state;
}