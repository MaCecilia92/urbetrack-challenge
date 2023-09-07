/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all } from 'redux-saga/effects';
import {reducer as sessionReducer, saga as sessionSaga } from './Session/index';
import { reducer as localstorageReducer, saga as localStorageSaga } from './Localstorage/index';

export const reducers = {
  session: sessionReducer,
  localstorage: localstorageReducer
}

export function* sagas() {
  yield all([...sessionSaga, ...localStorageSaga]);
}