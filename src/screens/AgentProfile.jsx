// src/screens/AgentProfile.js
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground, Image, RefreshControl, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faPhotoFilm, faPenToSquare, faIdBadge, faHashtag, faAddressCard, faHouseUser, faUsersRays, faVenusMars, faCakeCandles, faUsersRectangle, faUserSecret, faAddressBook, faHouseChimneyUser, faSquarePhone, faMobileRetro, faEnvelopeOpenText, faSquareShareNodes, faBuilding, faRoad, faMapLocationDot, faLocationDot, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import FooterTaskbar from '../components/FooterTaskbar';
import styles from '../styles/commonStyles'; // Import your common styles
import { useFonts } from '../helpers/useFonts';
import { GetUser } from '../store/authActions';
import { useDispatch } from 'react-redux';
import AxiosInstance from '../config/AxiosInstance';

function AgentProfile({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [fireCerts, setFireCerts] = useState([]);
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

    React.useEffect(() => {
        useFonts();
        fetchUser();
        fetchFireCerts();
    }, []);

    const ProfileView = () => {
        const { status, memberid, photo, completename, prc, prc_expiry, hlurb, dshud_expiry, lr_joined, phone } = userData[0].details;
        const { gender, birthday, fblink, address, addresstwo, city, state, country, zipcode, specialskills, aboutyourself, mobile } = userData[0].details;
        const { email, roleId } = userData[0];
        const role = getRole(roleId);
        const genderId = getGender(gender);

        // Usage of formatDate function
        const formattedDate = formatDate(lr_joined);
        const formattedBirthdate = formatDate(birthday);

        return (
            <>
                <ImageBackground
                    source={{ uri: `https://leuteriorealty.com/images/COVERPHOTO_FHSTAFF.jpg` }}
                    style={styles.profileHeader}
                >
                    {/* <TouchableOpacity style={styles.clickableBannerIcon}>
                            <FontAwesomeIcon icon={faPhotoFilm} size={22} color={'#0081c9'} />
                        </TouchableOpacity> */}
                    <TouchableOpacity style={styles.bannerAvatar}>
                        <ImageBackground
                            source={{ uri: `https://leuteriorealty.com/memberfiles/${memberid}/${photo}` }}
                            style={styles.imageProfileBackground}
                        >
                        </ImageBackground>
                        {/* <View style={styles.clickableIcon}>
                                <FontAwesomeIcon icon={faPlus} size={25} color={'white'} />
                            </View> */}
                    </TouchableOpacity>
                </ImageBackground>
                {status === "active" ? (
                    <Text style={styles.profileStatus}>Active</Text>
                ) : (
                    <Text style={styles.profileStatusInactive}>Inactive</Text>
                )}
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{completename}</Text>
                    <Text style={styles.profileRole}>{role}</Text>
                    <TouchableOpacity style={styles.editProfileIcon}>
                        <FontAwesomeIcon icon={faPenToSquare} size={15} color={'#0a66c2'} />
                        <Text style={styles.editProfileName}> Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.systemDetails}>
                    <Text style={styles.systemDetailsText}> System Details</Text>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faIdBadge} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> ID Number</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}> {memberid}</Text>
                        </TouchableOpacity>
                    </View>
                    {role !== 'ADMIN' &&
                        <>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faHashtag} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> PRC Number</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}>{prc}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faHashtag} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> HLURB Number</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}>{hlurb}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faAddressCard} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> PRC Expiry</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}>{prc_expiry}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faAddressCard} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> DSHUD Expiry</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}>{dshud_expiry}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faUsersRays} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> Invited By</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}> Khrisna Acdol</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faUsersRectangle} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> Sales Team</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}> Chin Dynasty</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.idNumberGroup}>
                                <FontAwesomeIcon icon={faUserSecret} size={25} color={'black'} style={styles.systemIcons} />
                                <Text style={styles.systemDescr}> Team Leader</Text>
                                <TouchableOpacity style={styles.idNumber}>
                                    <Text style={styles.idNumberText}> Mike Noel III And Grace Chin</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                    <View style={styles.idNumberGroupEnd}>
                        <FontAwesomeIcon icon={faHouseUser} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> LR Joined</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{formattedDate}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text></Text>
                </View>
                <View style={styles.systemDetails}>
                    <Text></Text>
                    <Text style={styles.systemDetailsText}> Personal Details</Text>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faVenusMars} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Gender</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{genderId}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faCakeCandles} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Birthday</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{formattedBirthdate}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Email</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{email}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faSquareShareNodes} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Facebook</Text>
                        <TouchableOpacity style={styles.idNumberLong}>
                            <Text style={styles.idNumberLongText}>{fblink}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faAddressBook} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Address 1</Text>
                        <TouchableOpacity style={styles.idNumberLong}>
                            <Text style={styles.idNumberLongText}>{address}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faAddressBook} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Address 2</Text>
                        <TouchableOpacity style={styles.idNumberLong}>
                            <Text style={styles.idNumberLongText}>{addresstwo}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faBuilding} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> City</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{city}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faLocationDot} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> State</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{state}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faMapLocationDot} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Country</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{country}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faRoad} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Zip Code</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{zipcode}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faAddressBook} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Special Skills2 </Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{specialskills}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faHouseChimneyUser} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> About Me</Text>
                        <TouchableOpacity style={styles.idNumberLong}>
                            <Text style={styles.idNumberLongText}>{aboutyourself}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faSquarePhone} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Phone Number</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{phone}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroup}>
                        <FontAwesomeIcon icon={faMobileRetro} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Mobile Number</Text>
                        <TouchableOpacity style={styles.idNumber}>
                            <Text style={styles.idNumberText}>{mobile}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.idNumberGroupEnd}>
                        <FontAwesomeIcon icon={faFolderOpen} size={25} color={'black'} style={styles.systemIcons} />
                        <Text style={styles.systemDescr}> Fire Certificates</Text>
                        <View style={{ flexDirection: "column", flex: 1 }}>
                            {fireCerts !== null &&
                                fireCerts.map((cert, key) => {
                                    return (
                                        <TouchableOpacity key={key}>
                                            <Text style={styles.certLongText}>
                                                {cert.course}{"\n"}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </>

        );
    }

    return (
        <View style={styles.profileContainer}>
            <ScrollView contentContainerStyle={styles.scrollProfileViewContainer} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {pageLoading ? (
                    // Display loading state
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Fetching data. Please wait.</Text>
                    </View>
                ) : (
                    userData !== null && <ProfileView />
                )}

            </ScrollView>
        </View>
    );
}

export default AgentProfile;
