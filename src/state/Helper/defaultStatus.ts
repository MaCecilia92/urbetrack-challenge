interface Status {
	isLoading: boolean;
	isDisabled: boolean;
	errorMessage: null | string;
	error: null | Error;
}

export const getDefaultStatus = (): Readonly<Status> =>
	Object.freeze({
		isLoading: false,
		isDisabled: false,
		errorMessage: null,
		error: null,
	});
