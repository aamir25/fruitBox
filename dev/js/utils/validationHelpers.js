export function requiredInput(data) {
	if (data) {
		return {
			isValid: true,
			errorMsg: null
		};
	}
	else {
		return {
			isValid: false,
			errorMsg: "This field is required!"
		};
	}
}