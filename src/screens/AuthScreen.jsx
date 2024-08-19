// src/screens/AuthScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import AgentDashboard from './AgentDashboard';
import { useAuthProvider } from '../config/AuthProvider';
import { useFonts } from '../helpers/useFonts';

function AuthScreen({ navigation }) {

    const authenticated = useAuthProvider();

    React.useEffect(() => {
        useFonts();
    }, []);

    return (
        <>
            {authenticated ? <AgentDashboard /> : <LoginScreen />}
        </>
    );
}

export default AuthScreen;
