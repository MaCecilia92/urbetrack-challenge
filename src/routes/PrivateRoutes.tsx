import { type FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks';

export const PrivateRoutes: FC = () => {
	const [data] = useLocalStorage<any>('session', []);

	return data != null ? <Outlet /> : <Navigate to='./Login' />;
};
