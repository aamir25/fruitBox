const initialState = {
	isLoading: false,
	errorMsg: null,
	productList: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case "FETCH_PRODUCTS_START":
			return {
				...state,
				isLoading: true
			};
		break;

		case "PRODUCTS_FETCHED":
			return {
				...state,
				isLoading: false,
				productList: action.payload.data
			};
		break;
	}
	return state;
}