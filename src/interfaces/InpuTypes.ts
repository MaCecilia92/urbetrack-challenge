import { type ChangeEvent} from 'react';

export interface InputTypes {
	id: string;
	name: string;
	label: string;
	value: string;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	error: any;
	helperText: any;
	type?: string | undefined
}