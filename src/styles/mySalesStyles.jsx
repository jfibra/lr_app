// src/styles/mySalesStyles.js
import { StyleSheet } from 'react-native';

const mySalesStyles = StyleSheet.create({
    salesContainer: {
        height: 570,
    },
    boxWidth: {
        flexDirection: 'row', // Align items in a column inside each button
        alignItems: 'center',
        marginTop: 5,
    },
    salesSummary: {
        marginBottom: 16,
        width: 360,
    },
    salesValidBox: {
        right: 0,
        top: 0,
        position: 'absolute',
    },
    totalSales: {
        backgroundColor: '#122f4d',
        marginLeft: 10,
        width: 160,
        height: 100,
        borderRadius: 15, // Add border radius
        borderColor: "#e4e7eb",
        borderColor: "#e4e7eb",
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 20 },
        shadowOpacity: 0.50,
        shadowRadius: 5.84,
        elevation: 5,
    },
    totalValidated: {
        backgroundColor: '#218838',
        right: 10,
        position: 'absolute', // Change position to 'absolute' for correct shadow rendering
        width: 160,
        height: 100,
        borderRadius: 15, // Add border radius
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.9, // Shadow opacity
        shadowRadius: 30, // Shadow radius
        borderWidth: 3,
        borderColor: '#218838',
    },
    totalInvalid: {
        backgroundColor: '#c82333',
        marginLeft: 10,
        width: 160,
        height: 100,
        borderRadius: 15, // Add border radius
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.9, // Shadow opacity
        shadowRadius: 30, // Shadow radius
        borderWidth: 3,
        borderColor: '#c82333',
    },
    totalNotValidated: {
        backgroundColor: '#e0a800',
        right: 10,
        position: 'fixed',
        width: 160,
        height: 100,
        borderRadius: 15, // Add border radius
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.9, // Shadow opacity
        shadowRadius: 30, // Shadow radius
        borderWidth: 3,
        borderColor: '#e0a800',
    },
    totalSalesNo: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 25,
        paddingLeft: 10,
        paddingTop: 10,
        color: 'white',
    },
    totalSalesSub: {
        fontFamily: 'ProtestStrike-Regular',
        fontSize: 12,
        paddingLeft: 10,
        color: 'white',
    },
    tableContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    tableBoxWidthHeader: {
        flexDirection: 'row', // Align items in a column inside each button
        alignItems: 'center',
        textAlign: 'center',
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    tableBoxWidth: {
        width: "100%",
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#f8faf8',
    },
    tableHeader: {
        fontFamily: 'Afacad-Bold',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        width: "50%",
        height: 35,
        paddingTop: 8,
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
        borderColor: '#dee2e6'
    },
    tableHeaderLeft: {
        fontFamily: 'Afacad-Bold',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        width: "30%",
        height: 35,
        paddingTop: 8,
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderTopLeftRadius: 20,
    },
    tableHeaderRight: {
        fontFamily: 'Afacad-Bold',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        width: "20%",
        height: 35,
        paddingTop: 8,
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderTopRightRadius: 20,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell1: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '30%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderBottomWidth: 1,
    },
    tableCell2: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '50%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderBottomWidth: 1,
    },
    tableCell3: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '20%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderBottomWidth: 1,
    },
    tableCellDanger1: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '30%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#e67b85',
        borderBottomWidth: 1,
    },
    tableCellDanger2: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '50%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#e67b85',
        borderBottomWidth: 1,
    },
    tableCellDanger3: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '20%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#e67b85',
        borderBottomWidth: 1,
    },
    tableCellWarning1: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '30%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#fdd55d',
        borderBottomWidth: 1,
    },
    tableCellWarning2: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '50%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        textAlign: 'left', // Center the text if needed
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#fdd55d',
        borderBottomWidth: 1,
    },
    tableCellWarning3: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 12,
        width: '20%', // Set the width to 100% of the container
        flexWrap: 'wrap', // Enable text wrapping
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
        backgroundColor: '#fdd55d',
        borderBottomWidth: 1,
    },
    tableButtonView: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 10,
        padding: 8,
        backgroundColor: '#28a745',
        color: 'white'
    },
    prevBtn: {
        width: 115,
        height: 35,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        position: 'absolute',
        bottom: 10,
        borderWidth: 1,
        borderColor: "#e4e7eb",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    prevBtnLabel: {
        fontFamily: 'Afacad-Regular',
        fontSize: 15,
        color: '#0358b4'
    },
    nextBtn: {
        width: 115,
        height: 35,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        position: 'absolute',
        right: 0,
        bottom: 10,
        borderWidth: 1,
        borderColor: "#e4e7eb",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    nextBtnLabel: {
        fontFamily: 'Afacad-Regular',
        fontSize: 15,
        color: '#0358b4'
    },
    searchInput: {
        width: '90%',
        height: 30,
        marginLeft: '5%',
        marginRight: '5%',
        borderColor: 'gray',
        borderColor: "#e4e7eb",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
});

export default mySalesStyles;
