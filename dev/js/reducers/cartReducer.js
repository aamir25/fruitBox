const initialState = {
	isLoading: false,
	showSuccessModal: false,
	cartProducts: [],
	errorMsg: null
};

export default function(state = initialState, action) {
	switch(action.type) {
		case "ADDING_TO_CART":
			return {
				...state,
				isLoading: true
			};
		break;

		case "ADDED_TO_CART":
			return {
				...state,
				isLoading: false,
				showSuccessModal: true
			};
		break;

		case "FETCH_CART":
			return {
				...state,
				isLoading: true
			};
		break;

		case "CART_FETCHED":
			return {
				...state,
				isLoading: false,
				cartProducts: action.payload
			};
		break;

		case "REMOVING_PRODUCT":
			return {
				...state,
				isLoading: true
			};
		break;

		case "PRODUCT_REMOVED":
			return {
				...state,
				isLoading: false,
				showSuccessModal: true
			}
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