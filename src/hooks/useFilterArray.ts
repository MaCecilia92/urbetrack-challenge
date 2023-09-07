import { useState, useEffect } from 'react';

interface DataItem {
  id: number | string; 
}

export const useFilterArrayById = (localStorageKey: string): [DataItem[], (id: number) => void] => {
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem(localStorageKey);
    const dataFromLocalStorage = localStorageData != null? JSON.parse(localStorageData) as DataItem[] : [];
    setFilteredData(dataFromLocalStorage);
  }, [localStorageKey]);

  const filterDataById = (id: number | string):void => {
    const newData = filteredData.filter(item => item.id === id);
    setFilteredData(newData);
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  };

  return [filteredData, filterDataById];
};
