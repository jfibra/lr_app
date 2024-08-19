// src/styles/viewSupportTickets.js
import { StyleSheet } from 'react-native';

const viewSupportTickets = StyleSheet.create({
    container: {
        height: 580,
    },
    headerTitle: {
        flexDirection: 'row', // Display children in a row
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        backgroundColor: '#dc3545',
        paddingVertical: 20,
        paddingLeft: 10,
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.9, // Shadow opacity
        shadowRadius: 30, // Shadow radius
    },
    headerArea: {
        marginLeft: 25,
        flexDirection: 'row', // Display children in a row
    },
    headerTitleText: {
        fontFamily: 'Afacad-Bold',
        fontSize: 20,
        paddingLeft: 10,
        color: 'white',
    },
    tableContainer: {
        marginTop: 100,
        height: 600,
    },
    tableHeaderSupport: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        zIndex: 99,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    tableHeaderTextSupport: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#001f3f'
    },
    tableRowSupport: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    tableCellSupport: {
        flex: 1,
        textAlign: 'center',
    },
    tableCellSupportBold: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    noTicketsText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
    },
});

export default viewSupportTickets;
