import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGetDataFromStorage = () => {
  const [value, setValue] = useState<string | boolean | null>(null);

  const handleGetDataFromStorage = async (key: string) => {
    await AsyncStorage.getItem(key).then(data => {
      if (data === 'true') return setValue(true);
      if (data === 'false') return setValue(false);
      return setValue(data);
    });
  };

  return { value, handleGetDataFromStorage };
};
