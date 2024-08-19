import { StyleSheet } from 'react-native';

const searchPageStyles = StyleSheet.create({
    container: {
        height: 660,
    },
    content: {
        marginTop: 10,
        padding: 20,
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    topSearchBar: {
        flexDirection: 'row', // Display children in a row
        justifyContent: 'space-between', // Align items with space between
        marginTop: 35,
        marginBottom: 20,
        padding : 10,
        width: '100%',
        paddingHorizontal: 10,
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

export default searchPageStyles;
