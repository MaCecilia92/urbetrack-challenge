import { type InputTypes } from '../interfaces/index';
import { type FormikProps } from 'formik';

interface FormValues {
	email: string;
	password: string;
}

export const getFormsInputs = (
	formik: FormikProps<FormValues>,
): InputTypes[] => [
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
		error: formik.touched.password === true && Boolean(formik.errors.password),
		helperText: formik.touched.password === true && formik.errors.password,
	},
];
