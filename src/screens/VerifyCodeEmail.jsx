// src/screens/VerifyEmailAddress.js
import React, { useState } from 'react';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import styles from '../styles/loginStyles'; // Import your common styles
import AxiosInstance from '../config/AxiosInstance';

function VerifyCodeEmail({ navigation, route }) {
    const { email } = route.params;
    const [verifycode, setCode] = useState('');

    const handleVerifyCode = async () => {
        if (verifycode.length !== 6) {
            Alert.alert('Error', 'Please input 6 characters.');
        } else {
            const jsonData = JSON.stringify({
                email: email,
                code: verifycode,
            });

            try {
                const response = await AxiosInstance.post('forgot-password/verify-code', jsonData, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.status === 200) {
                    Alert.alert(
                        'Successfully verified your code.',
                        'You can now change your account`s password in the next page.',
                        [
                            {
                                text: 'OK',
                                onPress: () => {
                                    // Redirect and navigate to the Verify Email Address Code page
                                    navigation.navigate('Change Password', { email: email });
                                }
                            }
                        ]
                    );
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    Alert.alert('Invalid verification code', 'Please check your email for the verification code.');
                } else {
                    // Handle other errors if needed
                    console.error('Error:', error);
                }
            }
        }
    };

    return (
        <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.loginbackgroundImage}>
            <View style={styles.loginBox}>
                <View style={styles.lrBox}>

                    <View style={styles.loginformBox}>
                        <Text style={styles.loginformBoxTitle3}>Code Verification</Text>
                        <Text style={styles.loginCaption2}>Verification code was sent to your email : </Text>
                        <Text style={styles.loginCaption3}>{email}</Text>
                        <TextInput
                            style={styles.loginInput}
                            placeholder="Verification code"
                            onChangeText={(verifycode) => {
                                // Limiting the input to 6 characters
                                if (verifycode.length <= 6) {
                                    setCode(verifycode);
                                }
                            }}
                            value={verifycode}
                            maxLength={6} // Limiting the maximum length to 6 characters
                            keyboardType="number"
                        />
                        <TouchableOpacity style={styles.loginButton} onPress={handleVerifyCode}>
                            <Text style={styles.loginButtonText}>Verify Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default VerifyCodeEmail;