import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Platform, Image, Share } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { captureRef } from 'react-native-view-shot';
import { decode } from 'base64-arraybuffer';
import FileSystem from 'expo-file-system'; // Import FileSystem from expo-file-system

import AxiosInstance from '../config/AxiosInstance';
import ViewShot from "react-native-view-shot"; // Import ViewShot
import { useFonts } from '../helpers/useFonts';

import qrCodePageStyles from '../styles/qrCodePageStyles'; // Import your common styles
import commonStyles from '../styles/commonStyles'; // Import your common styles
import headerStyles from '../styles/headerStyles';

const MyQRCode = ({ navigation }) => {
    const [referralLink, setReferralLink] = useState(''); // Initialize referralLink state
    const myData = useSelector((state) => state.AuthReducers.userData);
    const userData = myData ? myData[0] : null;
    const [isViewLink, setViewLink] = useState(false);
    const viewShotRef = useRef(null);

    const getReferralLink = async () => {
        if (userData !== null) {
            const { id } = userData.details;
            const response = await AxiosInstance.get(`referral-link/${id}`);
            const responseLink = response.data; // Get the referral link from the response data
            setReferralLink(responseLink); // Set the referralLink state
            setViewLink(true);
        }
    }

    useEffect(() => {
        useFonts();
        getReferralLink();
    }, []);

    const shareReferralLink = async () => {
        try {
            await Share.share({
                message: 'Unlock Your Future in Real Estate with Filipino Homes! Register and ignite your real estate career today! : ' + referralLink,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <ImageBackground source={require('../../assets/images/dashboardBackground.png')} style={commonStyles.loginbackgroundImage}>
            <View style={headerStyles.myNavigationContainer}>
                <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
            </View>
            <View style={qrCodePageStyles.container}>
                {referralLink ? (
                    <ViewShot ref={viewShotRef} options={{ format: 'png', }}>
                        <QRCode
                            value={referralLink} // Pass referralLink as the value
                            size={280}
                            color="#001f3f" // Set color to gold
                        />
                    </ViewShot>
                ) : null}
                {isViewLink ? (
                    <>
                        {/* <TouchableOpacity onPress={() => goBack()} style={qrCodePageStyles.neonButtonLeft}>
                            <FontAwesomeIcon icon={faQrcode} size={25} style={qrCodePageStyles.neonButtonIcon} />
                            <Text style={qrCodePageStyles.neonButtonLabel}>Share QR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={shareReferralLink} style={qrCodePageStyles.neonButtonRight}>
                            <FontAwesomeIcon icon={faLink} size={25} style={qrCodePageStyles.neonButtonIcon} />
                            <Text style={qrCodePageStyles.neonButtonLabel}>Share Link</Text>
                        </TouchableOpacity> */}
                        <View style={qrCodePageStyles.neonButtonArea}>
                            <TouchableOpacity onPress={shareReferralLink} style={qrCodePageStyles.neonButtonCenter}>
                                <FontAwesomeIcon icon={faLink} size={25} style={qrCodePageStyles.neonButtonIcon} />
                                <Text style={qrCodePageStyles.neonButtonLabel}>Share Link</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null}
            </View>
        </ImageBackground>
    );
};

export default MyQRCode;