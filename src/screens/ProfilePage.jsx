import React, { useState, useCallback } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faFilePdf, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import { useFonts } from '../helpers/useFonts';
import { GetUser } from '../store/authActions';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import headerStyles from '../styles/headerStyles';
import ProfilePageStyles from '../styles/ProfilePageStyles';
import userProfileStyles from '../styles/userProfileStyles';

const activeStatus = {
    active: <Text style={userProfileStyles.userStatusActive}>ACTIVE</Text>,
    inactive: <Text style={userProfileStyles.userStatusInactive}>INACTIVE</Text>,
};

const ProfilePage = ({ navigation }) => {
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
    const profile = `https://leuteriorealty.com/memberfiles/${memberid}/${photo}`;
    const { gender, birthday, fblink, address, addresstwo, city, state, country, zipcode, specialskills, aboutyourself, mobile } = userData[0].details;
    const { email, roleId } = userData[0];
    const role = getRole(roleId);
    const genderId = getGender(gender);

    // Usage of formatDate function
    const formattedDate = formatDate(lr_joined);
    const formattedBirthdate = formatDate(birthday);

    return (
        <View style={ProfilePageStyles.container}>
            <ScrollView>
                <ImageBackground
                    source={{ uri: `https://leuteriorealty.com/images/COVERPHOTO_FHSTAFF.jpg` }}
                    style={ProfilePageStyles.coverPhoto}
                >
                    <Image source={{ uri: profile }} style={ProfilePageStyles.profilePicture} />
                </ImageBackground>

                <Text style={ProfilePageStyles.fullName}>{completename}</Text>
                <Text style={ProfilePageStyles.role}>{role}</Text>

                <View style={ProfilePageStyles.labelSection}>
                    <Text style={ProfilePageStyles.labelSectionTxt}>General Information</Text>
                </View>

                <TouchableOpacity style={ProfilePageStyles.button} onPress={() => navigation.navigate('Edit Basic Information')}>
                    <FontAwesomeIcon icon={faPenToSquare} size={18} color={'#001f3f'} />
                    <Text style={ProfilePageStyles.buttonLabel}>Edit Basic Information</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={18} color={'#001f3f'} />
                </TouchableOpacity>

                {/* <TouchableOpacity style={ProfilePageStyles.button} onPress={() => navigation.navigate('Change Profile')}>
                    <FontAwesomeIcon icon={faPenToSquare} size={18} color={'#001f3f'} />
                    <Text style={ProfilePageStyles.buttonLabel}>Change Profile Picture</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={18} color={'#001f3f'} />
                </TouchableOpacity> */}

                <TouchableOpacity style={ProfilePageStyles.button} onPress={() => navigation.navigate('Downloadable Forms')}>
                    <FontAwesomeIcon icon={faFilePdf} size={18} color={'#001f3f'} />
                    <Text style={ProfilePageStyles.buttonLabel}>Downloadable Forms</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={18} color={'#001f3f'} />
                </TouchableOpacity>

                <TouchableOpacity style={ProfilePageStyles.button} onPress={() => navigation.navigate('Logout')}>
                    <FontAwesomeIcon icon={faRightFromBracket} size={18} color={'#001f3f'} />
                    <Text style={ProfilePageStyles.buttonLabel}>Logout</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={18} color={'#001f3f'} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ProfilePage;
