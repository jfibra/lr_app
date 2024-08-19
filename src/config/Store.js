import AsyncStorage from '@react-native-async-storage/async-storage';

// To store data
export const storeUserData = async (data) => {
    try {
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem('userData', jsonData);
    } catch (error) {
        // Handle errors here
    }
};

// To retrieve data
export const getData = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value;
};

export const removeItem = async (key) => {
    await AsyncStorage.removeItem(key);
};
