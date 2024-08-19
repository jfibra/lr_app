import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ScrollView, Image, ActivityIndicator, ImageBackground } from 'react-native';
import { useFonts } from '../helpers/useFonts';
import { useSelector } from 'react-redux';

import AxiosInstance from '../config/AxiosInstance';
import styles from '../styles/commonStyles'; // Import your common styles

const TechnicalSupportPage = ({ navigation, route }) => {
    const hasParams = route?.params;
    const myData = useSelector((state) => state.AuthReducers.userData);
    const userData = myData ? myData[0] : null;

    const [name, setName] = useState(userData ? userData.name : '');
    const [email, setEmail] = useState(userData ? userData.email : '');
    const [issue, setIssue] = useState('');
    const [imageAsset, setImageAsset] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true); // Show loading animation

        try {
            // Create a FormData object to store form data
            const formData = new FormData();

            // Append text fields to formData
            if (userData && userData.details && userData.details.memberid) {
                formData.append('memberid', userData.details.memberid);
            }
            formData.append('name', name);
            formData.append('email', email);
            formData.append('concern', issue);

            if (imageAsset) {
                formData.append(`image`, {
                    uri: imageAsset.uri,
                    type: 'image/jpeg',
                    name: imageAsset.filename,
                });
            }

            // Send a POST request using AxiosInstance
            const response = await AxiosInstance.post('/app-support', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important to set the content type
                },
            });

            // Clear form fields and image assets
            setIssue('');
            setImageAsset(null);

            // Hide loading animation
            setIsLoading(false);

            // Show success message
            Alert.alert('Success', 'Your support ticket has been submitted successfully.');

        } catch (error) {
            Alert.alert('Error', 'Failed to submit support ticket. Please try again later.');
            setIsLoading(false); // Hide loading animation
        }
    };


    useEffect(() => {
        useFonts();

        if (hasParams) {
            const assets = route.params.assetsPOT;

            setImageAsset(assets[0]);
        }
    }, [hasParams]);

    return (
        <ImageBackground source={require('../../assets/images/technicalSupport.png')} style={styles.loginbackgroundImage}>
            <View style={styles.containerSupport}>
                <ScrollView contentContainerStyle={styles.scrollSupportContainer}>
                    <Text style={styles.titleSupport}>Technical Support</Text>
                    <Text style={styles.subTitleSupport}>Please fill up all the forms</Text>
                    <View style={styles.formContainerSupport}>
                        <TextInput
                            style={[styles.inputSupport, { backgroundColor: userData ? '#eee' : '#fff' }]} // Disable input if userData is available
                            placeholder="Your Name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                            editable={!userData} // Disable editing if userData is available
                        />

                        <TextInput
                            style={[styles.inputSupport, { backgroundColor: userData ? '#eee' : '#fff' }]} // Disable input if userData is available
                            placeholder="Your Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            editable={!userData} // Disable editing if userData is available
                        />

                        <TextInput
                            style={[styles.input, styles.issueInput]}
                            placeholder="Describe Your Issue"
                            multiline
                            numberOfLines={4}
                            value={issue}
                            onChangeText={(text) => setIssue(text)}
                        />

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollImageViewContainer}>
                            {/* Display Image Previews */}
                            {imageAsset !== null &&
                                <View style={{ margin: 10, }}>
                                    <Image source={{ uri: imageAsset.uri }} style={{ width: 200, height: 200 }} />
                                    <Text>{imageAsset.filename}</Text>
                                </View>
                            }
                        </ScrollView>

                        {isLoading ? (
                            <ActivityIndicator size="large" color="#0000ff" /> // Loading animation
                        ) : (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Image Picker Technical Support Page')}
                                style={styles.chooseFileButtonSupport}
                            >
                                <Text style={styles.chooseFileButtonTextSupport}>Choose File</Text>
                                <Text style={styles.BrowseButtonTextSupport}>Browse</Text>
                            </TouchableOpacity>
                        )}

                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default TechnicalSupportPage;
