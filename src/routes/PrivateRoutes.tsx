import { type FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks';

export const PrivateRoutes: FC = () => {
	const [data] = useLocalStorage<any[]>('session');

	const isValidData = !(
		Array.isArray(data) &&
		(data.length > 0 || data != null)
	);
	return isValidData ? <Outlet /> : <Navigate to='/Login' />;
};
