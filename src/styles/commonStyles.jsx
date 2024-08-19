// src/styles/commonStyles.js
import { StyleSheet } from 'react-native';
import { useFonts } from '../helpers/useFonts';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 1,
    },
    scrollSupportContainer: {
        flexGrow: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    scrollProfileViewContainer: {
        height: 580,
    },
    scrollSalesViewContainer: {
        height: 1000,
    },
    scrollImageViewContainer: {
        height: 'auto',
        margin: 0,
    },
    loginbackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    footer: {
        flexDirection: 'row', // Display children in a row
        justifyContent: 'center', // Center the children horizontally
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0080c8',
        padding: 10,
    },
    sidebarNav: {
        flexDirection: 'row', // Change to row to align items horizontally
        alignItems: 'center', // Center items vertically
        color: '#001f3f',
        marginLeft: 15, // Adjust the margin for better spacing
        marginTop: 20, // Adjust the margin for better spacing
    },
    sidebarNavIcon: {
        color: '#001f3f',
        marginRight: 10, // Adjust the margin to separate icon and text
    },
    sidebarNavLabel: {
        fontSize: 20,
        color: '#001f3f',
        textAlign: 'left',
    },
    navigationButton: {
        flexDirection: 'column', // Align items in a column inside each button
        alignItems: 'center',
        marginHorizontal: 20, // Adjust the spacing between buttons
    },
    navIcon: {
        color: 'white',
    },
    navLabel: {
        fontFamily: 'RethinkSans-Regular',
        color: 'white',
        textAlign: 'center',
        marginTop: 5, // Adjust the spacing between icon and label
    }, //Dashboard
    toolGroup: {
        flexDirection: 'row',
        padding: 10,
    },
    toolGroup2ndRow: {
        flexDirection: 'row',
        padding: 10,
        top: 165
    },
    toolBtnRed: {
        backgroundColor: '#b21010',
        borderRadius: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    toolBtnNavy: {
        backgroundColor: '#001f3f',
        borderRadius: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    toolBtnWarning: {
        backgroundColor: '#f79226',
        borderRadius: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    toolLabel: {
        fontFamily: 'TiltWarp-Regular',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    }, //AgentProfile
    bannerAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        left: 10,
        top: 50,
        position: 'relative',
        borderColor: 'white',
        borderWidth: 5,
    },
    imageProfileBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        overflow: 'hidden',
    },
    clickableIcon: {
        width: 35,
        height: 35,
        zIndex: 9999,
        position: 'absolute',
        bottom: 5,
        right: 5,
        color: 'white',
        backgroundColor: '#0081c9',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 3,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    clickableBannerIcon: {
        width: 35,
        height: 35,
        zIndex: 9999,
        position: 'absolute',
        right: 10,
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    editProfileIcon: {
        width: 115,
        height: 35,
        flexDirection: 'row',
        color: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderColor: '#0a66c2',
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        marginBottom: 5,
    },
    editProfileName: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#0a66c2'
    },
    profileDetails: {
        top: 30,
        padding: 20,
        borderColor: '#e7e2dc',
        borderBottomWidth: 10,
    },
    profileStatus: {
        backgroundColor: '#03c988',
        textAlign: 'center',
        borderRadius: 20,
        width: '15%',
        padding: 3,
        top: 155,
        right: 5,
        position: 'absolute',
        color: 'white',
    },
    profileStatusInactive: {
        backgroundColor: '#dc3535',
        textAlign: 'center',
        borderRadius: 20,
        width: '18%',
        padding: 3,
        top: 155,
        right: 5,
        position: 'absolute',
        color: 'white',
    },
    profileName: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 25,
        marginBottom: 5,
    },
    profileRole: {
        fontFamily: 'RethinkSans-Regular',
        fontSize: 18,
        marginBottom: 5,
    },
    systemDetails: {
        top: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#e7e2dc',
        borderBottomWidth: 10,
    },
    systemDetailsText: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#0a66c2',
        marginBottom: 10,
    },
    borderIdNumber: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 2,
    },
    idNumber: {
        position: 'absolute',
        right: 0,
    },
    idNumberText: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#4489cf',
    },
    idNumberGroup: {
        flexDirection: 'row', // Display children in a row
        borderBottomColor: '#adadad',
        borderBottomWidth: 1,
        paddingBottom: 7,
        marginTop: 10,
        width: '100%',
    },
    idNumberGroupEnd: {
        flexDirection: 'row', // Display children in a row
        paddingBottom: 7,
        marginTop: 10,
        width: '100%',
    },
    idNumberLong: {
        width: "70%",
    },
    idNumberLongText: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#4489cf',
        textAlign: 'right',
    },
    certLong: {
        width: "20%",
    },
    certLongText: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#4489cf',
        textAlign: 'right',
    },
    inputContainer: {
        position: 'relative',
        margin: 20,
        width: 300,
    },
    label: {
        marginBottom: 5,
        color: '#333',
        marginTop: 10,
        fontFamily: 'TiltWarp-Regular',
    },
    labelInfo: {
        marginBottom: 5,
        color: '#001f3f',
        textAlign: 'justify',
        fontFamily: 'RethinkSans-Regular',
        fontSize: 15,
        width: 320
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#333',
        width: 320,
        borderWidth: 0, // Remove the outline
    },
    textinput: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#333',
        width: 320,
        borderWidth: 0, // Remove the outline
    },
    selectGender: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#333',
        width: 320,
        borderWidth: 0, // Remove the outline
    },
    labelGender: {
        marginBottom: 5,
        color: 'black',
        fontFamily: 'RethinkSans-Regular',
        textAlign: 'left',
        fontSize: 15,
    },
    horizontalLine: {
        borderBottomColor: '#ddd', // Adjust the color as needed
        borderBottomWidth: 1,
        marginVertical: 10, // Adjust the spacing as needed
        width: 320,
    },
    submitButton: {
        backgroundColor: '#e1ac0d', // Add your desired background color
        padding: 10, // Add padding for better appearance
        borderRadius: 5, // Optional: Add border radius for rounded corners
        width: 320,
        marginTop: 20
    },
    submitLabel: {
        fontFamily: 'TiltWarp-Regular',
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
        fontFamily: 'TiltWarp-Regular',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    labelDescr: {
        marginBottom: 5,
        color: '#333',
        marginTop: 10,
        fontFamily: 'TiltWarp-Regular',
        fontSize: 13,
        textAlign: 'justify'
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
        borderWidth: 1,
        borderColor: '#ced4da',
    },
    BrowseButtonText: {
        position: 'absolute',
        right: 13,
        width: '25%',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
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
        borderWidth: 1,
        borderColor: '#ced4da',
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
    titleSales: {
        fontSize: 24,
        fontFamily: 'TiltWarp-Regular',
        marginBottom: 16,
        marginLeft: 10
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
        marginLeft: 10,
        borderRadius: 0
    },
    tableHeaderLeft: {
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        width: "33%",
        height: 35,
        paddingTop: 5,
        backgroundColor: "#001f3f",
        color: "white",
        borderTopLeftRadius: 20,
    },
    tableHeaderRight: {
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        width: "33%",
        height: 35,
        paddingTop: 5,
        backgroundColor: "#001f3f",
        color: "white",
        borderTopRightRadius: 20,
    },
    prevBtnDisable: {
        width: 115,
        height: 35,
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#77a99d',
        borderRadius: 10,
        padding: 5,
        marginBottom: 5,
    },
    prevBtnDisableLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: 'black'
    },
    prevBtn: {
        width: 115,
        height: 35,
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#001f3f',
        borderRadius: 10,
        padding: 5,
        marginBottom: 5,
    },
    prevBtnLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: 'white'
    },
    nextBtn: {
        width: 115,
        height: 35,
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#001f3f',
        borderRadius: 10,
        padding: 5,
        marginBottom: 5,
        position: 'absolute',
        right: 0,
    },
    nextBtnLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: 'white'
    },
    containerSupport: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titleSupport: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subTitleSupport: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b21010',
        marginBottom: 10,
    },
    formContainerSupport: {
        width: '100%',
    },
    inputSupport: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#333',
        width: 320,
        borderWidth: 0, // Remove the outline
        marginBottom: 10,
    },
    issueInput: {
        height: 80,
        marginBottom: 10,
    },
    containerTicket: {
        flex: 1,
        padding: 20,
        alignItems: 'left',
    },
    headingTicket: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    navigationButtonTicket: {
        flexDirection: 'column', // Align items in a column inside each button
        alignItems: 'center',
        marginHorizontal: 20, // Adjust the spacing between buttons
        backgroundColor: '#1e3050',
        padding: 20,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10
    },
    navIconTicket: {
        color: 'white',
    },
    navLabelTicket: {
        fontFamily: 'RethinkSans-Regular',
        color: 'white',
        textAlign: 'center',
        marginTop: 5, // Adjust the spacing between icon and label
    },
    navigationButtonResponses: {
        flexDirection: 'column', // Align items in a column inside each button
        alignItems: 'center',
        marginHorizontal: 20, // Adjust the spacing between buttons
        backgroundColor: '#dc3545',
        padding: 20,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20,
        left: 10,
        zIndex: 10
    },
    navIconResponses: {
        color: 'white',
    },
    navLabelResponses: {
        fontFamily: 'RethinkSans-Regular',
        color: 'white',
        textAlign: 'center',
        marginTop: 5, // Adjust the spacing between icon and label
    },
    navyBox: {
        width: '100%',
        height: 450,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    navyBoxTitle: {
        width: '100%',
        backgroundColor: '#1e3050',
        height: 50,
        fontWeight: 'bold',
        fontFamily: 'RethinkSans-Regular',
        fontSize: 25,
        color: 'white',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 10,
    }
});

export default commonStyles;
