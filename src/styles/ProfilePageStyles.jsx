// src/styles/ProfilePageStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const ProfilePageStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 720,
        marginTop: 35
    },
    coverPhoto: {
        width: '100%',
        height: 125,
        marginBottom: 80,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#001f3f',
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 50,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: 'white',
    },
    fullName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    role: {
        fontFamily: 'TiltNeon-Regular',
        fontSize: 20,
        textAlign: 'center'
    },
    labelSection: {
        backgroundColor: '#e5e5e5',
        marginVertical: 10,
        padding: 10,
        width: '100%',
    },
    labelSectionTxt: {
        fontFamily: 'TiltWarp-Regular',
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row', // Display children in a row
        justifyContent: 'space-between', // Align items with space between
        backgroundColor: 'white',
        padding: 15,
        margin: '2.5%',
        marginBottom: 5,
        width: '95%',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 13,
        color: '#001f3f',
    },
});

export default ProfilePageStyles;
