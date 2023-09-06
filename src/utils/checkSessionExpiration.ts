import { type User } from '../state/Session/initialState';

export const checkSessionExpiration = (): void => {
	const sessionDataStr = localStorage.getItem('session');

	if (sessionDataStr != null) {
		const sessionData: User = JSON.parse(sessionDataStr);
		const { expirationTime } = sessionData;
		const currentTime = new Date().getTime();
		console.log(currentTime > expirationTime, 'time');

		if (currentTime > expirationTime) {
			console.log(currentTime, 'current');
			localStorage.removeItem('session');
		}
	}
};
