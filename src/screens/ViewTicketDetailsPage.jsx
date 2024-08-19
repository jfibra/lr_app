import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRotateLeft, faComments } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/commonStyles'; // Import your common styles

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
};

const statusBtns = {
    Unresolved: <Button title="Unresolved" color="#dc3545" width="50" style={{ width: 50, height: 50, }}></Button>,
    InProgress: <Button title="InProgress" color="#007bff" width="50" style={{ width: 50, height: 50, }}></Button>,
    Resolved: <Button title="Resolved" color="#28a745" width="50" style={{ width: 50, height: 50, }}></Button>,
};

const ViewTicketDetailsPage = ({ route, navigation }) => {
    const { ticket } = route.params;

    return (
        <View style={styles.containerTicket}>
            <View style={styles.navyBox}>
                <Text style={styles.navyBoxTitle}>Ticket Details</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 20, fontWeight: "bold" }}>Your Concern:</Text>
                    <Text style={{ width: "60%", fontSize: 16, marginBottom: 10, textAlign: "center", }}>{ticket.concern}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 20, fontWeight: "bold" }}>Status:</Text>
                    <View style={{ width: "65%", marginLeft: 20 }}>{statusBtns[ticket.status]}</View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 20, fontWeight: "bold" }}>Date Created:</Text>
                    <Text style={{ width: "60%", fontSize: 16, marginBottom: 10, textAlign: "center", }}>{formatDate(ticket.created_at)}</Text>
                </View>
                <View style={{ height: 200, marginLeft: 20, marginRight: 20, }}>
                    <Image
                        source={{ uri: ticket.image }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            </View>
            {ticket.responses.length > 2 ? <TouchableOpacity onPress={() => navigation.navigate('View Chat Support Ticket', { ticket })} style={styles.navigationButtonResponses}>
                <FontAwesomeIcon icon={faComments} size={25} style={styles.navIconResponses} />
                <Text style={styles.navLabelResponses}>View Responses</Text>
            </TouchableOpacity> : <></>}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navigationButtonTicket}>
                <FontAwesomeIcon icon={faRotateLeft} size={25} style={styles.navIconTicket} />
                <Text style={styles.navLabelTicket}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ViewTicketDetailsPage;
