import { type FC } from 'react';
import { Login } from './pages';
import { Outlet } from 'react-router';
// import logo from './logo.svg';
import './App.css';

export const App: FC = () => {
	return (
		<>
			<Login />
			<Outlet />
		</>
	);
};

export default App;
