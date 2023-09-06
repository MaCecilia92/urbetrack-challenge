import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue?: T): [T, (value: T) => void] => {
  const storedValue = localStorage.getItem(key);

  const initial = storedValue !== null && storedValue !== undefined ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    if(value !== null && value !== undefined ){
      localStorage.setItem(key, JSON.stringify(value));
    }
    
  }, [key, value]);

  return [value, setValue];
};


