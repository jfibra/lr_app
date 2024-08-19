// src/styles/loginStyles.js
import { StyleSheet } from 'react-native';
import { useFonts } from '../helpers/useFonts';

const loginStyles = StyleSheet.create({
    loginbackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    lrBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBox: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingBottom: 20,
    },
    loginformBox: {
        width: 500,
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 25
    },
    loginformBoxTitle: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 30,
    },
    loginformBoxTitle2: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 30,
        marginBottom: 75,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '60%',
    },
    loginformBoxTitle3: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 30,
        marginBottom: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '60%',
    },
    loginCaption: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 20,
        marginBottom: 50,
        textAlign: 'center',
        width: '60%',
    },
    loginCaption2: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 25,
        textAlign: 'center',
        width: '60%',
    },
    loginCaption3: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 50,
        textAlign: 'center',
        fontStyle: 'italic',
        width: '60%',
    },
    loginInput: {
        width: 300,
        height: 40,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        color: 'white',
        backgroundColor: '#c8d0e1',
        borderWidth: 1,
        borderColor: '#001f3f'
    },
    loginButton: {
        width: 300,
        backgroundColor: '#b21010',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#001f3f'
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#b21010'
    },
    formCaptionBottom: {
        width: 300,
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 20,
    },
    showPasswordContainer: {
        justifyContent: 'flex-end', // Align the content to the end of the container (right in LTR languages)
        marginTop: 10, // Adjust as needed
        marginBottom: 10, // Adjust as needed
        flexDirection: 'row', // Ensure it's a row to align to the right
        width: '50%'
    },
    showPasswordText: {
        color: '#001f3f', // Blue color, you can change it as needed
        textAlign:'right'
    },
});

export default loginStyles;
