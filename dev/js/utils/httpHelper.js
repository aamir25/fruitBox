import strings from './strings';

const headersAndForm = {
	//Auth
	register: (data) => {
		return {
			method: 'post',
			url: strings.baseURL + strings.register,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};
	},

	signIn: (data) => {
		return {
			method: "post",
			url: strings.baseURL + strings.signIn,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};
	},

	//Products
	fetchProducts: () => {
		return {
			method: "get",
			url: strings.baseURL + strings.fetchProducts,
			headers: {
				"Content-Type": "application/json",
				"authorization": "79a6d9ac257329480cd335a3bdd3519d"
			}
		};
	},

	//Cart
	addToCart: (data, apiKey) => {
		return {
			method: "post",
			url: strings.baseURL + strings.addToCart,
			headers: {
				"Content-Type": "application/json",
				"authorization": apiKey
			},
			data: data
		};
	},

	displayCart: (apiKey) => {
		return {
			method: "get",
			url: strings.baseURL + strings.displayCart,
			headers: {
				"Content-Type": "application/json",
				"authorization": apiKey
			}
		};
	},

	removeProductFromCart: (data, apiKey) => {
		return {
			method: "post",
			url: strings.baseURL + strings.removeProductFromCart,
			headers: {
				"Content-Type": "application/json",
				"authorization": apiKey
			},
			data: data
		};
	}
};

export default headersAndForm;