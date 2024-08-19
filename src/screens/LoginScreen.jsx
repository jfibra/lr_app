// src/screens/LoginScreen.js
import React, { useState, useEffect } from 'react';

import { useFonts } from '../helpers/useFonts';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

import styles from '../styles/loginStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import AxiosInstance from '../config/AxiosInstance';
import { useDispatch } from 'react-redux';
import { SignInUser } from '../store/authActions';

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        useFonts();
    }, []);

    const handleLogin = async () => {
        try {
            // Add logic to validate email and password
            if (!email || !password) {
                setError('Please enter both email and password.');
                return;
            }

            // Basic email format validation using regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email address.');
                return;
            }

            // Add logic to authenticate user using fetch API
            setLoading(true);
            const jsonData = JSON.stringify({
                email: email,
                password: password,
            });
            const response = await AxiosInstance.post('auth-login', jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = response.data;
            const userData = data[0];
            const authToken = userData.authToken;

            if (response.status === 200) {
                // The login was successful, handle the response data as needed
                const data = JSON.stringify(userData);

                dispatch(SignInUser(authToken, data, navigation));

                // For now, you can choose to navigate or perform any other actions based on the response
            } else {
                // The login failed, handle the error message
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            setError('An error occurred. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        // Add logic for navigating to the Forgot Password screen or triggering the forgot password flow
        navigation.navigate('Verify Email Address');
    };

    return (
        <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.loginbackgroundImage}>
            <View style={styles.loginBox}>
                <View style={styles.lrBox}>
                    <Image source={require('../../assets/images/logoMain.png')} style={{ width: '80%', height: 100, marginBottom: 50 }}></Image>
                    <View style={styles.loginformBox}>
                        <Text style={styles.loginformBoxTitle}>LOGIN</Text>
                        {error && <Text style={styles.errorText}>{error}</Text>}
                        <Text style={styles.loginCaption}>Please sign in to continue.</Text>
                        <TextInput
                            style={styles.loginInput}
                            placeholder="Email Address"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            keyboardType="default"
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={[styles.loginInput]}
                                placeholder="Password"
                                secureTextEntry={!passwordVisible}
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={faEye} size={20} color="#001f3f" style={{ position: 'absolute', right: 10, top: -20 }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
                            <Text style={styles.loginButtonText}>{loading ? 'Logging in...' : 'LOGIN'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <Text style={styles.formCaptionBottom}>
                            If you're unable to access your previous LR account,
                            kindly initiate a password reset by selecting the "Forgot password" link.
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default LoginScreen;