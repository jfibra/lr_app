// src/screens/AgentDashboard.js
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Image, ImageBackground, Dimensions, RefreshControl, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faDoorOpen, faHouseChimneyWindow, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useFonts } from '../helpers/useFonts';
import { GetUser } from '../store/authActions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import Carousel, { Pagination } from 'react-native-snap-carousel';

import AxiosInstance from '../config/AxiosInstance';
import dashboardStyles from '../styles/dashboardStyles'; // Import your common styles
import headerStyles from '../styles/headerStyles';

const { width } = Dimensions.get('window');
const sliderWidth = width;
const itemWidth = width - 40;

function AgentDashboard({ navigation }) {
    const data = useSelector((state) => state.AuthReducers.userData);
    const userData = data ? data[0] : null;
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeAnnouncement, setActiveAnnouncement] = useState(0);
    const [banners, setBanners] = useState([]);
    const [imageAnnouncements, setImageAnnouncements] = useState([]);
    const [maintenanceTrue, setMaintenanceTrue] = useState(false);
    const [resumeDate, setResumeDate] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [deadlineCutOff, setDeadlineCutOff] = useState(false);
    const [status, setStatus] = useState(null);

    const memberid = userData !== null ? userData.details.memberid : null;

    const getCurrentDateTime = () => {
        const currentDate = new Date();

        // Get current date in Y-m-d format
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        // Get current time in HH:MM:SS format
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        return { formattedDate, formattedTime };
    }

    const getSettings = async () => {
        try {
            const response = await AxiosInstance.get('get-settings');
            const systemMaintenance = response.data.system_maintenance === 0 ? false : true;

            const cutOffDate = new Date(response.data.cut_off_date);
            const cutOffTime = response.data.cut_off_time;
            const formattedCutOffDate = cutOffDate.toISOString().split('T')[0];

            // Ensure cutOffTime is in 24-hour format 
            const cutOffTimeParts = cutOffTime.split(':');
            let hour = parseInt(cutOffTimeParts[0], 10);
            const minute = parseInt(cutOffTimeParts[1], 10);
            const isPM = cutOffTime.toLowerCase().includes('pm');

            if (isPM && hour !== 12) {
                hour += 12;
            } else if (!isPM && hour === 12) {
                hour = 0;
            }

            const formattedCutOffTime = `${hour.toString().padStart(2, '0')}:${minute}:00`;

            const { formattedDate, formattedTime } = getCurrentDateTime();

            // Add two days to formattedCutOffDate
            const resumeDate = new Date(cutOffDate);
            resumeDate.setDate(resumeDate.getDate() + 2); // Adding two days
            const formattedResumeDate = resumeDate.toISOString().split('T')[0];
            setResumeDate(formattedResumeDate);

            // // Convert cut_off_time to milliseconds   
            const beforeDateTime = new Date(formattedCutOffDate + 'T' + formattedCutOffTime + 'Z').getTime();
            const afterDateTime = new Date(formattedResumeDate + 'T' + formattedCutOffTime + 'Z').getTime();
            const currentDateTime = new Date(formattedDate + 'T' + formattedTime + 'Z').getTime();

            // Check if currentDateTime is before beforeDateTime or after afterDateTime
            const isBefore = currentDateTime > beforeDateTime;
            const isAfter = currentDateTime < afterDateTime;

            if (isBefore === true && isAfter === true) {
                setDeadlineCutOff(true);
            } else {
                setDeadlineCutOff(false);
            }

            setMaintenanceTrue(systemMaintenance);
            setRefreshing(false);
            setIsLoaded(true);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    }

    const getImageBanners = async () => {
        try {
            const response = await AxiosInstance.get('get-announcement-banners');
            setRefreshing(false);
            setImageAnnouncements(response.data);
            setActiveAnnouncement(response.data.length > 0 ? 1 : 0);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

    const getBanners = async () => {
        try {
            const response = await AxiosInstance.get('get-banners');
            setBanners(response.data);
            setRefreshing(false);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    }

    const checkStatus = async () => {
        try {
            const response = await AxiosInstance.get(`get-status/${memberid}`);
            setStatus(response.data.status);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    }

    const fetchUser = () => {
        dispatch(GetUser());
    }

    useEffect(() => {
        useFonts();
        fetchUser();
        getBanners();
        getImageBanners();
        getSettings();
        checkStatus();
    }, []);

    const renderImageItem = ({ item }) => {
        const handleImagePress = () => {
            if (item.external_link) {
                Linking.openURL(item.external_link); // Assuming 'Linking' is imported from 'react-native'
            }
        };

        return (
            <TouchableOpacity onPress={handleImagePress}>
                <View style={dashboardStyles.slide}>
                    <Image
                        source={{ uri: item.link }}
                        style={dashboardStyles.sliderImage}
                        resizeMode="contain"
                        onError={() => console.log('Error loading image:', item.link)}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    const renderImageItemAnnouncements = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={closeSlider} style={dashboardStyles.closeBtn}>
                    <Text style={dashboardStyles.closeLabel}>CLOSE</Text>
                </TouchableOpacity>
                <View style={dashboardStyles.slideAnnouncements}>
                    <Image
                        source={{ uri: item.link }}
                        style={dashboardStyles.sliderImageAnnouncements}
                        resizeMode="contain"
                        onError={() => console.log('Error loading image:', item.link)}
                    />
                </View>
            </>
        );
    };

    const onRefresh = () => {
        setRefreshing(true);
        setIsLoaded(false);
        getBanners();
        getImageBanners();
        getSettings();
        checkStatus();
    };

    const closeSlider = () => {
        setActiveAnnouncement(0);
    }

    return (
        <ImageBackground source={require('../../assets/images/dashboardBackground.png')} style={dashboardStyles.loginbackgroundImage}>
            {isLoaded === true ?
                <>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, height: 570, }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={headerStyles.myNavigationContainer}>
                            <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
                        </View>
                        {deadlineCutOff === false ? <>
                            {maintenanceTrue === false ? <>
                                {status === 'active' ?
                                    <View style={dashboardStyles.container}>
                                        <View style={dashboardStyles.toolGroup}>
                                            <TouchableOpacity onPress={() => navigation.navigate('ADD DEVELOPER SALES')} style={dashboardStyles.toolBtnRed}>
                                                <FontAwesomeIcon icon={faHouseChimneyWindow} size={25} color={'white'} />
                                                <Text style={dashboardStyles.toolLabel}>ADD DEVELOPER SALES</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => navigation.navigate('ADD BROKERAGE SALES')} style={dashboardStyles.toolBtnNavy}>
                                                <FontAwesomeIcon icon={faBuilding} size={25} color={'white'} />
                                                <Text style={dashboardStyles.toolLabel}>ADD BROKERAGE SALES</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={dashboardStyles.toolGroup2ndRow}>
                                            <TouchableOpacity onPress={() => navigation.navigate('ADD RENTAL SALES')} style={dashboardStyles.toolBtnWarning}>
                                                <FontAwesomeIcon icon={faDoorOpen} size={25} color={'white'} />
                                                <Text style={dashboardStyles.toolLabel}>ADD RENTAL SALES</Text>
                                            </TouchableOpacity>
                                            {/* <TouchableOpacity style={dashboardStyles.toolBtnDefault}>
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={25} color={'#001f3f'} />
                                                <Text style={dashboardStyles.toolLabel2}>VIEW MORE SERVICES</Text>
                                            </TouchableOpacity> */}
                                        </View>
                                    </View> :
                                    <View style={dashboardStyles.container}>
                                        <Text style={{ width: '80%', height: 300, textAlign: 'left', margin: '10%', fontFamily: 'TiltNeon-Regular', fontSize: 20 }}>
                                            It seems that your account is currently inactive.
                                            If you are an existing agent, please submit a reactivation request through your team secretary.
                                            For new agents, please submit an activation request also through your team secretary.
                                        </Text>
                                    </View>}
                            </> : <View style={dashboardStyles.container}>
                                <Text style={{ width: '80%', height: 300, textAlign: 'left', margin: '10%', fontFamily: 'TiltNeon-Regular', fontSize: 20 }}>
                                    Our system is having a maintenance as of today. Please try again later.
                                </Text>
                            </View>}
                        </> : <View style={dashboardStyles.container}>
                            <Text style={{ width: '80%', height: 300, textAlign: 'left', margin: '10%', fontFamily: 'TiltNeon-Regular', fontSize: 20 }}>
                                Sales encoding cut off deadline. Sales encoding will resume in {resumeDate}
                            </Text>
                        </View>}
                        <View style={dashboardStyles.sliderContainer}>
                            <Carousel
                                data={banners}
                                renderItem={renderImageItem}
                                sliderWidth={sliderWidth}
                                itemWidth={itemWidth}
                                onSnapToItem={(index) => setActiveSlide(index)}
                                autoplay={true}
                                autoplayInterval={3000}
                                loop={true}
                            />
                            <Pagination
                                dotsLength={banners.length}
                                activeDotIndex={activeSlide}
                                containerStyle={dashboardStyles.paginationContainer}
                                dotStyle={dashboardStyles.dotStyle}
                                inactiveDotStyle={dashboardStyles.inactiveDotStyle}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </View>
                        {activeAnnouncement === 1 ? <>
                            <View style={dashboardStyles.sliderImageContainer}>
                                <Carousel
                                    data={imageAnnouncements}
                                    renderItem={renderImageItemAnnouncements}
                                    sliderWidth={sliderWidth}
                                    itemWidth={itemWidth}
                                    onSnapToItem={(index) => setActiveSlide(index)}
                                    loop={true}
                                />
                                <Pagination
                                    dotsLength={banners.length}
                                    activeDotIndex={activeSlide}
                                    containerStyle={dashboardStyles.paginationContainer}
                                    dotStyle={dashboardStyles.dotStyle}
                                    inactiveDotStyle={dashboardStyles.inactiveDotStyle}
                                    inactiveDotOpacity={0.4}
                                    inactiveDotScale={0.6}
                                />
                            </View></>
                            : null}
                    </ScrollView>
                </> :
                <>
                    <View style={headerStyles.myNavigationContainer}>
                        <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
                    </View>
                    <View style={{ padding: 20, marginTop: 200, alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Fetching data. Please wait.</Text>
                    </View>
                </>}
        </ImageBackground >
    );
}

export default AgentDashboard;