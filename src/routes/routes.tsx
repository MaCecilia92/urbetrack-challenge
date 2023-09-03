import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Gallery } from '../pages';
import App from '../App';

export const router = createBrowserRouter([
	{
		path: '/Login',
		element: <App />,
	},
	{
		path: '/Gallery',
		element: <Gallery />,
		children: [{ path: ':name/:id', element: <h1>Gallery child</h1> }],
	},
	{
		path: '/',
		element: <Navigate to='/Login' />,
	},
	{
		path: '*',
		element: <h1>Not found</h1>,
	},
]);
