// SalesDetailsPage.jsx
import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Button, Image } from 'react-native';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from '../config/AxiosInstance';

import { useFonts } from '../helpers/useFonts';
import salesDetailsStyles from '../styles/salesDetailsStyles'; // Import your common styles
import { ScrollView } from 'react-native-gesture-handler';

const statusBtns = {
    'Unclaimed': <Button title="Unclaimed" color="#dc3545" width="50" style={{ width: 50, height: 50, }}></Button>,
    'Partially Claimed': <Button title="Partially Claimed" color="#007bff" width="50" style={{ width: 50, height: 50, }}></Button>,
    'Full Claimed': <Button title="Full Claimed" color="#28a745" width="50" style={{ width: 50, height: 50, }}></Button>,
    'Fully Claimed': <Button title="Fully Claimed" color="#28a745" width="50" style={{ width: 50, height: 50, }}></Button>,
};

const validSale = {
    Yes: <Button title="Valid Sale" color="#007bff" width="50" style={{ width: 50, height: 50, }}></Button>,
    No: <Button title="Not Valid Sale" color="#dc3545" width="50" style={{ width: 50, height: 50, }}></Button>,
};

const propertyTypes = {
    1: <Text style={salesDetailsStyles.textContentSubtitle}>Condominiums</Text>,
    3: <Text style={salesDetailsStyles.textContentSubtitle}>Commercial</Text>,
    4: <Text style={salesDetailsStyles.textContentSubtitle}>Industrial</Text>,
    8: <Text style={salesDetailsStyles.textContentSubtitle}>Apartment</Text>,
    9: <Text style={salesDetailsStyles.textContentSubtitle}>Beach House</Text>,
    10: <Text style={salesDetailsStyles.textContentSubtitle}>House & Lot</Text>,
    11: <Text style={salesDetailsStyles.textContentSubtitle}>Townhouse</Text>,
    14: <Text style={salesDetailsStyles.textContentSubtitle}>Lot Only</Text>,
    15: <Text style={salesDetailsStyles.textContentSubtitle}>Farm Land</Text>,
    16: <Text style={salesDetailsStyles.textContentSubtitle}>Warehouse</Text>,
    17: <Text style={salesDetailsStyles.textContentSubtitle}>Colombary</Text>,
};

const SaleDetailsPage = ({ navigation, route }) => {
    const { saleId } = route.params; // Get saleId parameter from route
    const [salesDetails, setSalesDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State variable to track loading state
    const [propDetails, setPropDetails] = useState([]);

    // Assuming you have a function to fetch sale details based on saleId
    const fetchSaleDetails = async () => {
        try {
            // Fetch sale details from your API or local storage
            const url = `specific-sales/${saleId}`;

            try {
                const response = await AxiosInstance.get(url);
                setSalesDetails(response.data);

                if (response.data.prop_details) {
                    setPropDetails(JSON.parse(response.data.prop_details));
                }
                setIsLoading(false); // Set loading state to false once data is loaded
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        } catch (error) {
            console.error('Error fetching sale details:', error);
        }
    };

    React.useEffect(() => {
        useFonts();
        fetchSaleDetails();
    }, []);

    return (
        isLoading ? (
            <View style={[salesDetailsStyles.salesContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        ) : (
            <>
                <View style={salesDetailsStyles.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faCircleChevronLeft} size={25} color={'white'} />
                    </TouchableOpacity>
                    {salesDetails.clientfamilyname !== null || "" ?
                        <><Text style={salesDetailsStyles.headerTitleText}>{salesDetails.clientfamilyname}</Text></>
                        : <><Text style={salesDetailsStyles.headerTitleText}>Viewing Sales Details</Text></>}
                </View>
                <ScrollView style={salesDetailsStyles.salesContainer}>
                    <View style={salesDetailsStyles.contentStatus}>
                        {statusBtns[salesDetails.status]}
                        <Text> </Text>{validSale[salesDetails.validSale]}
                        <Text style={salesDetailsStyles.contentDateAdded}>{salesDetails.dateadded}</Text>
                    </View>
                    <View style={salesDetailsStyles.content}>
                        <Text style={salesDetailsStyles.textTitleHeading}>--- Client Details ---</Text>
                        {salesDetails.clientGender ? <>
                            <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Client Gender</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.clientGender}</Text>
                            </View>
                            {salesDetails.clientAge ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Client Age</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.clientAge}</Text>
                            </View> : <></>}
                            {salesDetails.clientAddress ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Client Address</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.clientAddress}, {salesDetails.clientCountry} </Text>
                            </View> : <></>}
                        </> : <></>}
                        {salesDetails.clientMobile ? <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Client Mobile</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.clientMobile}</Text>
                        </View> : <></>}
                        {salesDetails.clientEmail ? <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Client Email</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.clientEmail}</Text>
                        </View> : <></>}
                        <Text style={salesDetailsStyles.textTitleHeading}>--- Property Details ---</Text>
                        {salesDetails.developer !== "" || null ? <><View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Developer</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.developer}</Text>
                        </View></> : <></>}
                        {salesDetails.unitnum ? <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Unit No</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.unitnum}</Text>
                        </View> : <></>}
                        {salesDetails.projectname ? <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Project</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.projectname}</Text>
                        </View> : <></>}
                        {salesDetails.tcprice ? (
                            <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Total Contract Price</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.tcprice.toLocaleString()}</Text>
                            </View>
                        ) : null}
                        <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Property Type</Text>
                            {propertyTypes[salesDetails.prop_type_id]}
                        </View>
                        <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>QTY</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.qty}</Text>
                        </View>
                        <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Terms of Payment</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.termofpayment}</Text>
                        </View>
                        <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Reservation Date</Text>
                            <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.reservationdate}</Text>
                        </View>
                        {propDetails && propDetails !== null ? <>
                            {propDetails.floor_area ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Floor Area</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.floor_area}</Text>
                            </View> : null}
                            {propDetails.lot_area ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Lot Area</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.lot_area}</Text>
                            </View> : null}
                            {propDetails.unit_type ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Unit Type</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.unit_type}</Text>
                            </View> : null}
                            {propDetails.rental_rate ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Rental Rate</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.rental_rate}</Text>
                            </View> : null}
                            {propDetails.closing_agent ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Closing Agent</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.closing_agent}</Text>
                            </View> : null}
                            {propDetails.partner_agent ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Partner Agent</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.partner_agent}</Text>
                            </View> : null}
                            {propDetails.property_size ? <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Property Size</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{propDetails.property_size}</Text>
                            </View> : null}
                        </> : null}
                        {salesDetails.remarks ? (
                            <View style={salesDetailsStyles.textContent}>
                                <Text style={salesDetailsStyles.textContentTitle}>Remarks</Text>
                                <Text style={salesDetailsStyles.textContentSubtitle}>{salesDetails.remarks}</Text>
                            </View>
                        ) : null}
                        <View style={salesDetailsStyles.textContent}>
                            <Text style={salesDetailsStyles.textContentTitle}>Proof Of Transaction</Text>
                            <Image
                                source={{ uri: salesDetails.files.includes('https://filipinohomes123.s3.ap-southeast-1.amazonaws.com/') ? salesDetails.files : `https://leuteriorealty.com/${salesDetails.files}` }}
                                style={{ width: 325, height: 325, marginTop: 10 }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    );
};

export default SaleDetailsPage;
