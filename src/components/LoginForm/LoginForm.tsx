import { type FC } from 'react';
import { type InputTypes } from '../../interfaces/index';

import loginValidatinSchema from '../../schemas/loginForm';
import { useFormik } from 'formik';

import { Input, Button } from '../../common';

export const LoginForm: FC = () => {
	const formik = useFormik({
		initialValues: {
			email: 'foobar@example.com',
			password: 'foobar',
		},
		validationSchema: loginValidatinSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const InputFields: InputTypes[] = [
		{
			id: 'email',
			name: 'email',
			label: 'email',
			value: formik.values.email,
			handleChange: formik.handleChange,
			handleBlur: formik.handleBlur,
			error: formik.touched.email === true && Boolean(formik.errors.email),
			helperText: formik.touched.email === true && formik.errors.email,
		},

		{
			id: 'password',
			name: 'password',
			label: 'password',
			value: formik.values.password,
			handleChange: formik.handleChange,
			handleBlur: formik.handleBlur,
			error:
				formik.touched.password === true && Boolean(formik.errors.password),
			helperText: formik.touched.password === true && formik.errors.password,
		},
	];

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				{InputFields.map(item => (
					<Input
						key={item.id}
						id={item.id}
						name={item.name}
						label={item.label}
						type={item.name === 'password' ? item.name : undefined}
						value={item.value}
						handleChange={item.handleChange}
						handleBlur={item.handleBlur}
						error={item.error}
						helperText={item.helperText}
					/>
				))}
				<Button size='small' variant='outlined' type='submit' name='Enviar' />
			</form>
		</>
	);
};
