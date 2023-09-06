import { type FC } from 'react';
// import { Outlet, Navigate } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, Gallery, Home } from './pages';
import { PrivateRoutes } from './routes';

import { selectSession } from './state/Session/selectors';
import './App.css';

export const App: FC = () => {
	const users = useSelector(selectSession);
	console.log(users, 'user');
	return (
		<>
			<Router>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route element={<Home />} path='/Home' />
						<Route element={<Gallery />} path='/Gallery' />
					</Route>
					<Route element={<Login />} path='/login' />
					<Route element={<Login />} path='/' />
				</Routes>
			</Router>
		</>
	);
};

export default App;
