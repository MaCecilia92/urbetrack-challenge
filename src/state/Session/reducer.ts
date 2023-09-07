import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { sessionUser, type User } from './initialState'; 
import { getDefaultStatus } from '../Helper/defaultStatus';

const sessionSlice = createSlice({
	name: 'session',
	initialState: sessionUser,
	reducers: {
    setDataRequest: (state, action: PayloadAction<User>) => {
      state.status = getDefaultStatus();
      state.isLoading = true
      state.isAuthenticated=false
    },
    setDataSuceeded:(state, action: PayloadAction<User>) => {
      state.users = action.payload
      state.isLoading = false
      state.isAuthenticated=true
    },
    setDataError:(state, action: PayloadAction<string>) => {
      state.error= 'Error'
      state.isLoading = false
      state.isAuthenticated=false
    },
    clearData: (state) => {
      state.users = [];
      state.isLoading = false
      state.isAuthenticated=false
    },
  },
  
});

export const { setDataRequest, clearData, setDataSuceeded, setDataError } = sessionSlice.actions;
export default sessionSlice.reducer;
