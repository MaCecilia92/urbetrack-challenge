import { type FC, useEffect } from 'react';
import { type User } from '../../state/Session/initialState';

import loginValidatinSchema from '../../schemas/loginForm';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { Input, Button } from '../../common';
import { getFormsInputs, checkSessionExpiration } from '../../utils';
import { setDataRequest } from '../../state/Session/reducer';
import { useNavigate } from 'react-router-dom';

export const LoginForm: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		checkSessionExpiration();
	}, []);

	const formik = useFormik({
		initialValues: {
			email: 'foobar@example.com',
			password: 'foobar',
			expirationTime: 0,
		},
		validationSchema: loginValidatinSchema,
		onSubmit: (values: User) => {
			const newUser = {
				email: values.email,
				password: values.password,
				expirationTime: new Date().getTime() + 2 * 60 * 1000,
			};
			dispatch(setDataRequest(newUser));
			navigate('/Gallery');
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
