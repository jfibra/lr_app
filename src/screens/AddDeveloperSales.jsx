// src/screens/AddDeveloperSales.js
import React from 'react';
import { useState, useEffect } from 'react';

import { View, Text, ScrollView, Button, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts } from '../helpers/useFonts';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import AxiosInstance from '../config/AxiosInstance';
import salesEncodingStyles from '../styles/salesEncodingStyles'; // Import your common styles

const genderOptions = ['Male', 'Female'];

const countryOptions = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica",
    "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
    "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands",
    "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
    "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)",
    "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan",
    "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
    "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
    "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
    "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
    "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
    "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
];

const unitTypeOptions = [
    "Studio", "Parking", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "Penthouse", "Loft"
];

const numberOfUnitsOptions = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
];

const paymentTermsOptions = [
    "Cash", "1 Month", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months", "7 Months",
    "8 Months", "9 Months", "10 Months", "11 Months", "12 Months", "13 Months", "14 Months",
    "15 Months", "16 Months", "17 Months", "18 Months", "19 Months", "20 Months", "21 Months",
    "22 Months", "23 Months", "24 Months", "25 Months", "26 Months", "27 Months", "28 Months",
    "29 Months", "30 Months", "31 Months", "32 Months", "33 Months", "34 Months", "35 Months", "36 Months",
    "37 Months", "38 Months", "39 Months", "40 Months", "41 Months", "42 Months", "43 Months", "44 Months",
    "45 Months", "46 Months", "47 Months", "48 Months", "Others"
];

const commissionStatusOptions = [
    "Unclaimed", "Partially Claimed", "Full Claimed"
];

const propertyTypeSelection = {
    1: <Text style={salesEncodingStyles.labelChosen}>Condominiums</Text>,
    3: <Text style={salesEncodingStyles.labelChosen}>Commercial</Text>,
    4: <Text style={salesEncodingStyles.labelChosen}>Industrial</Text>,
    8: <Text style={salesEncodingStyles.labelChosen}>Apartment</Text>,
    9: <Text style={salesEncodingStyles.labelChosen}>Beach House</Text>,
    10: <Text style={salesEncodingStyles.labelChosen}>House & Lot</Text>,
    11: <Text style={salesEncodingStyles.labelChosen}>Townhouse</Text>,
    14: <Text style={salesEncodingStyles.labelChosen}>Lot Only</Text>,
    15: <Text style={salesEncodingStyles.labelChosen}>Farm Land</Text>,
    16: <Text style={salesEncodingStyles.labelChosen}>Warehouse</Text>,
    17: <Text style={salesEncodingStyles.labelChosen}>Colombary</Text>,
};

