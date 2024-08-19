// src/styles/dashboardStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const sliderWidth = width;
const itemWidth = width - 40;

const dashboardStyles = StyleSheet.create({
    loginbackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        marginTop: 10,
    },
    swiperContainer: {
        width: '96%',
        margin: '2%',
    },
    swiper: {
        flex: 1, // Make the swiper flex to fill the available space
    },
    slide: {
        flex: 1,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    toolGroup: {
        flexDirection: 'row',
        width: '100%',
    },
    toolGroup2ndRow: {
        flexDirection: 'row',
    },
    toolLabel: {
        fontFamily: 'TiltWarp-Regular',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        flexWrap: 'wrap', // Enable text wrapping
        width: '75%',
    },
    toolLabel2: {
        fontFamily: 'TiltWarp-Regular',
        color: '#001f3f',
        marginTop: 10,
        textAlign: 'center',
        flexWrap: 'wrap', // Enable text wrapping
        width: '75%',
    },
    toolBtnRed: {
        backgroundColor: '#b21010',
        borderRadius: 25,
        height: 150,
        width: '46%',
        margin: '2%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnNavy: {
        backgroundColor: '#001f3f',
        borderRadius: 25,
        height: 150,
        width: '46%',
        margin: '2%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnWarning: {
        backgroundColor: '#f79226',
        borderRadius: 25,
        height: 150,
        width: '46%',
        margin: '2%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnDefault: {
        backgroundColor: 'white',
        borderRadius: 25,
        border: 2,
        borderColor: '#001f3f',
        height: 150,
        width: '46%',
        margin: '2%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnRedDisabled: {
        backgroundColor: '#e77c85',
        borderRadius: 25,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnNavyDisabled: {
        backgroundColor: '#596d82',
        borderRadius: 25,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    toolBtnWarningDisabled: {
        backgroundColor: '#fdd55d',
        borderRadius: 25,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalHeaderPrimary: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#007bff",
        width: '90%',
        padding: 10,
        flexDirection: 'row', // Display children in a row
        alignItems: 'center', // Center items vertically
    },
    modalHeaderPrimaryText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
    },
    modalHeaderPrimaryIcon: {
        color: "white",
    },
    modalBody: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "white",
        alignItems: "left",
        width: '90%',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    openButton: {
        padding: 10,
        position: 'absolute',
        right: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "left"
    },
    sliderContainer: {
        height: 200,
        alignItems: 'center',
        marginBottom: 20,
    },
    sliderImageContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20, // Adjust the top position as needed
        left: 0,
        right: 0,
        zIndex: 99,
        height: '100%',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage: {
        width: "100%",
        height: 200,
    },
    slideAnnouncements: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideAnnouncements: {
        fontFamily: 'TiltNeon-Regular',
        alignItems: 'center',
        textAlign: 'center',
    },
    sliderImageAnnouncements: {
        width: "100%",
        height: '100%',
    },
    paginationContainer: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
    },
    inactiveDotStyle: {
        // Define styles for inactive dots here
    },
    closeBtn: {
        backgroundColor: '#b21010',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        height: 40,
        width: 120,
        position: 'absolute',
        right: 0,
        top: 50,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1
    },
    closeLabel: {
        fontFamily: 'RethinkSans-SemiBold',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
    closeIcon: {
        position: 'relative',
    }
});

export default dashboardStyles;
