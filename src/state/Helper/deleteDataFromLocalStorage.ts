export const deleteFromLocalStorage=(key:any):void=> {
  localStorage.removeItem(`${key}`);
}