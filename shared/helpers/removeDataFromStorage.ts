import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('remove data error: ', error);
  }
};
