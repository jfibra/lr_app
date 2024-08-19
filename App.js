// App.js
import * as React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native'; // Import StatusBar
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AxiosInstance from './src/config/AxiosInstance';
import AuthProvider from './src/config/AuthProvider';
import { getData } from './src/config/Store';
import { store } from './src/store';
import { Provider } from 'react-redux';
// Components
import AppNavigator from './src/components/AppNavigator';

AxiosInstance.defaults.withCredentials = true;
AxiosInstance.interceptors.request.use(async (config) => {
  const token = await getData('authToken');

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="transparent" />
          <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <AppNavigator />
          </SafeAreaView>
        </View>
      </AuthProvider>
    </Provider>);
};

export default App;
