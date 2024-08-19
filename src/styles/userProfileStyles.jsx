// src/styles/mySalesStyles.js
import { StyleSheet } from 'react-native';

const userProfileStyles = StyleSheet.create({
    userContainer: {
        height: 600,
    },
    container: {
        height: 580,
        alignItems: 'center',
    },
    headerContainer: {
        height: 320,
        width: '100%',
        backgroundColor: 'white'
    },
    avatarContainer: {
        width: 50,
        height: 50,
        top: 50,
        left: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        backgroundColor: '#001f3f', // White background color for the border
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
    },
    avatar: {
        width: 135,
        height: 135,
        borderRadius: 65,
    },
    coverPhoto: {
        width: "100%",
        height: 125,
    },
    userName: {
        fontFamily: "TiltWarp-Regular",
        textAlign: 'center',
        color: '#001f3f',
        width: '100%',
        marginTop: 50,
        fontSize: 24,
    },
    userStatusActive: {
        fontFamily: "TiltWarp-Regular",
        textAlign: 'center',
        backgroundColor: '#28a745',
        color: 'white',
        fontSize: 15,
        position: 'absolute',
        top: 130,
        right: 10,
        padding: 5,
    },
    userStatusInactive: {
        fontFamily: "TiltWarp-Regular",
        textAlign: 'center',
        backgroundColor: '#dc3545',
        color: 'white',
        fontSize: 15,
        position: 'absolute',
        top: 130,
        right: 10,
        padding: 5,
    },
    userRole: {
        fontFamily: "TiltNeon-Regular",
        textAlign: 'center',
        color: '#001f3f',
        fontSize: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        marginRight: '2%',
        marginLeft: '4%',
        width: '100%',
    },
    tabBtn: {
        width: '20%',
        textAlign: 'center',
        backgroundColor: '#001f3f',
        marginLeft: 2,
        padding: 5,
    },
    tabBtnCenter: {
        width: '25%',
        backgroundColor: '#001f3f',
        marginLeft: 2,
        padding: 5,
    },
    tabBtnText: {
        fontFamily: "TiltWarp-Regular",
        textAlign: 'center',
        color: 'white',
    },
    scrollViewContainer: {
        marginRight: '5%',
        marginLeft: '5%',
        width: '90%',
    },
    userInfo: {
        backgroundColor: 'white',
        alignItems: 'center',
        zIndex: -99,
        width: '100%',
        height: 255,
    },
    textContent: {
        borderBottomColor: "#3c8dbc",
        borderBottomWidth: 1,
        paddingVertical: 10,
        width: '100%',
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

export default userProfileStyles;
