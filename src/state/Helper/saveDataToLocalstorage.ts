import { type User } from '../Session/initialState';

export const saveDataToLocalStorage = (data: User, key:any):void => {
  const dataString = JSON.stringify(data);
  localStorage.setItem(`${key}`, dataString);
}