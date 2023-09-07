import { type FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, Gallery, Home } from './pages';
import { PrivateRoutes } from './routes';
import './App.css';

export const App: FC = () => {
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
