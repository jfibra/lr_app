import React from 'react';
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBuilding, faFileContract } from '@fortawesome/free-solid-svg-icons';
import downloadingPageStyles from '../styles/downloadingPageStyles';
import { ScrollView } from 'react-native-gesture-handler';

const DownloadingPage = () => {
    const salesContract = () => {
        // Sample file URL
        const sampleFileUrl = 'https://leuteriorealty.com/uploadforms/1544513564.pdf'; // Replace with your actual file URL

        // Check if the platform supports the download functionality
        if (Platform.OS === 'web') {
            // For web, open the file in a new tab
            window.open(sampleFileUrl, '_blank');
        } else {
            // For mobile, initiate a download
            Linking.openURL(sampleFileUrl);
        }
    };

    const dataCorrection = () => {
        // Sample file URL
        const sampleFileUrl = 'https://leuteriorealty.com/uploadforms/1499744846.jpg'; // Replace with your actual file URL

        // Check if the platform supports the download functionality
        if (Platform.OS === 'web') {
            // For web, open the file in a new tab
            window.open(sampleFileUrl, '_blank');
        } else {
            // For mobile, initiate a download
            Linking.openURL(sampleFileUrl);
        }
    };

    const activationForm = () => {
        // Sample file URL
        const sampleFileUrl = 'https://leuteriorealty.com/photos/finalactivation.jpg'; // Replace with your actual file URL

        // Check if the platform supports the download functionality
        if (Platform.OS === 'web') {
            // For web, open the file in a new tab
            window.open(sampleFileUrl, '_blank');
        } else {
            // For mobile, initiate a download
            Linking.openURL(sampleFileUrl);
        }
    };

    const reactivationForm = () => {
        // Sample file URL
        const sampleFileUrl = 'https://leuteriorealty.com/photos/finalreactivation.jpg'; // Replace with your actual file URL

        // Check if the platform supports the download functionality
        if (Platform.OS === 'web') {
            // For web, open the file in a new tab
            window.open(sampleFileUrl, '_blank');
        } else {
            // For mobile, initiate a download
            Linking.openURL(sampleFileUrl);
        }
    };

    
    const handleDownload = () => {
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={salesContract} style={downloadingPageStyles.toolBtnNavy}>
                        <FontAwesomeIcon icon={faFileContract} size={25} color={'#001f3f'} />
                        <Text style={downloadingPageStyles.toolLabel}>SALES PERSON POLICY HANDBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={dataCorrection} style={downloadingPageStyles.toolBtnNavy}>
                        <FontAwesomeIcon icon={faBuilding} size={25} color={'#001f3f'} />
                        <Text style={downloadingPageStyles.toolLabel}>DATA CORRECTION FORM</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={activationForm} style={downloadingPageStyles.toolBtnNavy}>
                        <FontAwesomeIcon icon={faBuilding} size={25} color={'#001f3f'} />
                        <Text style={downloadingPageStyles.toolLabel}>ACTIVATION FORM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={reactivationForm} style={downloadingPageStyles.toolBtnNavy}>
                        <FontAwesomeIcon icon={faBuilding} size={25} color={'#001f3f'} />
                        <Text style={downloadingPageStyles.toolLabel}>REACTIVATION FORM</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default DownloadingPage;
