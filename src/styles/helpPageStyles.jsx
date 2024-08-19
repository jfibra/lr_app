// src/styles/helpPageStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const sliderWidth = width;
const itemWidth = width - 40;

const helpPageStyles = StyleSheet.create({
    container: {
        height: 705,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        height: 600,
        marginTop: 160,
        zIndex: 99,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    topCorner: {
        zIndex: 50,
        height: 200,
        width: '100%',
        marginTop: 35,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'absolute',
    },
    getInTouch: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    headerLabel: {
        margin: 15,
        marginBottom: 0,
        fontSize: 18,
        fontWeight: 'bold'
    },
    searchHeader: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'TiltWarp-Regular',
        top: -25,
        marginHorizontal: 25,
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
    faqButton: {
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
    faqButtonLabel: {
        flexWrap: 'wrap',
        width: '85%',
        fontFamily: 'TiltWarp-Regular',
        fontSize: 13,
        color: '#001f3f',
    }
});

export default helpPageStyles;
