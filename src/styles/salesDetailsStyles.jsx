// src/styles/mySalesStyles.js
import { StyleSheet } from 'react-native';

const salesDetailsStyles = StyleSheet.create({
    salesContainer: {
        height: 580,
        marginTop: 75,
    },
    headerTitle: {
        flexDirection: 'row', // Display children in a row
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        backgroundColor: '#dc3545',
        paddingVertical: 20,
        paddingLeft: 10,
        marginTop: 40,
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.9, // Shadow opacity
        shadowRadius: 30, // Shadow radius
    },
    headerTitleText: {
        fontFamily: 'Afacad-Bold',
        fontSize: 20,
        paddingLeft: 10,
        color: 'white',
    },
    content: {
        padding: 10,
    },
    contentStatus: {
        flexDirection: 'row', // Display children in a row
        width: '100%',
        padding: 10,
        marginTop: 40,
    },
    contentDateAdded : {
        fontFamily: "TiltNeon-Regular",
        fontSize: 15,
        textAlign: 'right',
        marginTop: 10,
        marginRight: 10,
        position: 'absolute',
        right: 0,
    },
    textTitleHeading : {
        fontFamily: 'RethinkSans-SemiBold',
        fontSize: 20,
        color: '#3c8dbc',
        textAlign: 'center',
        marginVertical: 10
    },
    textContent: {
        borderBottomColor: "#3c8dbc",
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    textContentTitle: {
        fontFamily: "TiltNeon-Regular",
        fontSize: 15,
        color: "#7c7c7c",
    },
    textContentSubtitle: {
        fontFamily: "TiltWarp-Regular",
        fontSize: 18,
        color: "#7c7c7c",
    }
});

export default salesDetailsStyles;
