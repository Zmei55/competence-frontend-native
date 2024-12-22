import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('store data error: ', error);
  }
};
