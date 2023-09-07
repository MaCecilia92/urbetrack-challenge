import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export const useLocalStorage = <T>(key = 'defaultKey', initialValue: T[] = []): [T[], SetValue<T[]>] => {
  const [value, setValue] = useState<T[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !=null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue: SetValue<T[]> = (newValue) => {
    setValue((prevValue) => {
      if (Array.isArray(prevValue)) {
        return [...prevValue, ...newValue as []];
      }
      return [prevValue, ...newValue as []];
    });
  };

  return [value, updateValue];
};




