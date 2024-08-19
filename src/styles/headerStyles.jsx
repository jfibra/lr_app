// src/styles/headerStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const sliderWidth = width;
const itemWidth = width - 40;

const headerStyles = StyleSheet.create({
    myNavigationContainer: {
        padding: 10,
        marginTop: 35,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
        alignItems: 'left',
    },
    myNavigationLogo: {
        width: 150,
        height: 75
    },
    logoutBtn: {
        justifyContent: 'center',
        backgroundColor: '#001f3f',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        height: 60,
        padding: 10,
        margin: 15,
        borderRadius: 10,
        borderColor: '#001f3f',
        borderWidth: 2
    },
    logoutLabel: {
        marginTop: 5,
        fontSize: 10,
        color: 'white'
    }
});

export default headerStyles;
