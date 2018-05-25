const initialState = {
	isLoading: false,
	showSuccessModal: false,
	errorMsg: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case "REGISTER_START":
			return {
				...state,
				isLoading : true
			};
		break;

		case "REGISTERED":
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