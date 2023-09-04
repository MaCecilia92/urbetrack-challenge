import { type FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { type InputTypes } from '../../interfaces/index';

export const Input: FC<InputTypes> = ({
	id,
	name,
	label,
	value,
	handleChange,
	handleBlur,
	error,
	helperText,
	type,
}: InputTypes) => {
	return (
		<>
			<TextField
				fullWidth
				id={id}
				name={name}
				label={label}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				error={error}
				helperText={helperText}
				type={type}
			/>
		</>
	);
};
