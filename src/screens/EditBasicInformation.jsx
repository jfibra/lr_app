import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Button, Image, ScrollView, Alert } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import AxiosInstance from '../config/AxiosInstance';
import { useFonts } from '../helpers/useFonts';

import basicInformationStyles from '../styles/basicInformationStyles'; // Import your common styles
import headerStyles from '../styles/headerStyles';
import { UpdateUser } from '../store/authActions';
import { useDispatch } from 'react-redux';

const genderOptions = ['Male', 'Female'];

const EditBasicInformation = ({ navigation }) => {
    const myData = useSelector((state) => state.AuthReducers.userData);

    const userData = myData ? myData[0] : null;
    const dispatch = useDispatch();

    const getGender = (gender) => {
        const gen = [
            {
                id: 0,
                label: "Male"
            },
            {
                id: 1,
                label: "Female"
            },
        ]

        const gend = gen.find((obj) => obj.id === gender);

        return gend.label;
    }

    // Function to parse the date string in the format MM/DD/YYYY and return a Date object
    const parseDateFromString = (dateString) => {
        const parts = dateString.split('/');
        const day = parseInt(parts[1], 10);
        const month = parseInt(parts[0], 10) - 1; // Months are 0-based in JavaScript Date object
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    };

    const { memberid, fn, mn, ln, phone, mobile, gender } = userData.details;
    const { birthday } = userData;
    const genderId = getGender(gender);

    const [firstname, setFirstName] = useState(fn);
    const [middlename, setMiddlename] = useState(mn);
    const [lastname, setLastName] = useState(ln);
    const [selectedGender, setSelectedGender] = useState(genderId);
    const [birthdate, setBirthDate] = useState(parseDateFromString(birthday));
    const [dateString, setDateString] = useState(birthday);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(mobile);
    const [phoneNumber, setPhoneNumber] = useState(phone);

    const handleDateChange = (event, date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (date) {
            const d = new Date(date);
            const dateStr = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

            setBirthDate(date);
            setDateString(dateStr);
        }
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const storeSale = async (formData) => {

        const response = await AxiosInstance.post(`/update-member-information/${memberid}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important to set the content type
            },
        });
        // If the upload is successful, navigate to the 'My Sales' page
        if (response.status === 200) {
            const userData = response.data;
            dispatch(UpdateUser(userData));

            // alert(response.data.message);
            // Navigate to 'My Sales' page
            navigation.navigate('Me'); // Assuming you're using React Router and have access to history
        } else {
            // If the upload is not successful, show an alert with the error message
            // alert(response.data.message);
        }
    }

    const handleSubmit = async () => {
        // Create a string to store the changes
        let changes = '';

        // Compare and store changes for each field
        if (firstname !== fn) {
            changes += `First Name: From '${fn}' to '${firstname}'\n`;
        }
        if (middlename !== mn) {
            changes += `Middle Name: From '${mn}' to '${middlename}'\n`;
        }
        if (lastname !== ln) {
            changes += `Last Name: From '${ln}' to '${lastname}'\n`;
        }
        if (selectedGender !== genderId) {
            changes += `Gender: From '${genderId}' to '${selectedGender}'\n`;
        }
        if (dateString !== birthday) {
            changes += `Birthdate: From '${birthday}' to '${dateString}'\n`;
        }
        if (mobileNumber !== mobile) {
            changes += `Mobile Number: From '${mobile}' to '${mobileNumber}'\n`;
        }
        if (phoneNumber !== phone) {
            changes += `Phone Number: From '${phone}' to '${phoneNumber}'\n`;
        }

        // Check if any changes were made
        if (changes) {
            // Alert the user with the changes and confirm submission
            Alert.alert(
                'Confirm Changes',
                `You are making the following changes:\n${changes}\nProceed with update?`,
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => console.log('Changes discarded'),
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            const formData = new FormData();
                            formData.append(`fn`, firstname);
                            formData.append(`mn`, middlename);
                            formData.append(`ln`, lastname);
                            formData.append(`gender`, selectedGender);
                            formData.append(`birthday`, dateString);
                            formData.append(`mobile`, mobileNumber);
                            formData.append(`phone`, phoneNumber);
                            formData.append(`memberid`, memberid);
                            
                            alert('Updating Information');
                            // Proceed with sending data to AJAX function
                            storeSale(formData);
                        },
                    },
                ]
            );
        } else {
            alert('No changes made');
        }
    }

    useEffect(() => {
        useFonts();
    }, []);

    return (
        <ImageBackground source={require('../../assets/images/dashboardBackground.png')} style={basicInformationStyles.loginbackgroundImage}>
            <View style={headerStyles.myNavigationContainer}>
                <Image source={require('../../assets/images/logoMain.png')} style={headerStyles.myNavigationLogo}></Image>
            </View>
            <View style={basicInformationStyles.container}>
                <ScrollView>
                    <Text style={basicInformationStyles.label}>First Name</Text>
                    <TextInput
                        style={basicInformationStyles.input}
                        value={firstname}
                        onChangeText={(text) => setFirstName(text)}
                    />

                    <Text style={basicInformationStyles.label}>Middle Name</Text>
                    <TextInput
                        style={basicInformationStyles.input}
                        value={middlename}
                        onChangeText={(text) => setMiddlename(text)}
                    />

                    <Text style={basicInformationStyles.label}>Last Name</Text>
                    <TextInput
                        style={basicInformationStyles.input}
                        value={lastname}
                        onChangeText={(text) => setLastName(text)}
                    />

                    <Text style={basicInformationStyles.label}>Gender</Text>
                    <View style={basicInformationStyles.selectGenderContainer}>
                        <SelectDropdown
                            data={genderOptions}
                            onSelect={(selectedGender, index) => {
                                setSelectedGender(selectedGender);
                            }}
                            buttonTextAfterSelection={(selectedGender, index) => {
                                return selectedGender;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={basicInformationStyles.selectGender}
                            buttonTextStyle={basicInformationStyles.labelGender}
                            rowTextStyle={{ textAlign: "left" }}
                            dropdownStyle={{ borderRadius: 5 }}
                        />
                    </View>

                    <Text style={basicInformationStyles.label}>Birth Date</Text>
                    <Button title="Select BirthDate" onPress={showDatepicker} />

                    {showDatePicker && (
                        <DateTimePicker
                            value={birthdate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                    <Text style={basicInformationStyles.label}>Your selected birthdate date is : {dateString}</Text>

                    <Text style={basicInformationStyles.label}>Mobile Number</Text>
                    <TextInput
                        style={basicInformationStyles.input}
                        value={mobileNumber}
                        onChangeText={(text) => setMobileNumber(text)}
                        keyboardType="numeric"
                    />

                    <Text style={basicInformationStyles.label}>Phone Number</Text>
                    <TextInput
                        style={basicInformationStyles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType="numeric"
                    />

                    <TouchableOpacity onPress={handleSubmit} style={basicInformationStyles.submitButton}>
                        <Text style={basicInformationStyles.submitLabel}>Update Information</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default EditBasicInformation;