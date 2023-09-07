import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { imagesData } from './initialState'; 

const localstorageSlice = createSlice({
	name: 'getImagesFromLocalstorage',
	initialState: imagesData,
	reducers: {
    setImagesRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true
    },
    setImagesSuceeded:(state, action: PayloadAction<[]>) => {
      state.images = action.payload
    },
    setImagesError:(state, action: PayloadAction<string>) => {
      state.error= 'Error'
      state.isLoading = false
    },
    clearImagesData: (state) => {
      state.images = []
    },
  },
  
});

export const { setImagesRequest, clearImagesData, setImagesSuceeded, setImagesError } = localstorageSlice.actions;
export default localstorageSlice.reducer;
