// src/styles/salesEncodingStyles.js
import { StyleSheet } from 'react-native';

const basicInformationStyles = StyleSheet.create({
    container: {
        height: 620,
        width: '90%',
        marginLeft: '5%'
    },
    loginbackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    inputDeveloperContainer: {
        position: 'relative',
        margin: 20,
        width: 300,
        height: "auto",
        flex: 1,
        marginBottom: 100,
    },
    labelChosen: {
        fontFamily: "TiltWarp-Regular",
        fontSize: 25,
        color: "#7c7c7c",
    },
    label: {
        marginBottom: 5,
        color: '#333',
        marginTop: 10,
        fontFamily: 'RethinkSans-SemiBold',
    },
    labelInfo: {
        marginBottom: 5,
        color: '#001f3f',
        textAlign: 'justify',
        fontFamily: 'RethinkSans-Regular',
        fontSize: 15,
        width: 320
    },
    labelDescr: {
        marginBottom: 5,
        color: '#333',
        marginTop: 10,
        fontFamily: 'RethinkSans-SemiBold',
        fontSize: 13,
        textAlign: 'justify'
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#001f3f',
        width: 320,
        borderWidth: 2, // Remove the outline
        borderColor: '#001f3f',
    },
    selectGender: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#333',
        width: 320,
        borderWidth: 2, // Remove the outline
        borderColor: '#001f3f',
    },
    labelGender: {
        marginBottom: 5,
        color: 'black',
        fontFamily: 'RethinkSans-Regular',
        textAlign: 'left',
        fontSize: 15,
    },
    scrollImageViewContainer: {
        height: 'auto',
        margin: 0,
    },
    chooseFileButton: {
        flexDirection: 'row', // Align items in a row inside the button
        alignItems: 'center',
        width: 325,
    },
    chooseFileButtonText: {
        textAlign: 'left',
        height: '100%',
        width: '71%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 2,
        borderColor: '#001f3f',
    },
    BrowseButtonText: {
        position: 'absolute',
        right: 13,
        width: '25%',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: '#001f3f',
        backgroundColor: '#e9ecef',
    },
    chooseFileButtonSupport: {
        marginBottom: 10,
        flexDirection: 'row', // Align items in a row inside the button
        alignItems: 'center',
        width: 335,
    },
    chooseFileButtonTextSupport: {
        textAlign: 'left',
        height: '100%',
        width: '71%',
        padding: 10,
        color: '#333',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 2,
        borderColor: '#001f3f',
        backgroundColor: 'white',
    },
    BrowseButtonTextSupport: {
        position: 'absolute',
        right: 13,
        width: '25%',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        backgroundColor: 'white',
    },
    submitButton: {
        backgroundColor: '#007bff', // Add your desired background color
        padding: 10, // Add padding for better appearance
        borderRadius: 5, // Optional: Add border radius for rounded corners
        width: 320,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    submitLabel: {
        fontFamily: 'RethinkSans-SemiBold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    showsalesButton: {
        backgroundColor: '#dc3535', // Add your desired background color
        padding: 10, // Add padding for better appearance
        borderRadius: 5, // Optional: Add border radius for rounded corners
        width: 320,
        marginTop: 20
    },
    showsalesLabel: {
        fontFamily: 'RethinkSans-SemiBold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default basicInformationStyles;
