import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button, ActivityIndicator, RefreshControl } from 'react-native';
import AxiosInstance from '../config/AxiosInstance';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronLeft, faHeadset } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import viewSupportTickets from '../styles/viewSupportTickets'; // Import your common styles

const ViewSupportTicketsPage = ({ navigation }) => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const myData = useSelector((state) => state.AuthReducers.userData);
    const userData = myData ? myData : null;
    const { memberid } = userData[0].details;

    const fetchSupportTickets = async () => {
        try {
            // Send a GET request to fetch support tickets
            const response = await AxiosInstance.get(`/support-tickets/${memberid}`);

            // Update state with fetched tickets
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching support tickets:', error);
        } finally {
            // Set loading state to false regardless of success or failure
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fetch support tickets when component mounts
        fetchSupportTickets();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    };

    return (
        <View style={viewSupportTickets.container}>
            <View style={viewSupportTickets.headerTitle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} size={25} color={'white'} />
                </TouchableOpacity>
                <View style={viewSupportTickets.headerArea}>
                    <FontAwesomeIcon icon={faHeadset} size={25} color={'white'} />
                    <Text style={viewSupportTickets.headerTitleText}>Your Support Tickets</Text>
                </View>
            </View>
            <View style={viewSupportTickets.tableContainer}>
                <View style={viewSupportTickets.tableHeaderSupport}>
                    <Text style={viewSupportTickets.tableHeaderTextSupport}>Concern</Text>
                    <Text style={viewSupportTickets.tableHeaderTextSupport}>Status</Text>
                    <Text style={viewSupportTickets.tableHeaderTextSupport}>Date Created</Text>
                    <Text style={viewSupportTickets.tableHeaderTextSupport}>Action</Text>
                </View>
                <ScrollView>
                    {isLoading ? (
                        <View style={{ padding: 20, alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Fetching data. Please wait.</Text>
                        </View>
                    ) : (
                        tickets.length > 0 ?
                            <>
                                {tickets.map((ticket, index) => (
                                    <View key={index} style={viewSupportTickets.tableRowSupport}>
                                        <Text style={viewSupportTickets.tableCellSupportBold}>{ticket.concern}</Text>
                                        <Text style={viewSupportTickets.tableCellSupport}>{ticket.status}</Text>
                                        <Text style={viewSupportTickets.tableCellSupport}>{formatDate(ticket.created_at)}</Text>
                                        <Text style={viewSupportTickets.tableCellSupport}>
                                            <Button
                                                title="View"
                                                onPress={() => navigation.navigate('View Ticket Details', { ticket })}
                                            />
                                        </Text>
                                    </View>
                                ))}
                            </>
                            : <Text style={viewSupportTickets.noTicketsText}>No support tickets found</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};


export default ViewSupportTicketsPage;