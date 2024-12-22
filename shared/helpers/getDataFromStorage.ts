import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('getDataFromStorage ~ jsonValue:', jsonValue);
    const value: string = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('getDataFromStorage ~ value:', value);
    return value;
  } catch (error) {
    console.log('get data error: ', error);
  }
};
