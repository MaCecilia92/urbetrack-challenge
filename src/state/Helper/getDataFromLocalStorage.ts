export const getDataFromLocalStorage = (key:any):any=> {
  const dataString = localStorage.getItem(`${key}`) ;
  console.log(dataString !=null ? JSON.parse(dataString):[], 'data')
  return dataString !=null ? JSON.parse(dataString) : [];
}