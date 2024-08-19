import { StyleSheet } from 'react-native';

const faqDetailsStyles = StyleSheet.create({
    container: {
        height: 700,
    },
    content: {
        marginTop: 10,
        padding: 20,
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    headerButton: {
        flexDirection: 'row', // Display children in a row
        justifyContent: 'space-between', // Align items with space between
        backgroundColor: 'white',
        padding: 15,
        marginTop: 35,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerButtonLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#001f3f',
    },
    headerQuestion: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#001f3f',
        marginBottom: 30,
    },
    headerContentLabel: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 20,
        color: '#001f3f',
        marginBottom: 10,
    },
    moreLikeThis: {
        fontFamily: 'TiltWarp-Regular',
        fontSize: 15,
        color: '#001f3f',
        marginTop: 20,
        marginBottom: 20,
    },
    headerContentAnswer: {
        fontFamily: 'RethinkSans-Regular',
        fontSize: 15,
        color: '#001f3f',
        marginBottom: 30,
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

export default faqDetailsStyles;
