// src/styles/qrCodePageStyles.js
import { StyleSheet } from 'react-native';
import { useFonts } from '../helpers/useFonts';

const qrCodePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 75,
    },
    neonButtonLeft: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#001f3f',
        borderWidth: 2,
        borderColor: '#a7e5fc',
        shadowColor: '#9be2fe',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        position: 'absolute',
        bottom: 50,
        left: 40,
    },
    neonButtonRight: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#001f3f',
        borderWidth: 2,
        borderColor: '#a7e5fc',
        shadowColor: '#9be2fe',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        position: 'absolute',
        bottom: 50,
        right: 40,
    },
    neonButtonIcon: {
        marginRight: 5,
        alignItems: 'center',
        color: 'white',
    },
    neonButtonLabel: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    neonButtonArea: {
        alignItems: 'center',
        width: '100%',
        marginTop: 75,
    },
    neonButtonCenter: {
        backgroundColor: '#ca313f',
        alignItems: 'center',
        padding: 20,
        width: '50%',
        borderRadius: 5,
        shadowColor: '#9be2fe',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
});

export default qrCodePageStyles;
