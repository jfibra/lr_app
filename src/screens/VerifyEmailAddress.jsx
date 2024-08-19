import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, ActivityIndicator } from 'react-native';
import styles from '../styles/loginStyles'; // Import your common styles
import AxiosInstance from '../config/AxiosInstance';

function VerifyEmailAddress({ navigation }) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // Loading state variable
    

    const handleSendVerificationCode = async () => {
        // Regular expression for email format validation
        const emailRegex = /\S+@\S+\.\S+/;

        if (!email.trim()) {
            Alert.alert('No email address inputted', 'Please input your email address.');
            return;
        }

        if (!emailRegex.test(email.trim())) {
            Alert.alert('Invalid email format', 'Inputted email is not a valid email.');
            return;
        }

        const jsonData = JSON.stringify({
            email: email,
        });

        setLoading(true); // Set loading state to true

        try {
            const response = await AxiosInstance.post('forgot-password-verification', jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                Alert.alert(
                    'Please check your email for the verification code.',
                    'Enter the code you received in the next page.',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                // Redirect and navigate to the Verify Email Address Code page
                                navigation.navigate('Verify Email Address Code', { email: email });
                            }
                        }
                    ]
                );
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Alert.alert('Email does not exist', 'The provided email does not exist.');
            } else {
                // Handle other errors if needed
                console.error('Error:', error);
            }
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };

    return (
        <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.loginbackgroundImage}>
            <View style={styles.loginBox}>
                <View style={styles.lrBox}>
                    <View style={styles.loginformBox}>
                        <Text style={styles.loginformBoxTitle2}>Let us verify your email address</Text>
                        <TextInput
                            style={styles.loginInput}
                            placeholder="Email Address"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            keyboardType="email-address"
                        />
                        <TouchableOpacity style={styles.loginButton} onPress={handleSendVerificationCode} disabled={loading}>
                            <Text style={styles.loginButtonText}>{loading ? 'Sending...' : 'Send Verification Code'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.formCaptionBottom}>
                            Please input your email address, and a verification code will be sent to
                            the email associated with your LR Account.
                        </Text>
                        <Text style={styles.formCaptionBottom}>
                            Enter the code on the next page to proceed. Once verified, you can then proceed to set a new password.
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default VerifyEmailAddress;
