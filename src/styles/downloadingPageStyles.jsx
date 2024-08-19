// src/styles/downloadingPageStyles.js
import { StyleSheet } from 'react-native';
import { useFonts } from '../helpers/useFonts';

const downloadingPageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolBtnNavy: {
        backgroundColor: 'white',
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
    toolLabel: {
        fontFamily: 'TiltWarp-Regular',
        color: '#001f3f',
        marginTop: 10,
        textAlign: 'center',
        flexWrap: 'wrap', // Enable text wrapping
        width: '75%',
    },
});

export default downloadingPageStyles;