function AddDeveloperSales({ navigation, route }) {
    const hasParams = route?.params;
    const data = useSelector((state) => state.AuthReducers.userData);
    const userData = data ? data : null;
    const { memberid, completename } = userData[0].details;

    const [clientFirstname, setClientFirstname] = useState(null);
    const [clientMiddlename, setClientMiddlename] = useState(null);
    const [clientLastname, setClientLastname] = useState(null);
    const [clientEmail, setClientEmail] = useState(null);
    const [clientAge, setClientAge] = useState(null);
    const [clientAddress, setClientAddress] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [clientMobile, setclientMobile] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('Philippines');
    const [unitNoBlock, setunitNoBlock] = useState(null);
    const [developerList, setDeveloperList] = useState(null);
    const [developerName, setDeveloperName] = useState(null);
    const [selectedDeveloper, setSelectedDeveloper] = useState(null);
    const [projectsList, setProjectsList] = useState(null);
    const [projectName, setProjectName] = useState(null);
    const [selectedProjects, setSelectedProjects] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateString, setDateString] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedPaymentTerms, setSelectedPaymentTerms] = useState(null);
    const [selectedCommissionStatus, setSelectedCommissionStatus] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null);
    const [selectedNumberOfUnits, setSelectedNumberOfUnits] = useState(null);
    const [floorArea, setFloorArea] = useState(null);
    const [lotArea, setLotArea] = useState(null);
    const [totalContractPrice, setTotalContractPrice] = useState(null);
    const [remarksNotes, setRemarksNotes] = useState(null);
    const [imageAssets, setImageAssets] = useState([]);

    const handleDateChange = (event, date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (date) {
            const d = new Date(date);
            const dateStr = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

            setSelectedDate(date);
            setDateString(dateStr);
        }
    };

    const getDeveloperList = async () => {
        const url = `get-developer-list`;

        try {
            const response = await AxiosInstance.get(url);
            setDeveloperList(response.data);
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    }

    const storeSale = async (formData) => {
        try {
            const response = await AxiosInstance.post('/store-sale/developer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important to set the content type
                },
            });
            // If the upload is successful, navigate to the 'My Sales' page
            if (response.status === 200) {
                alert(response.data.message);
                // Navigate to 'My Sales' page
                navigation.navigate('My Sales'); // Assuming you're using React Router and have access to history
            } else {
                // If the upload is not successful, show an alert with the error message
                alert(response.data.message);
            }
        } catch (error) {
            alert('Error storing sales:', error);
            // Log the actual error response for debugging
            alert('Error response:', error.response);
            // Handle error if needed
        }
    }

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleSubmit = async () => {
        // Array to store the names of empty required fields
        const emptyFields = [];

        // Check each required field for emptiness
        if (!clientFirstname) emptyFields.push("Client Firstname");
        if (!clientMiddlename) emptyFields.push("Client Middlename");
        if (!clientLastname) emptyFields.push("Client Lastname");
        if (!clientEmail) emptyFields.push("Client Email");
        if (!clientAge) emptyFields.push("Client Age");
        if (!clientAddress) emptyFields.push("Client Address");
        if (!selectedGender) emptyFields.push("Client Gender");
        if (!clientMobile) emptyFields.push("Client Mobile");
        if (!selectedCountry) emptyFields.push("Client's Country");
        if (!unitNoBlock) emptyFields.push("Unit No. / Block and Lot No.");
        if (!selectedDeveloper) emptyFields.push("Developer");
        if (!selectedProjects) emptyFields.push("Project");
        if (!propertyType) emptyFields.push("Property Type");
        if (!selectedDate) emptyFields.push("Reservation Date");
        if (!selectedPaymentTerms) emptyFields.push("Payment Terms");
        if (!selectedCommissionStatus) emptyFields.push("Commission Status");
        if (!selectedNumberOfUnits) emptyFields.push("Number of Units");
        if (!totalContractPrice) emptyFields.push("Total Contract Price");
        if (!imageAssets.length) emptyFields.push("Proof of Transaction (POT)");

        // Check if totalContractPrice is not a valid number with commas and spaces
        if (totalContractPrice && !/^\d{1,3}(?:[,.]?\d{3})*(?:\s\d{1,3})*(?:\.\d+)?$/.test(totalContractPrice.replace(/[\s,.]/g, ''))) {
            emptyFields.push("Total Contract Price (Please enter a valid price currency format)");
        }

        // If any required field is empty or clientAge/clientMobile/totalContractPrice is invalid, show alert message
        if (emptyFields.length > 0) {
            // Construct alert message
            let alertMessage = "The following fields are required or have invalid input:\n";
            emptyFields.forEach(field => {
                alertMessage += `- ${field}\n`;
            });

            // Display alert message
            alert(alertMessage);
            return;
        }

        // If all required fields are filled and valid, construct form data object
        const formData = new FormData();
        formData.append(`agentid`, memberid);
        formData.append(`completename`, completename);
        formData.append(`clientfirstname`, clientFirstname);
        formData.append(`clientmiddlename`, clientMiddlename);
        formData.append(`clientlastname`, clientLastname);
        formData.append(`clientemail`, clientEmail);
        formData.append(`clientage`, clientAge);
        formData.append(`clientaddress`, clientAddress);
        formData.append(`clientgender`, selectedGender.toLowerCase());
        formData.append(`clientmobile`, clientMobile);
        formData.append(`clientcountry`, selectedCountry);
        formData.append(`unitnoblock`, unitNoBlock);
        formData.append(`developer`, developerName);
        formData.append(`devid`, selectedDeveloper);
        formData.append(`projectname`, projectName);
        formData.append(`projid`, selectedProjects);
        formData.append(`prop_type_id`, propertyType);
        formData.append(`reservationdate`, dateString);
        formData.append(`termofpayment`, selectedPaymentTerms);
        formData.append(`status`, selectedCommissionStatus);
        formData.append(`qty`, selectedNumberOfUnits);
        formData.append('remarks', remarksNotes);
        formData.append('prop_details', null);
        // Remove commas and spaces from totalContractPrice
        const formattedTotalContractPrice = totalContractPrice.replace(/[,\s]/g, '');

        // Append formatted totalContractPrice to formData
        formData.append('tcprice', formattedTotalContractPrice);
        if (propertyType === 1) {
            if (floorArea !== null && selectedUnitType !== null) {
                // Create an object with floorArea and lotArea properties
                const propDetails = {
                    unit_type: selectedUnitType,
                    floor_area: floorArea,
                };

                // Convert the object to a JSON-formatted string
                const propDetailsString = JSON.stringify(propDetails);

                // Append propDetailsString to formData
                formData.append('prop_details', propDetailsString);
            }
            else {
                alert("Check Unit Type or Floor Area (Please dont leave blank)");
                return;
            }
        }

        if (propertyType === 10 || propertyType === 11) {
            if (floorArea !== null && lotArea !== null && floorArea !== '' && lotArea !== '') {
                // Create an object with floorArea and lotArea properties
                const propDetails = {
                    floor_area: floorArea,
                    lot_area: lotArea
                };

                // Convert the object to a JSON-formatted string
                const propDetailsString = JSON.stringify(propDetails);

                // Append propDetailsString to formData
                formData.append('prop_details', propDetailsString);
            }
            else {
                alert("Floor Area and Lot Area (Please dont leave blank)");
                return;
            }
        }

        formData.append(`imageAssets`, {
            uri: imageAssets[0].uri,
            type: 'image/jpeg',
            name: imageAssets[0].filename,
        });
        // Call storeSale function with formData and onUploadProgress callback
        await storeSale(formData);
    };

    useEffect(() => {
        useFonts();
        getDeveloperList();

        if (hasParams) {
            const assets = route.params.assetsPOT;
            setImageAssets(assets);
        }
    }, [hasParams]);

    const handleDeveloperSelection = async (developerId) => {
        setProjectsList(null);
        setProjectName(null);
        setSelectedProjects(null);
        setPropertyType(null);
        // Your logic for handling the selected developer's ID
        const url = `get-developer-projects-list/${developerId}`;

        try {
            const response = await AxiosInstance.get(url);
            setProjectsList(response.data);
        } catch (error) {
            console.error('Error fetching sales:', error);
        }
    };

    return (
        <ImageBackground source={require('../../assets/images/dashboardBackground.png')} style={salesEncodingStyles.loginbackgroundImage}>
            <View style={salesEncodingStyles.container}>
                <ScrollView>
                    <View style={salesEncodingStyles.inputDeveloperContainer}>
                        <Text style={salesEncodingStyles.labelInfo}>(Submit a complete client name; otherwise, processing of commission will be on hold due to inaccuracy of data.)</Text>

                        {/* Client Firstname */}
                        <Text style={salesEncodingStyles.label}>Client Firstname</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientFirstname}
                            onChangeText={(text) => setClientFirstname(text)}
                        />

                        {/* Client Middlename */}
                        <Text style={salesEncodingStyles.label}>Client Middlename</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientMiddlename}
                            onChangeText={(text) => setClientMiddlename(text)}
                        />

                        {/* Client Lastname */}
                        <Text style={salesEncodingStyles.label}>Client Lastname</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientLastname}
                            onChangeText={(text) => setClientLastname(text)}
                        />

                        {/* Client Email */}
                        <Text style={salesEncodingStyles.label}>Client Email</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientEmail}
                            onChangeText={(text) => setClientEmail(text)}
                        />

                        {/* Client Age */}
                        <Text style={salesEncodingStyles.label}>Client Age</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientAge}
                            onChangeText={(text) => setClientAge(text)}
                            keyboardType="numeric" // Set keyboardType prop to 'numeric'
                        />

                        {/* Client Address */}
                        <Text style={salesEncodingStyles.label}>Client Address</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientAddress}
                            onChangeText={(text) => setClientAddress(text)}
                        />

                        {/* Gender Selection */}
                        <Text style={salesEncodingStyles.label}>Client Gender</Text>
                        <View style={salesEncodingStyles.selectGenderContainer}>
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
                                buttonStyle={salesEncodingStyles.selectGender}
                                buttonTextStyle={salesEncodingStyles.labelGender}
                                rowTextStyle={{ textAlign: "left" }}
                                dropdownStyle={{ borderRadius: 5 }}
                            />
                        </View>

                        {/* Client Mobile */}
                        <Text style={salesEncodingStyles.label}>Client Mobile</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={clientMobile}
                            onChangeText={(text) => setclientMobile(text)}
                            keyboardType="numeric" // Set keyboardType prop to 'numeric'
                        />

                        {/* Select Country */}
                        <Text style={salesEncodingStyles.label}>Select Client's Country</Text>
                        <SelectDropdown
                            data={countryOptions}
                            defaultButtonText="Philippines"
                            onSelect={(selectedCountry, index) => {
                                setSelectedCountry(selectedCountry);
                            }}
                            buttonTextAfterSelection={(selectedCountry, index) => {
                                return selectedCountry;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            search
                            searchInputStyle={{
                                backgroundColor: "#EFEFEF",
                                borderRadius: 8,
                                borderBottomWidth: 1,
                                borderBottomColor: "#444",
                            }}
                            searchPlaceHolder={"Search here"}
                            searchPlaceHolderColor={"darkgrey"}
                            buttonStyle={salesEncodingStyles.selectGender}
                            buttonTextStyle={salesEncodingStyles.labelGender}
                            rowTextStyle={{ textAlign: "left" }}
                            dropdownStyle={{ borderRadius: 5 }}
                        />

                        {/* Client Mobile */}
                        <Text style={salesEncodingStyles.label}>Unit No. / Block and Lot No.</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={unitNoBlock}
                            onChangeText={(text) => setunitNoBlock(text)}
                        />

                        {developerList !== '[]' ? (
                            <>
                                <Text style={salesEncodingStyles.label}>Select Developer</Text>
                                <SelectDropdown
                                    data={developerList}
                                    onSelect={(selectedItem, index) => {
                                        setSelectedDeveloper(selectedItem.id);
                                        setDeveloperName(selectedItem.name);
                                        handleDeveloperSelection(selectedItem.id); // Trigger function when developer is selected
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem.name;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item.name;
                                    }}
                                    search
                                    searchInputStyle={{
                                        backgroundColor: "#EFEFEF",
                                        borderRadius: 8,
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#444",
                                    }}
                                    searchPlaceHolder={"Search here"}
                                    searchPlaceHolderColor={"darkgrey"}
                                    buttonStyle={salesEncodingStyles.selectGender}
                                    buttonTextStyle={salesEncodingStyles.labelGender}
                                    rowTextStyle={{ textAlign: "left" }}
                                    dropdownStyle={{ borderRadius: 5 }}
                                />
                            </>
                        ) : null}

                        {projectsList !== null ? <>
                            <Text style={salesEncodingStyles.label}>Select Project</Text>
                            <SelectDropdown
                                data={projectsList}
                                onSelect={(selectedProjects, index) => {
                                    setSelectedProjects(selectedProjects.id);
                                    setProjectName(selectedProjects.name);
                                    setPropertyType(null);
                                    setSelectedUnitType(null);
                                    setFloorArea(null);
                                    setLotArea(null);
                                    setPropertyType(selectedProjects.prop_type_id);
                                }}
                                buttonTextAfterSelection={(selectedProjects, index) => {
                                    return selectedProjects.name;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item.name;
                                }}
                                search
                                searchInputStyle={{
                                    backgroundColor: "#EFEFEF",
                                    borderRadius: 8,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#444",
                                }}
                                searchPlaceHolder={"Search here"}
                                searchPlaceHolderColor={"darkgrey"}
                                buttonStyle={salesEncodingStyles.selectGender}
                                buttonTextStyle={salesEncodingStyles.labelGender}
                                rowTextStyle={{ textAlign: "left" }}
                                dropdownStyle={{ borderRadius: 5 }}
                            /></> : null}

                        {propertyType ? <>
                            <Text style={salesEncodingStyles.label}>Property Type</Text>
                            {propertyTypeSelection[propertyType]}
                        </> : null}

                        {propertyType && propertyType === 1 ? <>
                            <Text style={salesEncodingStyles.label}>Unit Type</Text>
                            <SelectDropdown
                                data={unitTypeOptions}
                                onSelect={(selectedUnitType, index) => {
                                    setSelectedUnitType(selectedUnitType);
                                }}
                                buttonTextAfterSelection={(selectedUnitType, index) => {
                                    return selectedUnitType;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                                defaultButtonText="Select Unit Type"
                                buttonStyle={salesEncodingStyles.selectGender}
                                buttonTextStyle={salesEncodingStyles.labelGender}
                                rowTextStyle={{ textAlign: "left" }}
                                dropdownStyle={{ borderRadius: 5 }}
                            />
                        </> : null}

                        {propertyType && propertyType === 1 || propertyType === 10 || propertyType === 11 ? <>
                            <Text style={salesEncodingStyles.label}>Floor Area(sqm)</Text>
                            <TextInput
                                style={salesEncodingStyles.input}
                                value={floorArea}
                                placeholder="Kindly input numbers only, please."
                                onChangeText={(text) => setFloorArea(text)}
                                keyboardType="numeric" // Set keyboardType prop to 'numeric'
                            />
                        </> : null}

                        {propertyType && propertyType === 10 || propertyType === 11 ? <>
                            <Text style={salesEncodingStyles.label}>Lot Area(sqm)</Text>
                            <TextInput
                                style={salesEncodingStyles.input}
                                value={lotArea}
                                placeholder="Kindly input numbers only, please."
                                onChangeText={(text) => setLotArea(text)}
                                keyboardType="numeric" // Set keyboardType prop to 'numeric'
                            />
                        </> : null}

                        {/* Select Country */}
                        <Text style={salesEncodingStyles.label}>Number of Units</Text>
                        <SelectDropdown
                            data={numberOfUnitsOptions}
                            defaultButtonText="Select Number of Units"
                            onSelect={(selectedNumberOfUnits, index) => {
                                setSelectedNumberOfUnits(selectedNumberOfUnits);
                            }}
                            buttonTextAfterSelection={(selectedNumberOfUnits, index) => {
                                return selectedNumberOfUnits;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            search
                            searchInputStyle={{
                                backgroundColor: "#EFEFEF",
                                borderRadius: 8,
                                borderBottomWidth: 1,
                                borderBottomColor: "#444",
                            }}
                            searchPlaceHolder={"Search here"}
                            searchPlaceHolderColor={"darkgrey"}
                            buttonStyle={salesEncodingStyles.selectGender}
                            buttonTextStyle={salesEncodingStyles.labelGender}
                            rowTextStyle={{ textAlign: "left" }}
                            dropdownStyle={{ borderRadius: 5 }}
                        />

                        {/* Client Mobile */}
                        <Text style={salesEncodingStyles.label}>Total Contract Price</Text>
                        <TextInput
                            style={salesEncodingStyles.input}
                            value={totalContractPrice}
                            onChangeText={(text) => setTotalContractPrice(text)}
                            keyboardType="numeric" // Set keyboardType prop to 'numeric'
                        />

                        {/* Other form fields */}
                        <Text style={salesEncodingStyles.label}>Reservation Date</Text>
                        <Button title="Select Reservation Date" onPress={showDatepicker} />

                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                        <Text style={salesEncodingStyles.label}>Your selected reservation date is : {dateString}</Text>

                        {/* Select Country */}
                        <Text style={salesEncodingStyles.label}>Payment Terms</Text>
                        <SelectDropdown
                            data={paymentTermsOptions}
                            defaultButtonText="Select Term of Payment"
                            onSelect={(selectedPaymentTerms, index) => {
                                setSelectedPaymentTerms(selectedPaymentTerms);
                            }}
                            buttonTextAfterSelection={(selectedPaymentTerms, index) => {
                                return selectedPaymentTerms;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            search
                            searchInputStyle={{
                                backgroundColor: "#EFEFEF",
                                borderRadius: 8,
                                borderBottomWidth: 1,
                                borderBottomColor: "#444",
                            }}
                            searchPlaceHolder={"Search here"}
                            searchPlaceHolderColor={"darkgrey"}
                            buttonStyle={salesEncodingStyles.selectGender}
                            buttonTextStyle={salesEncodingStyles.labelGender}
                            rowTextStyle={{ textAlign: "left" }}
                            dropdownStyle={{ borderRadius: 5 }}
                        />
                        <Text style={salesEncodingStyles.label}>(Explain below if "Others" is selected)</Text>

                        <Text style={salesEncodingStyles.label}>Remarks Notes</Text>
                        <TextInput
                            multiline={true}
                            style={{ backgroundColor: 'white', width: '107%', height: 100, padding: 10, borderWidth: 2, borderColor: '#001f3f', }}
                            value={remarksNotes}
                            onChangeText={(text) => setRemarksNotes(text)}
                        />

                        {/* Select Country */}
                        <Text style={salesEncodingStyles.label}>Payment Terms</Text>
                        <SelectDropdown
                            data={commissionStatusOptions}
                            defaultButtonText="Select Commission Status"
                            onSelect={(selectedCommissionStatus, index) => {
                                setSelectedCommissionStatus(selectedCommissionStatus);
                            }}
                            buttonTextAfterSelection={(selectedCommissionStatus, index) => {
                                return selectedCommissionStatus;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={salesEncodingStyles.selectGender}
                            buttonTextStyle={salesEncodingStyles.labelGender}
                            rowTextStyle={{ textAlign: "left" }}
                            dropdownStyle={{ borderRadius: 5 }}
                        />
                        <Text style={salesEncodingStyles.labelDescr}>Proof of transaction (such as a photo capture of transaction document):
                            Valid POT include readable & duly signed copy of Term sheet, Reservation Agreement,
                            Acknowledgement/Official Receipt, Brokerage or Rental remittance slip.</Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={salesEncodingStyles.scrollImageViewContainer}>
                            {/* Display Image Previews */}
                            {imageAssets.map((asset, index) => (
                                <View key={index} style={{ margin: 10, }}>
                                    <Image source={{ uri: asset.uri }} style={{ width: 200, height: 200 }} />
                                    <Text>{asset.filename}</Text>
                                </View>
                            ))}
                        </ScrollView>

                        {/* Choose File Button */}
                        <TouchableOpacity onPress={() => navigation.navigate('Image Picker Component')} style={salesEncodingStyles.chooseFileButton}>
                            <Text style={salesEncodingStyles.chooseFileButtonText}>Choose File</Text>
                            <Text style={salesEncodingStyles.BrowseButtonText}>Browse</Text>
                        </TouchableOpacity>

                        {/* Submit button */}
                        <TouchableOpacity onPress={handleSubmit} style={salesEncodingStyles.submitButton}>
                            <Text style={salesEncodingStyles.submitLabel}>Submit Sale</Text>
                        </TouchableOpacity>

                        {/* Submit button */}
                        <TouchableOpacity onPress={() => navigation.navigate('My Sales')} style={salesEncodingStyles.showsalesButton}>
                            <Text style={salesEncodingStyles.showsalesLabel}>Show Sales</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView >
            </View >
        </ImageBackground >
    );
}

export default AddDeveloperSales;
