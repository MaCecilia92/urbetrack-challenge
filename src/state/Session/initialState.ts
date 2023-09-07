import { getDefaultStatus } from '../Helper/defaultStatus';

export interface User {
	email: string;
	password: string;
	expirationTime: number;
}

export interface SessionState {
	status: ReturnType<typeof getDefaultStatus>;
	isLoading: boolean;
	users: User | [];
  	isAuthenticated: boolean
  	error: string
}

export const sessionUser: SessionState = {
	status: getDefaultStatus(),
	isLoading: false,
	users:{
    email:'', 
    password: '',  
    expirationTime: 0     
  },
  isAuthenticated: false, 
  error: ''
};
