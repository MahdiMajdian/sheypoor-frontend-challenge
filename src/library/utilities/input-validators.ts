interface IValidator {
	errorMessage: string | undefined;
	isValid: boolean;
}

export function validateName(value: string): IValidator {
	if (value === '') {
		return { isValid: false, errorMessage: "input Can't be empty" };
	}

	return { isValid: true, errorMessage: undefined };
}

export function validateAge(value: string): IValidator {
	if (isNaN(Number(value))) {
		return { isValid: false, errorMessage: 'Age must be a number' };
	}
	if (parseInt(value, 10) !== Number(value)) {
		return { isValid: false, errorMessage: 'Age must be a integer' };
	}

	if (Number(value) <= 0) {
		return { isValid: false, errorMessage: "Wait! you'r not born yet?" };
	}

	if (Number(value) > 120) {
		return { isValid: false, errorMessage: "you're more than 120 years old, I think it's enough tho!" };
	}

	return { isValid: true, errorMessage: undefined };
}