/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {call, takeLatest,put} from 'redux-saga/effects'
import * as actions from './reducer';
import { type PayloadAction } from '@reduxjs/toolkit';
import { deleteFromLocalStorage, getDataFromLocalStorage } from '../Helper';


function* getImagesFromLocalStorage({payload}: PayloadAction<any>): Generator<any, void, any>  {
  try {
    const data = yield call(getDataFromLocalStorage, payload);
    yield put(actions.setImagesSuceeded(data));
  } catch (err) {
    yield put(actions.setImagesError(err as string));
    console.error('Error on getting data:', err);
  }
}

function* removeImagesLocalStorage() {
  try {
    yield call(deleteFromLocalStorage, 'images');
  } catch (err) {
    yield put(actions.setImagesError(err as string));
    console.error('Error on remove item:', err);
  }
}


export default [
    takeLatest(actions.setImagesRequest, getImagesFromLocalStorage),
    takeLatest(actions.clearImagesData, removeImagesLocalStorage),
] 
