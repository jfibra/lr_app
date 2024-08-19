// src/screens/UserProfile.js
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import { useFonts } from '../helpers/useFonts';
import userProfileStyles from '../styles/userProfileStyles'; // Import your common styles
import headerStyles from '../styles/headerStyles';

import { GetUser } from '../store/authActions';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const activeStatus = {
    active: <Text style={userProfileStyles.userStatusActive}>ACTIVE</Text>,
    inactive: <Text style={userProfileStyles.userStatusInactive}>INACTIVE</Text>,
};

function UserProfile({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [fireCerts, setFireCerts] = useState([]);
    const [inviterName, setInviterName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [systemTab, setSystemTab] = useState(true);
    const [personalTab, setPersonalTab] = useState(false);
    const [contactTab, setContactTab] = useState(false);
    const [addressTab, setAddressTab] = useState(false);
    const data = useSelector((state) => state.AuthReducers.userData);
    const userData = data ? data : null;

    const dispatch = useDispatch();

    const fetchUser = () => {
        dispatch(GetUser());
    }

    const fetchFireCerts = async () => {
        if (userData !== null) {
            setRefreshing(true);
            setPageLoading(false);

            const response = await AxiosInstance.get(`https://realestatetraining.ph/cert_api.php?email=${userData[0].email}`);
            const data = response.data;

            setFireCerts(data);
            setRefreshing(false);
        }
    }

    const getInviter = async () => {
        if (userData !== null) {
            const url = `inviter-id/${userData[0].details.inviterid}`;
            try {
                const response = await AxiosInstance.get(url);
                setInviterName(response.data.completename);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        }
    }

    const getSalesTeam = async () => {
        if (userData !== null) {
            const sales_team = userData[0].details.sales_team_member;
            if (sales_team && sales_team !== null && sales_team !== undefined) {
                setTeamName(userData[0].details.sales_team_member.sales_team.teamname);
            }
        }
    }

    const onRefresh = useCallback(() => {
        fetchFireCerts();
    }, []);

    const getRole = (id) => {
        const roles = [
            {
                id: 1,
                label: "ADMIN"
            },
            {
                id: 3,
                label: "SECRETARY"
            },
            {
                id: 4,
                label: "AGENT"
            },
            {
                id: 6,
                label: "SUPERVISOR"
            },
            {
                id: 7,
                label: "UNIT MANAGER"
            }
        ];

        const role = roles.find((obj) => obj.id === id);

        return role.label;
    }

    const getGender = (gender) => {
        const gen = [
            {
                id: 0,
                label: "MALE"
            },
            {
                id: 1,
                label: "FEMALE"
            },
        ]

        const gend = gen.find((obj) => obj.id === gender);

        return gend.label;
    }

    const formatDate = (inputDate) => {
        // Convert inputDate to a Date object
        const dateObject = new Date(inputDate);

        // Options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date as "Month day, Year"
        const formattedDate = dateObject.toLocaleDateString('en-US', options);

        return formattedDate;
    };

    const formatBirthday = (dateString) => {
        const [month, day, year] = dateString.split('/');
        const formattedDate = new Date(`${year}-${month}-${day}`); // Constructing the date in YYYY-MM-DD format
        return formattedDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    React.useEffect(() => {
        useFonts();
        getInviter();
        getSalesTeam();
        fetchUser();
        fetchFireCerts();
    }, []);

    const { status, memberid, photo, completename, prc, prc_expiry, hlurb, dshud_expiry, lr_joined, phone } = userData[0].details;
    const { gender, birthday, fblink, address, addresstwo, city, state, country, zipcode, specialskills, aboutyourself, mobile } = userData[0].details;
    const { email, roleId } = userData[0];
    const role = getRole(roleId);
    const genderId = getGender(gender);

    // Usage of formatDate function
    const formattedDate = formatDate(lr_joined);
    const formattedBirthdate = formatDate(birthday);

    const handleTabPress = (tabName) => {
        // Handle logic for tab press
        switch (tabName) {
            case 'SYSTEM':
                setSystemTab(true);
                setPersonalTab(false);
                setContactTab(false);
                setAddressTab(false);
                break;
            case 'PERSONAL':
                setSystemTab(false);
                setPersonalTab(true);
                setContactTab(false);
                setAddressTab(false);
                break;
            case 'CONTACT':
                setSystemTab(false);
                setPersonalTab(false);
                setContactTab(true);
                setAddressTab(false);
                break;
            case 'ADDRESS':
                setSystemTab(false);
                setPersonalTab(false);
                setContactTab(false);
                setAddressTab(true);
                break;
            default:
                console.log(`Invalid tab name: ${tabName}`);
        }
    };

    return (
        <View style={userProfileStyles.container}>
            <View style={headerStyles.myNavigationContainer}>
                <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
            </View>
            <View style={userProfileStyles.headerContainer}>
                <ImageBackground
                    source={{ uri: `https://leuteriorealty.com/images/COVERPHOTO_FHSTAFF.jpg` }}
                    style={userProfileStyles.coverPhoto}
                >
                    {activeStatus[status]}
                    <View style={[userProfileStyles.avatarContainer, { width: 150, height: 150 }]}>
                        <Image
                            source={{ uri: `https://leuteriorealty.com/memberfiles/${memberid}/${photo}` }} // Placeholder image URL
                            style={userProfileStyles.avatar}
                        />
                    </View>
                    <Text style={userProfileStyles.userName}>{completename.toUpperCase()}</Text>
                    <Text style={userProfileStyles.userRole}>{role}</Text>
                    <View style={userProfileStyles.tabContainer}>
                        <TouchableOpacity style={userProfileStyles.tabBtn} onPress={() => handleTabPress('SYSTEM')}>
                            <Text style={userProfileStyles.tabBtnText}>SYSTEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={userProfileStyles.tabBtnCenter} onPress={() => handleTabPress('PERSONAL')}>
                            <Text style={userProfileStyles.tabBtnText}>PERSONAL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={userProfileStyles.tabBtnCenter} onPress={() => handleTabPress('CONTACT')}>
                            <Text style={userProfileStyles.tabBtnText}>CONTACT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={userProfileStyles.tabBtn} onPress={() => handleTabPress('ADDRESS')}>
                            <Text style={userProfileStyles.tabBtnText}>ADDRESS</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={userProfileStyles.userInfo}>
                <ScrollView style={userProfileStyles.scrollViewContainer}>
                    {systemTab === true ? <>
                        <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Member ID</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{memberid}</Text>
                        </View>
                        {prc ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>PRC NUMBER</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{prc}</Text>
                        </View> : <></>}
                        {hlurb ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>HLURB NUMBER</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{hlurb}</Text>
                        </View> : <></>}
                        {prc_expiry ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>PRC EXPIRY</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{formatDate(prc_expiry)}</Text>
                        </View> : <></>}
                        {dshud_expiry ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>DSHUD EXPIRY</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{formatDate(dshud_expiry)}</Text>
                        </View> : <></>}
                        {lr_joined ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>LR Joined</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{formatDate(lr_joined)}</Text>
                        </View> : <></>}
                        {inviterName ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Invited By</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{inviterName}</Text>
                        </View> : <></>}
                        {teamName ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Sales Team</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{teamName}</Text>
                        </View> : <></>}
                    </> : <></>}
                    {personalTab === true ? <>
                        {specialskills ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Special Skills</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{specialskills}</Text>
                        </View> : <></>}
                        {aboutyourself ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>About Yourself</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{aboutyourself}</Text>
                        </View> : <></>}
                        {genderId ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Gender</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{genderId}</Text>
                        </View> : <></>}
                        {birthday ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Birthdate</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{formatBirthday(birthday)}</Text>
                        </View> : <></>}
                    </> : <></>}
                    {contactTab === true ? <>
                        {phone ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Phone Number</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{phone}</Text>
                        </View> : <></>}
                        {mobile ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Mobile Number</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{mobile}</Text>
                        </View> : <></>}
                        {email ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Email Address</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{email}</Text>
                        </View> : <></>}
                        {fblink ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Facebook Link</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{fblink}</Text>
                        </View> : <></>}
                    </> : <></>}
                    {addressTab === true ? <>
                        {address ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Address 1</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{address}</Text>
                        </View> : <></>}
                        {addresstwo ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Address 2</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{addresstwo}</Text>
                        </View> : <></>}
                        {city ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>City</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{city}</Text>
                        </View> : <></>}
                        {state ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>State</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{state}</Text>
                        </View> : <></>}
                        {country ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Country</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{country}</Text>
                        </View> : <></>}
                        {zipcode ? <View style={userProfileStyles.textContent}>
                            <Text style={userProfileStyles.textContentTitle}>Zip Code</Text>
                            <Text style={userProfileStyles.textContentSubtitle}>{zipcode}</Text>
                        </View> : <></>}
                    </> : <></>}
                </ScrollView >
            </View >
        </View >
    );
};

export default UserProfile;