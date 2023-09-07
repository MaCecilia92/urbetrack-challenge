/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {call, takeLatest,put} from 'redux-saga/effects'
import { type User } from './initialState';
import { type PayloadAction } from '@reduxjs/toolkit';
import * as actions from './reducer';
import { saveDataToLocalStorage, deleteFromLocalStorage } from '../Helper';


function* setDatatoLocalStorage({ payload }: PayloadAction<User>) {
  try {
    yield call(saveDataToLocalStorage, payload, 'session');
    console.log(payload, 'payload');
    yield put(actions.setDataSuceeded(payload));
  } catch (err) {
    yield put(actions.setDataError(err as string));
    console.error('Error saving data:', err);
  }
}

function* removeDatatoLocalStorage() {
  try {
    yield call(deleteFromLocalStorage, 'session');
  } catch (err) {
    yield put(actions.setDataError(err as string));
    console.error('Error on remove item:', err);
  }
}


export default [
    takeLatest(actions.setDataRequest, setDatatoLocalStorage),
    takeLatest(actions.clearData, removeDatatoLocalStorage),
] 
