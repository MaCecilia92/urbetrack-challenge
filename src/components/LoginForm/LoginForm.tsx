import { type FC } from 'react';

import loginValidatinSchema from '../../schemas/loginForm';
import { useFormik } from 'formik';

import { Input, Button } from '../../common';
import { getFormsInputs } from '../../utils';

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

	const fields = getFormsInputs(formik);

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				{fields.map(item => (
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
