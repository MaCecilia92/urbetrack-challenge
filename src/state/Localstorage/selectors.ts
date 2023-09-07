import { type RootState } from '../index';
import { type imagesArray } from './initialState';

export const selectImages = (state: RootState): imagesArray => {return state.localstorage.images as imagesArray };

