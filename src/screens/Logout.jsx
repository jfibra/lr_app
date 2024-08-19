// src/screens/Logout.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import AxiosInstance from '../config/AxiosInstance';
import { removeItem } from '../config/Store';
import { AuthLogout } from '../store/authActions';
import { useDispatch } from 'react-redux';

function LogoutScreen({ navigation }) {
    const opacity = useSharedValue(0);
    const dispatch = useDispatch();
    const logout = async () => {
        const response = await AxiosInstance.get('logout');
        
        if(response.status === 200)
        {
            dispatch(AuthLogout(navigation));
        }
    }

    useEffect(() => {
        // Fade in animation
        opacity.value = withTiming(1, { duration: 500, easing: Easing.inOut(Easing.ease) });

        logout();

        return () => {
            // Fade out animation when component unmounts
            opacity.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
        };
    }, []);

    return (
        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: opacity }}>
            <ActivityIndicator size="large" />
        </Animated.View>
    );
}

export default LogoutScreen;
