import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import styles from '../styles/loginStyles'; // Import your common styles
import AxiosInstance from '../config/AxiosInstance';

function VerifyChangePassword({ navigation, route }) {
    const { email } = route.params;
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChangePassword = async () => {
        if (password !== newPassword) {
            Alert.alert('Password Mismatch', 'The passwords do not match. Please try again.');
            return;
        }

        if (password.length < 10) {
            Alert.alert('Error', 'Please input a minimum of 10 characters.');
            return;
        }

        const jsonData = JSON.stringify({
            email: email,
            password: password,
        });

        const response = await AxiosInstance.post('update-password', jsonData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            Alert.alert(
                'Successfully changed your password.',
                'Please try logging in with your new password.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Redirect and navigate to the Verify Email Address Code page
                            navigation.navigate('Auth Screen');
                        }
                    }
                ]
            );
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.loginbackgroundImage}>
            <View style={styles.loginBox}>
                <View style={styles.lrBox}>
                    <View style={styles.loginformBox}>
                        <Text style={styles.loginformBoxTitle2}>Change your password</Text>

                        <TextInput
                            style={styles.loginInput}
                            placeholder="New Password"
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry={!showPassword} // Ensures password is not visible
                            autoCompleteType="off" // Disables autocomplete
                        />
                        <TextInput
                            style={styles.loginInput}
                            placeholder="Confirm New Password"
                            onChangeText={(newPassword) => setNewPassword(newPassword)}
                            value={newPassword}
                            secureTextEntry={!showPassword} // Ensures password is not visible
                            autoCompleteType="off" // Disables autocomplete
                        />
                        <View style={styles.showPasswordContainer}>
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Text style={styles.showPasswordText}>{showPassword ? 'Hide password' : 'Show password'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={handleChangePassword}>
                            <Text style={styles.loginButtonText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default VerifyChangePassword;
